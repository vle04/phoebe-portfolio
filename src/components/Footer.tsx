// footer at the bottom of every page

import Image from "next/image";
import Link from "next/link";
import RaccoonPhone from "@/public/images/raccoon-phone.png";
import Trio from "@/public/images/trio.png";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <div className="flex flex-col w-screen items-center">
      {/* images container */}
      <div className="flex flex-row w-full items-center justify-between">
        <Image
            src={RaccoonPhone}
            alt="raccoon holding a phone"
            width={100}
            height={140}
        />
        <Image
            src={Trio}
            alt="mia lin phoebe yao and vina le"
            width={260}
            height={97}
        />
      </div>

      {/* the rest of the footer */}
      <div className="flex flex-row justify-between bg-neutral-300 w-full items-center px-[40px] h-[6.5rem]">
        {/* links container */}
        <div>
          <Mail/>
        </div>

        {/* credits container */}
        <div className="h-full pt-[13px] text-right">
          <p>designed w ☕ by phoebe yao</p>
          <p>
            developed w 🍵 by{" "}
            <Link href={"https://github.com/vle04"} className="underline">
              <strong>vina le</strong>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
