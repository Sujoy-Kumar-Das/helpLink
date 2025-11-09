import Footer from "@/components/ui/shared/Footer";
import Navbar from "@/components/ui/shared/navbar/Navbar";
import { Provider } from "@/provider";
import "../global.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const metadata = {
  title: "HelpLink",
  description: "Web site created with Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      <html lang="en">
        <body>
          {/* <Navbar /> */}
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </Provider>
  );
}
