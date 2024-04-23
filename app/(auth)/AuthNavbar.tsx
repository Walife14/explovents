
// fonts
import { Bowlby_One_SC } from 'next/font/google'

const bowlby = Bowlby_One_SC({
    subsets: ["latin"],
    weight: '400'
});

type Props = {}

function AuthNavbar({ }: Props) {
    return (
        <h1 className={`${bowlby.className} text-primary`}>Explovents</h1>
    )
}

export default AuthNavbar