import Navbar from "@/app/components/Navbar/Navbar";
import { ReactNode, Suspense } from "react";
import Footer from "@/app/components/Footer/Footer";
import LoadingSpinner from "@/app/components/LoadingSpinner/LoadingSpinner";

type Props = {
  children: ReactNode;
};

function layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        {children}
      </Suspense>
      <Footer />
    </>
  );
}

export default layout;