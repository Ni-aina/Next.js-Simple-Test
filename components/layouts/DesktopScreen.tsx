"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DesktopScreen = () => {
    const pathname = usePathname();

    return (
        <nav className="flex flex-1 justify-between items-center">
            <Link href="/" className="flex gap-4 items-center scale-hover">
                <Image
                    src={"/icons/house-logo.png"}
                    alt="house-logo"
                    width={50}
                    height={32}
                />
                <h1 className="text-3xl font-bold" style={{ fontFamily: "Montserrat" }} >Blog</h1>
            </Link>
            <ul className="flex space-x-8 items-center text-lg">
                <Link href="/"
                    className={`scale-hover ${pathname === "/" && "text-theme"
                        }`}
                >
                    <li>Articles</li>
                </Link>
                <Link href="/contact"
                    className={`scale-hover ${pathname === "/contact" && "text-theme"
                        }`}
                >
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    );
}

export default DesktopScreen;