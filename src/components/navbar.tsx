"use client";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import React, { useState } from "react";
import Link from "next/link";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Image from "next/image";

export default function NavBar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const [showMenu, setShowMenu] = useState<boolean>(false);

    return (
        <div className={cn("fixed top-0 w-full mx-auto z-50 bg-white shadow-md ", showMenu ? "inset-0 " : "")}>
            <div className={cn("relative w-full justify-between p-8 flex flex-col lg:flex-row h-full", className)}>
                <div className="flex w-full justify-between">
                    <Link className="flex gap-4 items-center" href="/">
                        <Image src="/fyif.png" width={50} height={50} alt="Fremont Inspire Youth Foundation" />
                        <span className="text-xl lg:text-2xl font-bold text-neutral-700">Fremont Inspire Youth Foundation</span>
                    </Link>
                    {
                        showMenu ? <IconX size={36} className={`hover:cursor-pointer block lg:hidden`} onClick={() => { setShowMenu(!showMenu) }} /> : <IconMenu2 size={36} className={`hover:cursor-pointer block lg:hidden`} onClick={() => { setShowMenu(!showMenu) }} />
                    }
                </div>


                {
                    showMenu ? <div className="flex flex-col items-center justify-center h-full">
                        <NavBarItem active={active} text="About Us" setActive={setActive} menuOpen={showMenu} link="/about" />
                    </div> : <div className="flex gap-8 w-full justify-end">
                        <NavBarItem active={active} text="About Us" setActive={setActive} menuOpen={showMenu} link="/about" />
                    </div>
                }

            </div>
        </div >

    )
}

interface NavBarItemProps {
    active: string | null;
    text: string;
    setActive: (text: string) => void;
    menuOpen?: boolean;
    link: string;
}

function NavBarItem({ active, text, setActive, menuOpen, link }: NavBarItemProps) {
    return (
        <div className={cn("px-2 py-1 hover:cursor-pointer", menuOpen ? 'block text-2xl' : 'hidden lg:block')} onClick={() => { setActive(text) }}>
            <Link className={cn('group transition duration-300')} href={link}>
                <p className="font-semibold">{text}</p>
                <span className={cn(active === text ? "max-w-full" : "max-w-0", "block group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600")}></span>
            </Link>
        </div>
    )
}