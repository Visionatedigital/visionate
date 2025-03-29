import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from 'next/font/google'
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';


const font = Plus_Jakarta_Sans({
  weight : '400',
  subsets : ['latin']
})

export const metadata: Metadata = {
  title: "Visionate Digital",
  description: "Innovative Technology Solutions for the Digital Age",
  icons: {
    icon: '/Visionate-Logo.svg',
    apple: '/Visionate-Logo.svg',
  },
  openGraph: {
    title: 'Visionate Digital',
    description: 'Innovative Technology Solutions for the Digital Age',
    images: [
      {
        url: '/Visionate-Logo.svg',
        width: 800,
        height: 600,
        alt: 'Visionate Digital Logo',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >

        {children}
        <Analytics />
      </body>
    </html>
  );
}
