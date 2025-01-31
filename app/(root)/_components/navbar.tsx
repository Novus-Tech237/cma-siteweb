"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, FacebookIcon, InstagramIcon, Menu, X } from "lucide-react"; // Import icons from lucide-react

const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev); // Toggle menu visibility
    };

    return (
        <header className="flex inset-0 z-50 sticky bg-blue-900">
            <div className="w-full pr-[15px] pl-[15px] mr-auto ml-auto">
                <nav className="pt-3 flex items-center md:justify-around justify-between">
                    <a className="navbar-brand" href="#">
                        <Image
                            src={"/logo.png"}
                            alt="solux-logo"
                            height={120}
                            width={120}
                        />
                    </a>
                    {/* Mobile Menu Icon */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white">
                            {isMenuOpen ? <X size={30} /> : <Menu size={30} />} {/* Toggle between Menu and Close icon */}
                        </button>
                    </div>
                    {/* Navigation Links */}
                    <div className="hidden md:flex uppercase text-white font-semibold items-center gap-x-[6rem]">
                        <Link href="/" className="hover:text-green-500 transition">Home</Link>
                        <Link href="/" className="hover:text-green-500 transition">A propos</Link>
                        <Link href="/" className="hover:text-green-500 transition">Service</Link>
                    </div>
                        <div className="md:flex hidden gap-8 ">
                            <Link href={"https://www.facebook.com/share/15sqW3dqMj/"}>
                                <FacebookIcon className="fill-white text-white"/>
                            </Link>
                            <Link href={""} className="text-white">
                                <InstagramIcon/>
                            </Link>
                        </div>

                </nav>
                {/* Additional style for the mobile menu with animation */}
                <div 
                    className={`md:hidden text-center transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                >
                    <Link href="/" className="block py-2 text-white hover:text-green-500">Home</Link>
                    <Link href="/" className="block py-2 text-white hover:text-green-500">A propos</Link>
                    <Link href="/" className="block py-2 text-white hover:text-green-500">Service</Link>
                    <div className="md:hidden flex items-center justify-center mt-4 gap-4 pb-4 ">
                            <Link href={"https://www.facebook.com/share/15sqW3dqMj/"}>
                                <FacebookIcon className="fill-white text-white"/>
                            </Link>
                            <Link href={""}>
                                <InstagramIcon className="text-white"/>
                            </Link>
                        </div>
                </div>
            </div>
        </header>
    );
}

export default NavigationBar;