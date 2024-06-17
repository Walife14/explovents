import Navbar from "@/app/components/Navbar/Navbar";
import { ReactNode, Suspense } from "react";
import Footer from "@/app/components/Footer/Footer";

type Props = {
  children: ReactNode;
};

function layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <Suspense fallback={<>Loading...</>}>{children}</Suspense>
      <Footer />
    </>
  );
}

export default layout;
