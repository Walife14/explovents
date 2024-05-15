import { createClient } from '@/utils/supabase/server'

// components
import AuthNavbar from './AuthNavbar';
import { redirect } from 'next/navigation';

type Props = {
    children: React.ReactNode;
}

async function AuthLayout({ children }: Props) {
    const supabase = createClient()
    const { data, error } = await supabase.auth.getUser()

    if (data.user) {
        redirect('/')
    }

    return (
        <div className="w-4/6 mx-auto mt-20">
            <AuthNavbar />
            {children}
        </div>
    )
}

export default AuthLayout