import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2024-06-20",
});

interface IEventOrder {
    id: number;
    created_at: string;
    userid: string;
    event_date_id: number;
    event_id: number;
    payment_status: string;
    total_amount: number;
    tickets_purchasing: number;
}

export async function POST(req: NextRequest) {
    try {
        const { orderId } = await req.json();

        // grab the pending event order
        const { data: eventOrder, error } = await getOrderDetails(orderId);

        // if pending order doesnt exist throw error
        if (error) {
            return NextResponse.json({ success: false, url: null, message: error.message });
        }

        // successfully got pending event order -> create checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "gbp",
                        product_data: {
                            name: eventOrder.eventData.title,
                        },
                        unit_amount: eventOrder.eventDateData.ticket_cost,
                    },
                    quantity: eventOrder.pendingOrderData.tickets_purchasing,
                },
            ],
            mode: "payment",
            success_url: `${req.headers.get("origin")}/payment/success/${eventOrder.eventDateData.event_id}`,
            cancel_url: `${req.headers.get("origin")}/payment/cancelled/${eventOrder.eventDateData.event_id}`,
        });

        // return the session id
        return NextResponse.json({
            success: true,
            url: session.url,
            message: "Successfully created checkout session",
        });
    } catch (error) {
        // console.log("Error creating the checkout session", error)
        return NextResponse.json({
            success: false,
            sessionId: null,
            message: error,
        });
    }
}

// get the pending event order they have just created and return it
async function getOrderDetails(orderId: string) {
    const supabase = createClient();

    const {
        data: { user },
        error: userError,
    } = await supabase.auth.getUser();

    if (userError) {
        return {
            error: { message: "Could not find a logged in user" },
            data: null,
        };
    }

    const { data: pendingOrderData, error: pendingOrderError } = await supabase
        .from("pending_event_orders")
        .select("*")
        .match({ id: orderId })
        .limit(1)
        .single();

    if (pendingOrderError) {
        return { error: { message: "Could not find pending event order" }, data: null };
    }

    // ensure that the pending event order belongs to the logged in user
    if (pendingOrderData.user_id !== user.id) {
        return {
            error: {
                message:
                    "The pending event order fetched does not belong to the currently signed in user",
            },
            data: null,
        };
    }

    // grab the event that they're paying for
    const { data: eventDateData, error: eventDateError } = await supabase
        .from('event_dates')
        .select('*')
        .eq('id', pendingOrderData.event_date_id)
        .single()


    const { data: eventData, error: eventError } = await supabase
        .from('events')
        .select('*')
        .eq('id', eventDateData.event_id)
        .single()

    // success
    return { error: null, data: { pendingOrderData, eventDateData, eventData } };
}
