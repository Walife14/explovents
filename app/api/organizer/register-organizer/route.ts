import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const formData = await req.json()
    const supabase = createClient()

    // confirm that the password and confirmPassword are equal if not then send error
    if (formData.password !== formData.confirmPassword) {
        return NextResponse.json(
            { error: "Error creating user passwords do not match!" },
            { status: 400 })
    }

    const { data: user, error: userError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
            data: {
                role: 'organizer'
            }
        }
    })

    if (userError) {
        console.log("We have an error creating a new user with the role of organizer")
        return NextResponse.json(
            { error: "Error registering a new user with the role of organizer" },
            { status: 400 }
        )
    }

    return NextResponse.json("Successfully created a new account")
}
