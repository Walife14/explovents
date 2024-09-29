import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

interface IEventDate {
    id: number;
    created_at: Date;
    event_id: number;
    tickets_available: number;
    tickets_sold: number;
    date: Date;
    // add price in the future? each event has a different type even though they're the same event
}

// GET AVAILABLE EVENT DATES BY GIVEN ID AND RETURN ALL AVAILABLE DATES FOR EVENT
export async function GET(request: Request, context: any) {
    const { params } = context
    const supabase = createClient()

    // event dates without sensitive information
    const eventDatesNoSens = []

    const { data: eventDatesQuery, error } = await supabase
        .from('event_dates')
        .select()
        .eq('event_id', params.eventId)

    if (error) {
        console.log(error)
    }

    const eventDates: IEventDate[] = eventDatesQuery

    // loop through and return an array of events without sensitive information
    eventDates.map((event, index) => {
        const nOfTicketsAvailable = event.tickets_available - event.tickets_sold

        // create a new event object omitting the data not needed
        const noSensEvent = {
            id: event.id,
            created_at: event.created_at,
            event_id: event.event_id,
            tickets_available: nOfTicketsAvailable > 6 ? 6 : nOfTicketsAvailable, // calculate number of tickets if 6 or above limit this to 6 or if 6 or less allow them to see
            date: event.date
        }

        eventDatesNoSens.push(noSensEvent)
    })

    return NextResponse.json(eventDatesNoSens)
}