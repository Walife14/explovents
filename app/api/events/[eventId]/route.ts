import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

// GET SPECIFIC EVENT BY ID AND RETURN
export async function GET(request: Request, context: any) {
    const { params } = context
    const supabase = createClient()

    const { data: event, error } = await supabase
        .from('events')
        .select()
        .eq('id', params.eventId)


    if (error) {
        console.log(error)
    }


    return NextResponse.json(event)
}