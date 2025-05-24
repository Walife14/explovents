import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
    const supabase = createClient()

    // get the currently signed in user from auth
    const { data: { user }, error } = await supabase.auth.getUser()

    if (!user || error) {
        return NextResponse.json({ error: "Not Authenticated" }, { status: 401 })
    }

    // get the users profile
    const { data: userProfile, error: profileError } = await supabase
        .from('profiles')
        .select("*")
        .match({ id: user.id })
        .single()

    if (profileError) {
        console.log("error getting users profile ", profileError)
        return NextResponse.json({ error: "Error fetching profile" }, { status: 500 })
    }

    // get users organizer profile if they are an organizer
    let organizerInfo = null
    if (userProfile.role === 'organizer') {
        const { data: organizerData, error: organizerError } = await supabase
            .from('organizers')
            .select('*')
            .eq('id', user.id)
            .single()

        if (organizerError) {
            console.error('Organizer fetch error: ', organizerError)
        } else {
            organizerInfo = organizerData
        }
    }

    return NextResponse.json({
        id: userProfile.id,
        email: user.email,
        role: userProfile.role,
        company_name: organizerInfo?.company_name ?? null
    })
}