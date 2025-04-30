"use client";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "../ui/sheet";
import { ArrowLeftCircle, Menu } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const MobileScreen = () => {
    const [sheetOpen, setSheetOpen] = useState(false);
    const handleSheetClose = () => setSheetOpen(false);
    const pathname = usePathname();
    return (
        <nav className="flex flex-1 justify-between gap-4 items-center">
            <Link href="/" className="flex gap-2 items-center scale-hover">
                <Image
                    src={"/icons/house-logo.png"}
                    alt="house-logo"
                    width={30}
                    height={22}
                />
                <h1 className="text-xl font-bold" style={{ fontFamily: "Montserrat" }}>Blog</h1>
            </Link>
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                <SheetTrigger>
                    <Menu size={30} className="cursor-pointer" />
                </SheetTrigger>
                <SheetContent className="bg-white border-none p-5 max-w-xs">
                    <SheetTitle className="sr-only">Menu link</SheetTitle>
                    <SheetDescription className="sr-only">
                        Click to navigate to another page
                    </SheetDescription>
                    <div className="flex flex-wrap justify-between gap-4 items-center">
                        <SheetClose>
                            <ArrowLeftCircle size={22} className="cursor-pointer" />
                        </SheetClose>
                    </div>
                    <ul className="flex flex-col space-y-4 text-md sm:text-lg">
                        <Link onClick={handleSheetClose} href="/"
                            className={`scale-hover ${pathname === "/" && "text-theme"
                                }`}
                        >
                            <li>Articles</li>
                        </Link>
                        <Link onClick={handleSheetClose} href="/contact"
                            className={`scale-hover ${pathname === "/contact" && "text-theme"
                                }`}
                        >
                            <li>Contact</li>
                        </Link>
                    </ul>
                </SheetContent>
            </Sheet>
        </nav>
    );
}

export default MobileScreen;