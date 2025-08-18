// navigation menu on the home page
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HomeMenu() {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "home" },
    { href: "/projects", label: "projects" },
    { href: "/fine-art", label: "fine art" },
    { href: "/playground", label: "playground!" },
  ];

  return (
    <nav className="flex flex-col min-w-[200px] h-fit px-6 py-4 bg-neutral-300 text-[20px]">
      <p className="font-bold">menu</p>
      <hr className="my-2 w-full"></hr>
      <div className="flex flex-col">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-indigo-400 ${isActive ? "text-indigo-400" : "text-black"}`}
            >
              <p>{link.label}</p>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
