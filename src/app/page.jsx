import Image from "next/image";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import Review from "../components/Review";

export default function Home() {
  return (
    <div>
      <Hero />
      <Introduction />
      <Review />
      {/* <div style={{ padding: 40 }}>Deployed OK ✅</div> */}
    </div>
  );
}
