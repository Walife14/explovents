import Navbar from "@/app/components/Navbar/Navbar"
import { ReactNode } from "react"
import Footer from "@/app/components/Footer/Footer";

type Props = {
    children: ReactNode;
}

function layout({ children }: Props) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default layout