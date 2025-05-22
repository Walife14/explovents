'use server'

import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function login(data: { email: string, password: string }, organizer?: boolean) {
    const supabase = createClient()

    const { error } = await supabase.auth.signInWithPassword(data)

    if (error) {
        throw new Error(error.message)
    }
    
    if (organizer) {
        revalidatePath('/organiser')
    } else {
        revalidatePath('/')
        redirect('/')
    }

}

export async function signup(data: { email: string, password: string, confirmPassword: string }) {
    const supabase = createClient()
    // add password and confirmPassword fields check

    const confirmedData = {
        email: data.email,
        password: data.password
    }

    const { error } = await supabase.auth.signUp(data)

    if (error) {
        throw new Error(error.message)
    }

    revalidatePath('/')
    redirect('/verify')
}

export async function logout() {
    const supabase = createClient()

    const { error } = await supabase.auth.signOut()

    if (error) {
        console.error(error)
    }
}