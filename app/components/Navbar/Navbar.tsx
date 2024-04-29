"use client"

import Link from 'next/link';
import { useEffect, useState } from 'react';

// fonts
import { Bowlby_One_SC } from 'next/font/google'

const bowlby = Bowlby_One_SC({
    subsets: ["latin"],
    weight: '400'
});

type Props = {}

function Navbar({ }: Props) {
    const [isAtTop, setIsAtTop] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY === 0)
            console.log(isAtTop)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header className={`mb-8 w-full pt-10 fixed z-20 ${!isAtTop ? 'bg-white/80' : ''} pb-4 transition-colors duration-300`}>
            <div className='w-5/6 mx-auto flex justify-between'>
                <div className={`${bowlby.className} text-primary text-3xl`} data-testid="logo">Explovents</div>
                <nav>
                    <ul className='flex gap-x-4'>
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
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar