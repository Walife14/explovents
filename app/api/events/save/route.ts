import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";


// THIS grabs all of the events currently saved by the current user
export async function GET() {
    // GET CURRENT USER
    const supabase = createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    // CHECK IF THERE IS AN ERROR WITH FETCHING THE CURRENT USER
    if (authError) {
        console.log("We could not fetch the current user", authError)
    }

    // CHECK WITHIN THE USER_EVENTS_RELATIONS TABLE FOR ANY INSTANCES OF THE CURRENT USER ID WITH A LIST OF THE EVENTS ID
    const { data, error: error2 } = await supabase
        .from('user_event_relations')
        .select()
        .eq('user_id', user.id)

    // HANDLE IF ANY ERROR FINDING ANY INSTANCES IN THE USER_RELATIONS_TABLE OR ANY OTHER ERRORS
    if (error2) {
        console.log("We have had an error when attempting to fetch any events saved by the currently signed in user", error2)
    }

    // USE THE LIST OF RETURNED EVENT_ID'S TO GRAB ALL OF THE EVENTS BY ID
    const { data: events, error: eventsError } = await supabase
        .from('events')
        .select()
        .in('id', data.map((savedRelation) => savedRelation.event_id))

    // CHECK IF THERE IS AN ERROR WITH GRABBING ALL OF THE EVENTS -> HANDLE ERROR
    if (eventsError) {
        console.log('Error fetching the current user saved events', eventsError)
    }

    // RETURN THE LIST OF EVENTS SAVED BY THE CURRENT USER
    return NextResponse.json(events)
}

// THIS updates the user profile table adding or removing the current event by id from the users "saved_events" field
export async function PUT(req: NextRequest) {
    const { id } = await req.json()
    const supabase = createClient()

    // GRAB CURRENT USER ID
    const { data: { user }, error: userError } = await supabase.auth.getUser()

    // CHECK IF CURRENT USER ID AND THE ID FROM REQUEST AND CURRENT USER ID RELATION EXISTS
    const { data: relationData, error: relationError } = await supabase
        .from('user_event_relations')
        .select()
        .match({ user_id: user.id, event_id: id })

    console.log("the variable that is checking whether the relation already exists ", relationData)

    // IF THE USER AND EVENT RELATION ENTRY EXISTS THEN DELETE RELATION
    if (relationData.length === 1) {
        const { data: deleteRelationData, error } = await supabase
            .from('user_event_relations')
            .delete()
            .match({ user_id: user.id, event_id: id })

        return NextResponse.json({
            'message': 'deleted the relation that existed'
        })
    }

    // IF THE USER AND EVENT RELATION ENTRY DOESNT EXIST THEN CREATE RELATION
    if (relationData.length === 0) {
        const { data: insertRelationData, error } = await supabase
            .from('user_event_relations')
            .insert([
                { user_id: user.id, event_id: id }
            ])

        return NextResponse.json({
            'message': 'created the relation that did not exist'
        })
    }
}