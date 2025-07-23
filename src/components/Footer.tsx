// footer at the bottom of every page

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col w-screen items-center">
      {/* images container */}
      <div>images</div>

      {/* the rest of the footer */}
      <div className="flex flex-row justify-between bg-neutral-300 w-full items-center px-[40px] h-[8rem]">
        {/* links container */}
        <div>link</div>

        {/* credits container */}
        <div className="h-full pt-[13px] text-right">
          <p>designed w ☕ by phoebe yao</p>
          <p>
            developed w 🍵 by{" "}
            <Link href={"https://github.com/vle04"} className="underline">
              vina le
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
