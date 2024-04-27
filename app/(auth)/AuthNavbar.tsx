
// fonts
import { Bowlby_One_SC } from 'next/font/google'

const bowlby = Bowlby_One_SC({
    subsets: ["latin"],
    weight: '400'
});

type Props = {}

function AuthNavbar({ }: Props) {
    return (
        <>
            <header className='mb-8'>
                <div className={`${bowlby.className} text-primary text-3xl`} data-testid="logo">Explovents</div>
            </header>
        </>
    )
}

export default AuthNavbar