import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

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