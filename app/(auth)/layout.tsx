import { ReactNode } from 'react'

// components
import AuthNavbar from './AuthNavbar';

type Props = {
    children: ReactNode;
}

function AuthLayout({ children }: Props) {
    return (
        <div className="w-4/6 mx-auto mt-20">
            <AuthNavbar />
            {children}
        </div>
    )
}

export default AuthLayout