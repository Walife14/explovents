// components
import OrganiserNavbar from "./OrganiserNavbar";

type Props = {
    children: React.ReactNode;
}

async function OrganiserLayout({ children }: Props) {
    return (
        <div>
            <OrganiserNavbar />
            <main>
                {children}
            </main>
        </div>
    )
}

export default OrganiserLayout