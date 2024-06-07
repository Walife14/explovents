// fonts
import { Bowlby_One_SC } from "next/font/google";
import Link from "next/link";

const bowlby = Bowlby_One_SC({
  subsets: ["latin"],
  weight: "400",
});

type Props = {};

function AuthNavbar({}: Props) {
  return (
    <header className="mb-2 md:mb-8 mx-4 md:mx-0">
      <Link href="/">
        <div
          className={`${bowlby.className} text-primary text-3xl`}
          data-testid="logo"
        >
          Explovents
        </div>
      </Link>
    </header>
  );
}

export default AuthNavbar;
