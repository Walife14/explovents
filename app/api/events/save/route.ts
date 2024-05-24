import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    const supabase = createClient()

    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError) {
        console.log(authError)
    }

    const { data: row, error: userError } = await supabase
        .from('profiles')
        .select('saved_events')
        .match({ 'id': user.id })
        .single()

    if (userError) {
        console.log(userError)
    }

    // get the ids of users saved events
    const { saved_events } = row

    // fetch all the saved events
    const { data: fetchedEvents, error: eventsError } = await supabase
        .from('events')
        .select('*')
        .in('id', saved_events)

    if (eventsError) {
        console.log(eventsError)
    }

    return NextResponse.json(fetchedEvents)
}

export async function PUT(req: NextRequest) {
    const { id } = await req.json()
    const supabase = createClient()

    // get the current user to update their savedEvents
    const { data: { user } } = await supabase.auth.getUser()

    const { data: row, error: profileError } = await supabase
        .from('profiles')
        .select('saved_events')
        .match({ id: user.id })
        .single()

    if (profileError) {
        console.log("failed to fetch user")
    }

    const { saved_events } = row // get saved_events array from profile

    if (saved_events.includes(id)) {
        // remove the event id from array as they already had it saved
        const index = saved_events.indexOf(id)
        saved_events.splice(index, 1)
    } else {
        // add the event id since they did not have it
        saved_events.unshift(id)
    }

    // update the user saved_events array
    const { data, error } = await supabase
        .from('profiles')
        .update({ saved_events })
        .match({ id: user.id })

    if (error) {
        console.log(error)
    }

    return NextResponse.json({
        'message': 'Successfully updated'
    })
}