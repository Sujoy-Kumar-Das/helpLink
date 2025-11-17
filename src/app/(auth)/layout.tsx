import Navbar from "@/components/ui/shared/navbar/Navbar";
import { ReactElement } from "react";

export default function AuthLayout({ children }: { children: ReactElement }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
