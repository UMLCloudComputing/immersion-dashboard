import type { Metadata } from "next";
import "./globals.css";
import SessionProvider from "@/components/SessionProvider";
import { NavBar } from "@/components/NavBar";
import { Provider } from "@/components/ui/provider"

export const metadata: Metadata = {
  title: "Immersion",
  description: "Seamlessly integrate Discord with Engage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="immersion.svg" type="img/svg+xml"></link>
      <body>
        <Provider>
          <SessionProvider>
            <NavBar />
            {children}
          </SessionProvider>
        </Provider>
      </body>

    </html >
  );
}
