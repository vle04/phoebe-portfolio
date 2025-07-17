"use client";

import Link from "next/link";

export default function HomeMenu() {
  return (
    <nav className="flex flex-col border min-w-[100px] h-fit px-3 py-2">
      <h1 className="font-bold">menu</h1>
      <hr className="my-2 w-full"></hr>
      <div className="flex flex-col">
        <Link href={"/"}>
          <h2>home</h2>
        </Link>

        <Link href={"/projects"}>
          <h2>projects</h2>
        </Link>

        <Link href={"/fine-art"}>
          <h2>fine art</h2>
        </Link>

        <Link href={"/photos"}>
          <h2>photos</h2>
        </Link>
      </div>
    </nav>
  );
}
