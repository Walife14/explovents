"use client"

import { usePathname, useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import { useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import Link from 'next/link';
import { revalidatePath } from 'next/cache';

// fonts
import { Bowlby_One_SC } from 'next/font/google'
import { logout } from '@/app/(auth)/actions';

const bowlby = Bowlby_One_SC({
    subsets: ["latin"],
    weight: '400'
});

type Props = {}

function Navbar({ }: Props) {
    const router = useRouter()
    const pathname = usePathname()
    const supabase = createClient()
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [isMyAccountNavOpen, setIsMyAccountNavOpen] = useState<boolean>(true)

    const handleLogout = async () => {
        try {
            await logout()

            location.reload()
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const { data, error } = await supabase.auth.getUser()
                if (data?.user) {
                    return data.user
                }
            } catch (error) {
                // console.error('error fetching user: ', error)
            }
        }

        fetchUser()
            .then((data) => {
                setUser(data)
                setIsLoading(false)
            })

        if (isMyAccountNavOpen) setIsMyAccountNavOpen(false)
    }, [pathname])

    return (
        <header className='z-50'>
            <nav>
                <div className='flex items-end justify-between mx-4 md:w-5/6 md:mx-auto py-8 flex-wrap'>
                    <Link href="/" className={`${bowlby.className} text-primary text-3xl`} data-testid="logo">Explovents</Link>
                    {/* <div> */}
                    {user && (
                        <span className='hidden md:inline-block text-dark-gray'>What&apos;s up, {user.email}!</span>
                    )}


                    <div className='basis-full flex justify-between py-4 font-semibold'>
                        <Link className={`flex items-center gap-x-2 rounded-full py-2 px-3 hover:ring-2 hover:ring-secondary group ${pathname === '/explore' ? 'ring-2 ring-secondary' : ''}`} href="/explore">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className={`w-6 h-6 group-hover:fill-yellow-400 group-hover:stroke-yellow-400 ${pathname === '/explore' ? 'fill-yellow-400 stroke-yellow-400' : ''}`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                            Events
                        </Link>
                        <ul className='flex items-center gap-x-4'>
                            {!isLoading && (
                                <>
                                    {!user ? (
                                        <>
                                            <li>
                                                <Link href="/login">
                                                    Login
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/register">
                                                    Register
                                                </Link>
                                            </li>
                                        </>
                                    ) : (
                                        <li>
                                            <div className='relative'>
                                                <button onClick={() => setIsMyAccountNavOpen(!isMyAccountNavOpen)} className={`${isMyAccountNavOpen && 'text-primary'} transition-colors duration-100`}>
                                                    My Account
                                                </button>
                                                <div className={`absolute flex flex-col w-screen -mr-4 md:w-max right-0 mt-1 rounded-md p-4 bg-white border shadow-md text-center gap-y-4 ${!isMyAccountNavOpen && 'hidden'}`}>
                                                    <span className='md:hidden text-dark-gray'>What&apos;s up, {user.email}!</span>
                                                    <Link href="/myaccount">
                                                        Manage Account
                                                    </Link>
                                                    <button onClick={handleLogout}>
                                                        Logout
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                    )}
                                </>
                            )}
                        </ul>
                    </div>
                    {/* </div> */}
                </div>
            </nav>
        </header>
    )
}

export default Navbar