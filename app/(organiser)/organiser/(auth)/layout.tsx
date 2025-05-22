import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
    children: React.ReactNode
}

export default async function layout({ children }: Props) {
    const supabase = createClient()
    const { data, error } = await supabase.auth.getUser()

    if (data.user) {
        redirect('/organiser')
    }
    
    return (
        <>
            {children}
        </>
    )
}