// client wrapper with conditional logic, keeps layout.tsx server side
"use client" // needed to use pathname

import NavBar from "./NavBar";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function LayoutNav({ children }: { children: ReactNode }) {
    const isHomePage = usePathname() === "/";
    return (
        <>
            { !isHomePage && <NavBar/> }
            <main>{children}</main>
        </>
    );
}