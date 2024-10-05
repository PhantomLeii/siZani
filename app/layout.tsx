import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavbarMenu from "@/components/NavbarMenu";
import ConvexWithClerkProvider from "@/context/ConvexWithClerkProvider";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Sizani Platform",
  description: "Connecting users with government services efficiently.",
  keywords: [
    "Sizani",
    "government services",
    "user platform",
    "efficiency",
    "public services",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <ConvexWithClerkProvider>
          <NavbarMenu />
          <div className="absolute top-[88px] left-0 w-full">{children}</div>
        </ConvexWithClerkProvider>
      </body>
    </html>
  );
}
