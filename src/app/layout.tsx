import { Provider } from "@/provider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../global.css";
import { Metadata } from "next/dist/types";

export const metadata: Metadata = {
  title: "HelpLink",
  description: "Web site created with Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Provider>{children}</Provider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
