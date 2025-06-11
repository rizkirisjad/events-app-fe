"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
];

type Props = {
  onClick?: () => void;
  vertical?: boolean;
};

export default function NavigationLinks({ onClick, vertical = false }: Props) {
  const pathname = usePathname();

  return (
    <nav
      className={
        vertical ? "flex flex-col space-y-4" : "hidden lg:flex space-x-8"
      }
    >
      {NAV_ITEMS.map((item) => {
        const active = pathname === item.href;
        const baseClass = "transition-colors";
        const activeClass = "text-indigo-600 font-medium";
        const inactiveClass = vertical
          ? "text-gray-600 hover:text-gray-900"
          : "text-gray-500 hover:text-gray-900";

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`${baseClass} ${active ? activeClass : inactiveClass} ${
              vertical ? "py-2 text-lg" : ""
            }`}
            onClick={onClick}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
