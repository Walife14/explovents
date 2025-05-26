import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const supabase = createClient()
    const formData = await req.json()

    // get the currently signed in user
    const { data: { user }, error: userError } = await supabase.auth.getUser()

    if (userError || !user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // get their organizer profile
    const { data: organizer, error: organizerError } = await supabase
        .from("organizers")
        .select("*")
        .eq("id", user.id)
        .single()

    console.log(organizer)

    if (organizerError) {
        return NextResponse.json(
            { error: "Organizer profile not found" },
            { status: 404 }
        )
    }

    // update the organizer field in their organizer profile
    const { company_name } = formData

    const { error: updateError } = await supabase
        .from("organizers")
        .update({ company_name })
        .eq("id", user.id)

    if (updateError) {
        return NextResponse.json(
            { error: "Failed to update the organizer profile" },
            { status: 500 }
        )
    }

    return NextResponse.json({ message: 'Profile updated successfully' })
}