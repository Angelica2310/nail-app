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
  title: {
    default: "Nail Express Tewkesbury",
    template: "%s | Nail Express Tewkesbury",
  },
  description:
    "Professional nail salon in Tewkesbury offering BIAB, gel, nail extensions and artistic designs. Walk-ins welcome.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${greatVibes.variable} min-h-screen flex flex-col`}
      >
        <NavBar />
        {/* pushes footer to the bottom when content is short */}
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
