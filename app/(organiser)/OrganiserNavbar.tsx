import Link from "next/link";

// fonts
import { Bowlby_One_SC } from "next/font/google";

const bowlby = Bowlby_One_SC({
    subsets: ["latin"],
    weight: "400",
});

type Props = {};

function Navbar({ }: Props) {

    return (
        <header className="z-50">
            <nav>
                <div className="flex items-end justify-between mx-4 md:w-5/6 md:mx-auto py-8 flex-wrap">
                    <Link
                        href="/organiser"
                        className={`${bowlby.className} text-primary text-3xl`}
                        data-testid="logo"
                    >
                        Explovents
                        <span className="text-lg pl-1 text-[#16397A]">ORGANISER</span>
                    </Link>
                    {/* <div className="basis-full flex justify-between py-4 font-semibold">
                        <ul className="flex items-center gap-x-4">
                            <li>
                                <Link href="/login">Login</Link>
                            </li>
                            <li>
                                <Link href="/register">Register</Link>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
