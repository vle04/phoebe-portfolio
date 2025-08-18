// footer at the bottom of every page

import Image from "next/image";
import Link from "next/link";
import RaccoonPhone from "../../public/images/raccoon-phone.png";
import Trio from "../../public/images/trio.png";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <div className="flex flex-col w-screen items-center mt-20">
      {/* images container */}
      <div className="flex flex-row w-full items-center justify-between pl-[50px]">
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
      <div className="flex flex-row justify-between bg-neutral-300 w-full items-center px-[40px] h-[6rem]">
        {/* links container */}
        <div className="flex flex-row items-center gap-2">
          <Icon icon="material-symbols:mail" width={40} height={40}/>
          <Icon icon="mdi:linkedin" width={40} height={40}/>
          <Icon icon="mdi:instagram" width={40} height={40}/>
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
