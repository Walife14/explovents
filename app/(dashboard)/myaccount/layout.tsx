import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { ReactNode } from "react"

type Props = {
    children: ReactNode;
}

async function layout({ children }: Props) {
    const supabase = createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/')
    }

    return (
        <>
            {children}
        </>
    )
}

export default layout