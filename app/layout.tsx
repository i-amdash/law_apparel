import type { Metadata } from "next";
import { Lateef, Noto_Sans, Nunito, Open_Sans, Playfair_Display, Poppins, Roboto } from "next/font/google";
import "./globals.css";

const inter = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "O&B Apparel",
  description: "Your one stop shop for all legal apparels",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/public/images/logo.png" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
