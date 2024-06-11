import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

enum EventTypes {
    boat = 'boat_party',
    pool = 'pool_party',
    beach = 'beach_party',
    other = 'other_party'
}

export async function GET(request: NextRequest ) {
    const searchParams = request.nextUrl.searchParams
    const supabase = createClient()

    let query = supabase.from('events').select('*', { count: 'exact'})
    
    // user search *not initial load fetching all events*
    if (searchParams.has('country') && searchParams.has('city')) {
        query = query.eq('country', searchParams.get('country').toLowerCase()).eq('city', searchParams.get('city').toLowerCase())

        let event_types: EventTypes[] = []
        
        if (searchParams.has('boatparty')) {
            event_types.push(EventTypes.boat)
        }
        if (searchParams.has('poolparty')) {
            event_types.push(EventTypes.pool)
        }
        if (searchParams.has('beachparty')) {
            event_types.push(EventTypes.beach)
        }
        if (searchParams.has('otherparty')) {
            event_types.push(EventTypes.other)
        }

        query = query.in('event_type', event_types)
    }

    const { data: events, count, error } = await query

    if (error) console.log(error)

    return NextResponse.json({ events, count })
}