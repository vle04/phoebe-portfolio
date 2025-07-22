// navigation menu on the home page

import Link from "next/link";

export default function HomeMenu() {
  return (
    <nav className="flex flex-col min-w-[100px] h-fit px-3 py-2">
      <h1 className="font-bold">menu</h1>
      <hr className="my-2 w-full"></hr>
      <div className="flex flex-col">
        <Link href={"/"} className="hover:text-indigo-400">
          <h2>home</h2>
        </Link>

        <Link href={"/projects"} className="hover:text-indigo-400">
          <h2>projects</h2>
        </Link>

        <Link href={"/fine-art"} className="hover:text-indigo-400">
          <h2>fine art</h2>
        </Link>

        <Link href={"/playground"} className="hover:text-indigo-400">
          <h2>playground!</h2>
        </Link>
      </div>
    </nav>
  );
}
