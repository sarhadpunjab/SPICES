import type {Metadata} from 'next';
import { Playfair_Display, Montserrat } from "next/font/google";
import './globals.css'; // Global styles

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: 'SPICES | Pure • Natural • Authentic',
  description: 'Pure spices. Pure moments. Pure you. Elevate every meal with our authentic, natural spices.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-[#3E2723] bg-[#F4F1EA]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
