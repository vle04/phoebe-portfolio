"use client"

import Link from "next/link"

export default function HomeMenu() {
    return (
        <div>
            {/* navigation links */}
            <div className="gap-6 text-center">
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
        </div>
    )
}