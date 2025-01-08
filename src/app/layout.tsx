import type { Metadata } from "next";
import "./globals.css";
import SessionProvider from "@/components/SessionProvider";

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
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html >
  );
}
