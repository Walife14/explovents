"use client"

import Link from "next/link";

// fonts
import { bowlby } from '@/app/fonts'

// icons
import { Bars2Icon } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type Props = {};

function Navbar({ }: Props) {
    const pathname = usePathname()
    const [navOpen, setNavOpen] = useState<boolean>(false)
    const [user, setUser] = useState<{ id: string, email: string, role: string } | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        // every time the url route changes this will re-trigger
        setNavOpen(false)
    }, [pathname])

    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch("/api/user", { credentials: "include" })
            const data = await res.json()
            setLoading(true)

            if (res.ok) {
                setUser(data)
                setLoading(false)
            } else {
                // handle no user
                setUser(null)
                setLoading(false)
            }
        }

        fetchUser()
    }, [])

    return (
        <header className="z-50">
            <nav>
                <div className="flex items-end justify-between mx-4 md:w-5/6 md:mx-auto py-8 flex-wrap">
                    <Link
                        href="/organiser"
                        className={`${bowlby.className} text-primary text-3xl`}
                        data-testid="logo"
                        suppressHydrationWarning
                    >
                        Explovents
                        <span className="text-lg pl-1 text-[#16397A]">ORGANISER</span>
                    </Link>

                    <button onClick={() => setNavOpen(true)}>
                        <Bars2Icon className='size-6 my-4 mx-auto'></Bars2Icon>
                    </button>

                    {navOpen && (
                        <div className="absolute right-0 top-0 h-screen min-w-[30vw] bg-gray-200 p-4">
                            <button onClick={() => setNavOpen(false)}>
                                <XMarkIcon className='size-6 mx-auto'></XMarkIcon>
                            </button>
                            <ul className="flex flex-col items-center gap-y-2 my-4">
                                {!user ? (
                                    <>
                                        <li>
                                            <Link href="/organiser/login">Login</Link>
                                        </li>
                                        <li>
                                            <Link href="/organiser/login">Register</Link>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            Welcome back {user.email}!
                                        </li>
                                        {user.role === 'organizer' && (
                                            <li>
                                                <Link href="/organiser/dashboard">Dashboard</Link>
                                            </li>
                                        )}
                                    </>
                                )}
                                <li>
                                    <Link href="#">Frequently Asked Questions (FAQ)</Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
