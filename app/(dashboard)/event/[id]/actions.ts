'use server'

import { createClient } from "@/utils/supabase/server";

// THIS uses the event with the date selected to create an order
export async function createPendingEventOrder(event_date_id: number, nOfTicketsToBuy: number) {
    const supabase = createClient()

    try {
        // RECEIVE THE USER_ID
        const { data: { user }, error: authError } = await supabase.auth.getUser()

        // HANDLE ANY ERRORS GETTING THE CURRENT USER
        if (authError) {
            return { success: false, message: `We could not fetch a currently signed in user. Error: ${authError.message}` }
        }

        // CHECK THAT AN EVENT EXISTS WITH THE GIVEN EVENT_DATE_ID
        const { data: eventData, error: eventError } = await supabase
            .from('event_dates')
            .select()
            .eq('id', event_date_id)
            .single()

        if (eventError) {
            return { success: false, message: `We couldn't find an event with the given id. Error: ${eventError.message}` }
        }

        const ticketsLeft = eventData.tickets_available - eventData.tickets_sold // number of tickets left to sell
        // IF THE USER IS TRYING TO BUY MORE THAN 6 RETURN ERROR
        if (nOfTicketsToBuy > 6) {
            return { success: false, message: 'Cannot buy more than 6 tickets at a time.' }
        }
        // ENSURING EVENT SELECTED STILL HAS TICKET AMOUNT TO SELL BASED ON THE AMOUNT USER WANTS TO BUY
        if (nOfTicketsToBuy > ticketsLeft) {
            return { success: false, message: 'Number of tickets attempting to buy has exceeded amount available to sell.' }
        }

        // CREATE PENDING ORDER
        const { data: orderId, error: orderError } = await supabase
            .rpc('create_pending_event_order', {
                user_id: user.id,
                event_date_id,
                tickets_purchasing: nOfTicketsToBuy
            })

        // HANDLE ERROR IN PENDING EVENT ORDER CREATION
        if (orderError) {
            return { success: false , message: `We ran into an error creating the pending event order. Error: ${orderError.message}` }
        }

        console.log("this: ", orderId)

        // FINISH -- SUCCESS
        return { success: true, message: 'successfully created the order!', orderId }
    } catch (error) {
        // FINISH -- FAILED
        console.log(error)
        return { success: false, message: `Unexpected error: ${error.message}` }
    }
}