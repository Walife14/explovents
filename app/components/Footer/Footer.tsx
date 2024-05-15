import Image from 'next/image'
import Link from 'next/link'

// fonts
import { Bowlby_One_SC } from 'next/font/google'

// images
import Ico_instagram from '@/public/images/icons/Instagram_logo_white_glyph.svg'
import Ico_x from '@/public/images/icons/X_logo_white_glyph.svg'
import Ico_facebook from '@/public/images/icons/Facebook_logo_white_glyph.svg'

const bowlby = Bowlby_One_SC({
    subsets: ["latin"],
    weight: '400'
});


type Props = {}

function Footer({ }: Props) {
    return (
        <footer>
            <div className='w-5/6 mx-auto my-20 text-white flex flex-col gap-y-4'>
                <div className="grid grid-cols-2">
                    <div className='flex flex-col gap-y-4'>
                        <Link className={`${bowlby.className} text-primary text-3xl`} href="/">Explovents</Link>
                        <ul className='text-xl font-normal space-y-2'>
                            <li>Boat parties</li>
                            <li>Beach parties</li>
                            <li>Pool parties</li>
                            <li>Other events</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-y-4'>
                        <h2 className='text-2xl'>Why <span className={`${bowlby.className} text-primary`}>Explovents</span>?</h2>
                        <ul className='space-y-2 text-xl'>
                            <li><span className='font-semibold'>Hot Events:</span> Access exclusive events.</li>
                            <li><span className='font-semibold'>Easy Bookings:</span> Effortless event booking.</li>
                            <li><span className='font-semibold'>Unbeatable Vibes:</span> Party atmosphere, guaranteed.</li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-end gap-x-4'>
                    <Link href="#">
                        <Image src={Ico_facebook} height={24} alt="Follow us on Facebook" priority={false} />
                    </Link>
                    <Link href="#">
                        <Image src={Ico_instagram} height={24} alt="Follow us on Instagram" priority={false} />
                    </Link>
                    <Link href="#">
                        <Image src={Ico_x} height={24} alt="Follow us on X" priority={false} />
                    </Link>
                </div>
                <div className='border-t border-white p-4'>
                    <p className='text-sm'>&copy; 2024 - 2024 Explovents Ltd</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer