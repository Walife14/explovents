"use client"

import Link from 'next/link';

// fonts
import { Bowlby_One_SC } from 'next/font/google'
import { usePathname } from 'next/navigation';

const bowlby = Bowlby_One_SC({
    subsets: ["latin"],
    weight: '400'
});

type Props = {}

function Navbar({ }: Props) {
    const pathname = usePathname()

    const name = 'Lucas'

    return (
        <header>
            <nav>
                <div className='flex items-end justify-between w-5/6 mx-auto py-8 flex-wrap'>
                    <Link href="/" className={`${bowlby.className} text-primary text-3xl`} data-testid="logo">Explovents</Link>
                    <span className='text-dark-gray'>What&apos;s up, {name}!</span>
                    <div className='basis-full flex justify-between py-4 font-semibold'>
                        <Link className={`flex items-center gap-x-2 rounded-full py-2 px-3 hover:ring-2 hover:ring-secondary group ${pathname === '/explore' ? 'ring-2 ring-secondary' : ''}`} href="/explore">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className={`w-6 h-6 group-hover:fill-yellow-400 group-hover:stroke-yellow-400 ${pathname === '/explore' ? 'fill-yellow-400 stroke-yellow-400' : ''}`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                            Events
                        </Link>
                        <ul className='flex items-center gap-x-4'>
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
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar