import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Raleway } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const playFairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  //👇 Add variable to our object
  variable: '--font-playfair-display',
})

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  //👇 Add variable to our object
  variable: '--font-raleway',
})

export const metadata: Metadata = {
  title: "The Tubular Treehouse",
  description: "Made by yours truly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en"
      className={`${playFairDisplay.className}`}
    >
      <body className="bg-backgroundOuter">
        <div className="bg-backgroundInner m-6 flex flex-col min-h-screen">
          <main className="flex-grow">
            {children}
          </main>
          <footer className=" text-textColor text-center p-4">
            © {new Date().getFullYear()} Joel Barkley. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
