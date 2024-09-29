'use server'

import { createClient } from "@/utils/supabase/server";

// THIS uses the event with the date selected to create an order
export async function createPendingEventOrder(event_date_id: number) {
    const supabase = createClient()
    // // RECEIVE THE USER_ID
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    
    // // HANDLE ANY ERRORS GETTING THE CURRENT USER
    if (authError) {
        console.log("We could not fetch a currently signed in user", authError)
        return
    }

    // // CHECK THAT AN EVENT EXISTS WITH THE GIVEN EVENT_DATE_ID
    const { data: eventData, error: eventError } = await supabase
        .from('event_dates')
        .select()
        .eq('id', event_date_id)
        .single()
    
    if (eventError) {
        console.log("We couldn't find an event with the given id", eventError)
        return
    }

    // // ENSURE THAT EVENT_DATE_ID STILL HAS AVAILABLE TICKETS AND CREATE PENDING ORDER
    const { data: orderData, error: orderError } = await supabase
        .rpc('create_pending_event_order', {
            user_id: user.id,
            event_date_id,
            total_amount: 10
        })
    
    // // HANDLE ERROR IN PENDING EVENT ORDER CREATION
    if (orderError) {
        console.log("We ran into an error creating the pending event order", orderError)
        return
    }

    return orderData
}