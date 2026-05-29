"use client";
import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";
const Navbars = () => {
    let path = usePathname();


    return (
        <div>
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
                <header className="flex h-20 items-center justify-between px-6">
                    <div className="">
                        <div className="flex flex-col items-center">
                            <Image src={"/baby_logo.png"} width={"45"} height={"45"} alt="logo" />
                            <p className="font-bold text-sm">Baby Garden</p>
                        </div>
                    </div>
                    <div className="shadow-[#C6E0EA] flex items-center justify-center max-w-[50%] w-full rounded-full shadow h-[60px] px-5">
                        {/* <div > */}
                            <ul className="flex items-center gap-5">
                                <li>
                                    <Link href="/" className={`hover:bg-[#FBD683] rounded-2xl ${path==='/'?"border-2 border-[#C6E0EA]":""} px-3 py-2 transition-all`}>
                                        <i className="fad fa-home mr-1"></i>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about"  className={`hover:bg-[#FBD683] rounded-2xl ${path==='/about'?"border-2 border-[#C6E0EA]":""} px-3 py-2 transition-all`}>
                                        <i className="fad fa-circle-info mr-1"></i>
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/contact"} className={`hover:bg-[#FBD683] rounded-2xl ${path==='/contact'?"border-2 border-[#C6E0EA]":""} px-3 py-2 transition-all`}>
                                        <i className="fa-duotone fa-thin fa-address-book mr-1"></i>
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/babies"}  className={`hover:bg-[#fbd583bc] rounded-2xl ${path==='/babies'?"border-2 border-[#C6E0EA]":""} px-3 py-2 transition-all`}>
                                        <i className="fad fa-baby mr-1"></i>
                                        Babies
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/addBaby"}  className={`hover:bg-[#FBD683] rounded-2xl ${path==='/registration'?"border-2 border-[#C6E0EA]":""} px-3 py-2 transition-all`}>
                                        <i className="fad fa-baby mr-1"></i>
                                        Registration
                                    </Link>
                                </li>
                            </ul>
                        {/* </div> */}
                    </div>
                    <div>
                        <ul className="flex items-center gap-4">
                            <li><Link href="#">Login</Link></li>
                            <li><Link href="#">Sign Up</Link></li>
                        </ul>
                    </div>
                </header>
            </nav>
        </div>
    );
};

export default Navbars;