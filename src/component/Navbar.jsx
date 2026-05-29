"use client";
import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";
import { Button, Dropdown, Label } from "@heroui/react";

const Navbars = () => {
    let path = usePathname();


    return (
        <div>
            <nav className=" md:block hidden sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
                <header className="flex h-20 items-center justify-between px-6">
                    <div className="">
                        <div className="flex flex-col items-center">
                            <Image src={"/baby_logo.png"} width={"45"} height={"45"} alt="logo" />
                            <p className="font-bold sm:text-sm">Baby Garden</p>
                        </div>
                    </div>
                    <div className="shadow-[#C6E0EA] flex items-center justify-center md:max-w-[50%] max-w-[50%] rounded-full shadow flex-wrap h-[60px] px-5">
                        {/* <div > */}
                        <ul className="flex flex-wrap items-center gap-1">
                            <li>
                                <Link href="/" className={`hover:bg-[#FBD683] rounded-2xl ${path === '/' ? "border-2 border-[#C6E0EA]" : ""} px-3 py-2 transition-all sm:text-sm`}>
                                    <i className="fad fa-home mr-1"></i>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className={`hover:bg-[#FBD683] rounded-2xl ${path === '/about' ? "border-2 border-[#C6E0EA]" : ""} px-3 py-2 transition-all sm:text-sm`}>
                                    <i className="fad fa-circle-info mr-1"></i>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href={"/contact"} className={`hover:bg-[#FBD683] rounded-2xl ${path === '/contact' ? "border-2 border-[#C6E0EA]" : ""} px-3 py-2 transition-all sm:text-sm`}>
                                    <i className="fa-duotone fa-thin fa-address-book mr-1"></i>
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href={"/babies"} className={`hover:bg-[#fbd583bc] rounded-2xl ${path === '/babies' ? "border-2 border-[#C6E0EA]" : ""} px-3 py-2 transition-all sm:text-sm`}>
                                    <i className="fad fa-baby mr-1"></i>
                                    Babies
                                </Link>
                            </li>
                            <li>
                                <Link href={"/addBaby"} className={`hover:bg-[#FBD683] rounded-2xl ${path === '/registration' ? "border-2 border-[#C6E0EA]" : ""} px-3 py-2 transition-all sm:text-sm`}>
                                    <i className="fad fa-baby mr-1"></i>
                                    Registration
                                </Link>
                            </li>
                        </ul>
                        {/* </div> */}
                    </div>
                    <div className="md:block hidden">

                        <ul className="flex w-full items-center gap-2 border-[#FBD683] border p-2 rounded-3xl">
                            <li><Link href="/login" className={` rounded-2xl ${path === '/login' ? "border-2 border-[#C6E0EA]" : ""} px-3 py-2 transition-all`}>
                                <Button className={"bg-[#FBD683] text-black "}>
                                    Login
                                </Button>
                            </Link></li>

                            <li>
                                <Link href="/sign_up">
                                    <Button variant="outline" className={"border-[#FBD683] bg-none border-2 text-black "}>
                                        Sign Up
                                    </Button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="md:hidden block ">

                        <Dropdown className=" w-full border-[#FBD683] border p-2 rounded-3xl">
                            <Button aria-label="Menu" variant="outline">
                                <i className="fa-duotone fa-solid fa-bars"></i>
                            </Button>
                            <Dropdown.Popover>
                                <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
                                    {/* <ul className="flex flex-wrap items-center gap-5"> */}
                                   
                                    <Dropdown.Item href={"/addBaby"} className={`flex w-full rounded-2xl ${path === '/registration' ? "border-2 border-[#C6E0EA]" : ""} px-3 text-sm py-2 transition-all`} >
                                        {/* <Link > */}
                                            <i className="fad fa-baby mr-1"></i>
                                            Registration
                                        {/* </Link> */}
                                    </Dropdown.Item>
                                    {/* </ul> */}
                                </Dropdown.Menu>
                            </Dropdown.Popover>
                        </Dropdown>
                    </div>
                </header>
            </nav>
            <MobileMenu />
        </div>
    );
};

export default Navbars;


export function MobileMenu() {
    let path = usePathname();

    return (
        <nav className="md:hidden sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="flex h-16 items-center justify-between px-6">
                <div>
                    <Image src={"/baby_logo.png"} width={"45"} height={"45"} alt="logo" />
                </div>
                <div>
                    <Dropdown>
                        <Button aria-label="Menu" variant="outline">
                            <i className="fa-duotone fa-solid fa-bars"></i>
                        </Button>
                        <Dropdown.Popover>
                            <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
                                {/* <ul className="flex flex-wrap items-center gap-5"> */}
                                <Dropdown.Item href="/" className={` w-full rounded-2xl ${path === '/' ? "border-2 border-[#C6E0EA]" : ""} px-3 py-2 transition-all`}>
                                    {/* <Link > */}
                                        <i className="fad fa-home mr-1"></i>
                                        Home
                                    {/* </Link> */}
                                </Dropdown.Item>
                                <Dropdown.Item href="/about" className={` w-full rounded-2xl ${path === '/about' ? "border-2 border-[#C6E0EA]" : ""} px-3 py-2 transition-all`}>
                                    {/* <Link > */}
                                        <i className="fad fa-circle-info mr-1"></i>
                                        About
                                    {/* </Link> */}
                                </Dropdown.Item>
                                <Dropdown.Item  href={"/contact"} className={` w-full rounded-2xl ${path === '/contact' ? "border-2 border-[#C6E0EA]" : ""} px-3 py-2 transition-all`}>
                                    {/* <Link> */}
                                        <i className="fa-duotone fa-thin fa-address-book mr-1"></i>
                                        Contact
                                    {/* </Link> */}
                                </Dropdown.Item>
                                <Dropdown.Item  href={"/babies"} className={`hover:bg-[#fbd583bc]  w-full rounded-2xl ${path === '/babies' ? "border-2 border-[#C6E0EA]" : ""} px-3 py-2 transition-all`}>
                                    {/* <Link> */}
                                        <i className="fad fa-baby mr-1"></i>
                                        Babies
                                    {/* </Link> */}
                                </Dropdown.Item>
                                <Dropdown.Item href={"/addBaby"} className={` w-full rounded-2xl ${path === '/registration' ? "border-2 border-[#C6E0EA]" : ""} px-3 py-2 transition-all`}>
                                    {/* <Link > */}
                                        <i className="fa-duotone fa-solid fa-id-card"></i>
                                        Registration
                                    {/* </Link> */}
                                </Dropdown.Item>
                                {/* </ul> */}
                            </Dropdown.Menu>
                        </Dropdown.Popover>
                    </Dropdown>
                </div>
            </header>

        </nav>
    );
}