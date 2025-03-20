import "./globals.css";
import { DM_Sans } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ThemeProvider from "../utils/ThemeProvider";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "ICPAK",
  description: "Welcome to ICPAK",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.className}>
      <head>
      <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    rel="stylesheet"
  />
  <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-lightBackground dark:bg-darkBackground pt-8 transition-colors duration-100 ease-in-out">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar /> {/* No need to manage state here */}
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
