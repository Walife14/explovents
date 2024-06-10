import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest ) {
    const searchParams = request.nextUrl.searchParams
    const supabase = createClient()

    let query = supabase.from('events').select('*', { count: 'exact'})
    
    if (searchParams.has('country') && searchParams.has('city')) {
        query = query.eq('country', searchParams.get('country').toLowerCase()).eq('city', searchParams.get('city').toLowerCase())
    }

    const { data: events, count, error } = await query

    console.log(count)

    if (error) console.log(error)

    return NextResponse.json({ events, count })
}