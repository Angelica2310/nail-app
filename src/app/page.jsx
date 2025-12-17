import Image from "next/image";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import Review from "../components/Review";

export const metadata = {
  title: "Modern Artistic Nails",
  description:
    "Professional nail salon in Tewkesbury specialising in BIAB, gel nails and modern artistic designs.",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <Introduction />
      <Review />
    </div>
  );
}
