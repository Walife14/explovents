import { ReactNode } from 'react'

// components
import AuthNavbar from './AuthNavbar';

type Props = {
    children: ReactNode;
}

function AuthLayout({ children }: Props) {
    return (
        <>
            <AuthNavbar />
            {children}
        </>
    )
}

export default AuthLayout