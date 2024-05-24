import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
    const supabase = createClient()

    // get the currently signed in user from auth
    const { data: { user }, error } = await supabase.auth.getUser()

    // get the users profile
    const { data: userProfile, error: profileError } = await supabase
        .from('profiles')
        .select("*")
        .match({ id: user.id })
        .single()

    if (profileError) {
        console.log("error getting users profile ", profileError)
    }

    return NextResponse.json(userProfile)
}