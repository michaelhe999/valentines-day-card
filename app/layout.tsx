import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Will You Be My ACM Valentine?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" ></link>
      </head>
      <body>
        {children}
        <div className="hack-logo">
          <Image src="/ACMHack.png" alt="acm logo" width={130} height={40} />
        </div>
      </body>
    </html>
  );
}
