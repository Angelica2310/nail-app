import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-(--background) pt-16 px-4 md:px-12">
      <div className="mx-auto max-w-6xl grid gap-14 text-sm text-(--textMain) items-start text-center md:text-left md:grid-cols-3 md:gap-10">
        {/* Logo & address */}
        <div className="flex flex-col items-center md:items-start gap-3 leading-tight">
          <div className="h-[60px] flex items-center">
            <Image
              src="/logo.png"
              width={110}
              height={110}
              alt="logo"
              className="block"
            />
          </div>

          <p>
            153 High St,
            <br />
            Tewkesbury GL20 5JP
          </p>
          <p className="font-medium">Tel: 01684 292988</p>
          <p className="font-medium">Email: info@nailexpress.co.uk</p>

          <div className="flex gap-6 mt-2">
            <a
              href="https://www.facebook.com/profile.php?id=100065182883219"
              target="_blank"
              className="opacity-80 hover:opacity-100 transition"
            >
              <Image
                src="/facebook.png"
                alt="facebook"
                width={26}
                height={26}
              />
            </a>
            <a
              href="https://www.instagram.com/nailexpress_tewkesbury/?hl=en"
              target="_blank"
              className="opacity-80 hover:opacity-100 transition"
            >
              <Image
                src="/instagram.png"
                alt="instagram"
                width={26}
                height={26}
              />
            </a>
          </div>
        </div>

        {/* Browse (desktop only) */}
        <div className="hidden md:block justify-self-center">
          <h3 className="text-sm tracking-widest text-(--primary) mb-6">
            BROWSE
          </h3>
          <div className="flex flex-col gap-3">
            <Link href="/" className="hover:text-(--primary) transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-(--primary) transition">
              About Us
            </Link>
            <Link href="/gallery" className="hover:text-(--primary) transition">
              Gallery
            </Link>
            <Link href="/contact" className="hover:text-(--primary) transition">
              Contact
            </Link>
            <Link href="/service" className="hover:text-(--primary) transition">
              Services
            </Link>
            <Link href="/policy" className="hover:text-(--primary) transition">
              Policies
            </Link>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="flex flex-col items-center md:items-start gap-1 md:justify-self-end">
          <h3 className="text-sm tracking-widest text-(--primary) mb-4">
            OPENING HOURS
          </h3>
          <span>Mon – Fri: 9am – 6pm</span>
          <span>Saturday: 9am – 5pm</span>
          <span className="italic">Sunday: Closed</span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-16 border-t border-(--accent)/40 pt-6 pb-8 text-center text-xs text-(--textMain)/70">
        © {new Date().getFullYear()} Nail Express Tewkesbury. All rights
        reserved. Design & development by{" "}
        <a
          href="https://www.angelicagiang.com/"
          target="_blank"
          rel="noopener"
          className="text-(--primary)/70 hover:text-(--primary) transition"
        >
          Angelica
        </a>
      </div>
    </footer>
  );
}
