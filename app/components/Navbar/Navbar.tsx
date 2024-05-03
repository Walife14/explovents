import Link from 'next/link';

// fonts
import { Bowlby_One_SC } from 'next/font/google'

const bowlby = Bowlby_One_SC({
    subsets: ["latin"],
    weight: '400'
});

type Props = {}

function Navbar({ }: Props) {
    return (
        <header className={`mb-8 w-full pt-10 z-20 pb-4 transition-colors duration-300`}>
            <div className='w-5/6 mx-auto flex justify-between'>
                <Link href="/" className={`${bowlby.className} text-primary text-3xl`} data-testid="logo">Explovents</Link>
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