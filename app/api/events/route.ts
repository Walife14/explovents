import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

enum EventTypes {
    boat = 'boat_party',
    pool = 'pool_party',
    beach = 'beach_party',
    other = 'other_party'
}

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const supabase = createClient()

    // Start by querying the `events` table
    let query = supabase
        .from('events')
        .select('*, event_dates (*)', { count: 'exact' });

    // Apply filters to the `events` table
    if (searchParams.has('country') && searchParams.has('city')) {
        query = query
            .eq('country', searchParams.get('country')!.toLowerCase())
            .eq('city', searchParams.get('city')!.toLowerCase());

        let event_types: EventTypes[] = [];

        if (searchParams.has('boatparty')) {
            event_types.push(EventTypes.boat);
        }
        if (searchParams.has('poolparty')) {
            event_types.push(EventTypes.pool);
        }
        if (searchParams.has('beachparty')) {
            event_types.push(EventTypes.beach);
        }
        if (searchParams.has('otherparty')) {
            event_types.push(EventTypes.other);
        }

        query = query.in('event_type', event_types);
    }

    // Fetch the events with their dates
    const { data: events, count, error } = await query;

    if (error) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Filter event_dates based on the provided date range
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    const filteredEvents = events
        .map((event) => {
            // Filter the event_dates for each event
            const filteredDates = event.event_dates.filter((date: any) => {
                if (startDate && endDate) {
                    return date.date >= startDate && date.date <= endDate;
                }
                return true; // If no date range is provided, include all dates
            });

            // Return the event with only the filtered dates
            return {
                ...event,
                event_dates: filteredDates,
            };
        })
        // Remove events that have no dates in the specified range
        .filter((event) => event.event_dates.length > 0);

    return NextResponse.json({ events: filteredEvents, count: filteredEvents.length });
}

