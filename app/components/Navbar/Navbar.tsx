
// fonts
import { Bowlby_One_SC } from 'next/font/google'
import Link from 'next/link';

const bowlby = Bowlby_One_SC({
    subsets: ["latin"],
    weight: '400'
});

type Props = {}

function Navbar({ }: Props) {
    return (
        <header className='mb-8 w-full pt-10 fixed'>
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