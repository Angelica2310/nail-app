import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "./globals.css";
import { Great_Vibes, Nunito } from "next/font/google";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata = {
  title: "Nail Express Tewkesbury",
  description:
    "Your go-to spot for creative nail art, flawless gel finishes, and self-care vibes. Style meets comfort at our nail studio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${greatVibes.variable}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
