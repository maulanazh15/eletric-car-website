import type { Metadata } from "next";
import "./globals.css";

import { Exo } from 'next/font/google'

const exo = Exo({
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets:['latin','latin-ext']

});

export const metadata: Metadata = {
  title: "Electric Car Website",
  description: "Electric Car for the future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${exo.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
