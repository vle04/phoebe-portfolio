// client wrapper with conditional logic, keeps layout.tsx server side
"use client"; // needed to use pathname

import { usePathname } from "next/navigation";
import HomeMenu from "./HomeMenu";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const isHome = usePathname() === "/";

  // unique layout for the home page
  if (isHome) {
    return (
      <main className="w-full">
        <div className="flex flex-col items-center justify-center">
          <HomeMenu />
          {children}
        </div>
      </main>
    );
  }

  return (
    // default layout
    <div className="flex w-full px-10 gap-8">
      <HomeMenu />
      <main className="flex-1">{children}</main>
    </div>
  );
}
