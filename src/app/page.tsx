// home page
"use client";

import Link from "next/link";

export default function Home() {
  return (
    // home page content
    <section className="flex justify-center items-center">
      {/* testing embeds */}
      <Link href={"/testing"}>
        <p>testing embeds</p>
      </Link>
    </section>
  );
}