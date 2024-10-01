import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2024-06-20',
})

export async function POST(req: NextRequest) {
    try {
        const { orderId } = await req.json()

        // const orderDetails = await getOrderDetails(orderId) // make a function getting the order details -> make sure to confirm that the pending order exists


        // if pending order doesnt exist throw error

        // successfully got pending event order -> create checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price_data: {
                    currency: 'gbp',
                    product_data: {
                        name: 'The Event Name',
                    },
                    unit_amount: 2000,
                },
                quantity: 2,
            }],
            mode: 'payment',
            success_url: `${req.headers.get('origin')}/payment/success?event_id=${1}`, // add the event id from the orderId
            cancel_url: `${req.headers.get('origin')}/payment/cancel?event_id=${1}`,
        })

        // return the session id
        return NextResponse.json({ success: true, url: session.url, message: 'Successfully created checkout session' })
    } catch (error) {
        return NextResponse.json({ success: false, sessionId: null, message: 'Failed to create checkout session' })
        console.log("Error creating the checkout session", error)
    }
}

async function getOrderDetails(orderId: string) {

}