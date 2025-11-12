import Footer from "@/components/ui/shared/Footer";
import Navbar from "@/components/ui/shared/navbar/Navbar";
import { ReactElement } from "react";

export default function CommonLayout({ children }: { children: ReactElement }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
