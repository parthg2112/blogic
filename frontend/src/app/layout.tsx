import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import DotBackground from "./components/DotBackground"; // Import the new component

// Font configuration
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ['400', '500', '700'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: "Inneraktive Blog",
  description: "Insights and articles from Inneraktive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        {/* The interactive background component */}
        <DotBackground />
        
        {/* Your existing layout structure */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
