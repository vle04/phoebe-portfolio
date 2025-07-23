// header at the top of every page (except home)

import Image from "next/image";
import Raccoon from "@/public/images/raccoon-gesture.png";

export default function NavBar() {
  return (
    <header className="relative flex w-screen mb-20 justify-end items-center">
      <h1 className="text-[103px] font-light px-[160px] relative">phoebe yao</h1>
      <Image
        src={Raccoon}
        alt="raccoon gesturing at the title phoebe yao"
        width={100}
        height={100}
        className="absolute -bottom-12 right-15"
      />
    </header>
  );
}
