// navigation bar at the top of every page (except home)

import Link from "next/link";

// potentional params:
// number of skills
// image path

export default function NavBar() {
  return (
    <nav className="flex flex-row bg-neutral-300 items-center w-fit h-fit mb-2 px-8 rounded-full">
      <div className="flex flex-row gap-6 text-2xl">
        <Link href={"/"} className="hover:text-indigo-400">
          <h2>home</h2>
        </Link>

        <Link href={"/projects"} className="hover:text-indigo-400">
          <h2>projects</h2>
        </Link>
      </div>

      <h1 className="text-5xl mx-12">phoebe yao lol</h1>

      <div className="flex flex-row gap-8 text-2xl">
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
