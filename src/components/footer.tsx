import { IconBrandInstagram, IconMail } from "@tabler/icons-react";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="bg-black flex justify-center items-center p-20 h-[15rem] w-full gap-4">
            <Link href="mailto:fremontinspire@gmail.com"><IconMail size={36} className="text-white" /></Link>
            <Link href="https://www.instagram.com/fremontinspiredyouth/"><IconBrandInstagram size={36} className="text-white" /></Link>
        </div>
    )
}
