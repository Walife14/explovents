import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
    const supabase = createClient()

    const { data: events, error } = await supabase
        .from('events')
        .select()

    if (error) console.log(error)

    return NextResponse.json(events)
}