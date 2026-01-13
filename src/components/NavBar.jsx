"use client";
import React, { useEffect, useState } from "react";
import ActiveLink from "./ActiveLink";
import Image from "next/image";
import Link from "next/link";
import MenuDropDown from "./MenuDropDown";
import BookingButton from "./BookingButton";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-50
        transition-all duration-300
        ${
          scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
        }
      `}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 md:px-12 py-7">
        {/* LEFT */}
        <div className="flex items-center gap-6">
          {/* Mobile */}
          <div className="md:hidden">
            <MenuDropDown />
          </div>

          {/* Desktop */}
          <div className="hidden md:flex gap-6 text-xs tracking-widest text-gray-700">
            <ActiveLink href="/" variant="homeNav">
              HOME
            </ActiveLink>
            <ActiveLink href="/about" variant="homeNav">
              ABOUT US
            </ActiveLink>
            <ActiveLink href="/gallery" variant="homeNav">
              GALLERY
            </ActiveLink>
            <ActiveLink href="/contact" variant="homeNav">
              CONTACT
            </ActiveLink>
            <ActiveLink href="/service" variant="homeNav">
              SERVICES
            </ActiveLink>
            <ActiveLink href="/policy" variant="homeNav">
              POLICIES
            </ActiveLink>
          </div>
        </div>

        {/* CENTER LOGO */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <Image
            src="/logo.png"
            alt="logo"
            width={180}
            height={180}
            className="w-28 md:w-36 h-auto"
            priority
          />
        </Link>

        {/* RIGHT */}
        <Link href="/book">
          <div className="flex items-center">
            <button
              className="
            border border-(--primary)
            bg-(--primary)
            px-4 py-2
            text-[11px] md:text-xs
            tracking-widest
            text-white
            hover:bg-transparent hover:text-(--primary)
            transition
            cursor-pointer
          "
            >
              BOOK NOW
            </button>
          </div>
        </Link>
      </nav>
    </header>
  );
}
