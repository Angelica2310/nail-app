"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ActiveLink({ href, children, variant }) {
  const pathName = usePathname();
  const isActive = pathName === href;

  const styles = {
    homeNav: isActive ? "text-(--primary) cursor-pointer" : "",
  };

  return (
    <Link href={href} className={styles[variant] || ""}>
      {children}
    </Link>
  );
}
