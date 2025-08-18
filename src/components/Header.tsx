// header at the top of every page (except home)
"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="relative flex w-screen mb-[20px] items-center">
      <Link href={"/"}>
        <h1 className="text-[74px] px-[55px] mt-[20px]" style={{ fontFamily: "PhoebeFont" }}>&#x3b; Phoebe Yao &#x3b;</h1>
      </Link>
    </header>
  );
}
