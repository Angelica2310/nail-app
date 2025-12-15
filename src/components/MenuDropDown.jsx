import * as DropDownMenu from "@radix-ui/react-dropdown-menu";
import { SquareMenu } from "lucide-react";
import Link from "next/link";

export default function MenuPage() {
  return (
    <div className="z-50">
      <DropDownMenu.Root>
        {/* Trigger */}
        <DropDownMenu.Trigger asChild>
          <button
            aria-label="Open navigation menu"
            className="p-1 rounded-md hover:bg-(--accent)/40 transition"
          >
            <SquareMenu width={28} height={28} />
          </button>
        </DropDownMenu.Trigger>

        {/* Menu */}
        <DropDownMenu.Portal>
          <DropDownMenu.Content
            sideOffset={12}
            className="
              w-screen
              flex flex-col items-center
              bg-white/60 backdrop-blur-xl
              shadow-[0_30px_60px_rgba(0,0,0,0.15)]
              border-t border-(--accent)/40
              py-8
              z-50
            "
          >
            {/* NAV ITEMS */}
            <DropDownMenu.Item asChild>
              <Link
                href="/"
                className="px-10 py-3 text-xs tracking-widest text-(--textMain)
                  rounded-full transition
                  hover:bg-(--primary)/10 hover:text-(--primary)"
              >
                HOME
              </Link>
            </DropDownMenu.Item>

            <DropDownMenu.Item asChild>
              <Link
                href="/service"
                className="px-10 py-3 text-xs tracking-widest text-(--textMain)
                  rounded-full transition
                  hover:bg-(--primary)/10 hover:text-(--primary)"
              >
                OUR SERVICES
              </Link>
            </DropDownMenu.Item>

            <DropDownMenu.Item asChild>
              <Link
                href="/about"
                className="px-10 py-3 text-xs tracking-widest text-(--textMain)
                  rounded-full transition
                  hover:bg-(--primary)/10 hover:text-(--primary)"
              >
                ABOUT US
              </Link>
            </DropDownMenu.Item>

            <DropDownMenu.Item asChild>
              <Link
                href="/contact"
                className="px-10 py-3 text-xs tracking-widest text-(--textMain)
                  rounded-full transition
                  hover:bg-(--primary)/10 hover:text-(--primary)"
              >
                CONTACT US
              </Link>
            </DropDownMenu.Item>

            {/* CTA */}
            <DropDownMenu.Item asChild>
              <Link
                href="/service"
                className="
                  mt-6
                  border border-(--primary)
                  px-6 py-2
                  text-[11px]
                  tracking-widest
                  text-(--primary)
                  hover:bg-(--primary)
                  hover:text-white
                  transition
                "
              >
                VIEW SERVICES
              </Link>
            </DropDownMenu.Item>
          </DropDownMenu.Content>
        </DropDownMenu.Portal>
      </DropDownMenu.Root>
    </div>
  );
}
