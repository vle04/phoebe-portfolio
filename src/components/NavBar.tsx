// navigation bar at the top of every page (except home)
"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex flex-row bg-neutral-300 justify-between items-center w-fit h-fit mb-2 px-6 rounded-full">
      <div className="flex flex-row gap-6">
        <Link href={"/"} className="hover:text-indigo-400">
          <h2>home</h2>
        </Link>

        <Link href={"/projects"} className="hover:text-indigo-400">
          <h2>projects</h2>
        </Link>
      </div>

      <h1 className="text-[40px] mx-10">phoebe yao lol</h1>

      <div className="flex flex-row gap-6">
        <Link href={"/fine-art"} className="hover:text-indigo-400">
          <h2>fine art</h2>
        </Link>

        <Link href={"/photos"} className="hover:text-indigo-400">
          <h2>photos</h2>
        </Link>
      </div>
    </nav>
  );
}
