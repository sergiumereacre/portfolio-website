'use client'

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Image from "next/image";
import icon from "@/public/icon.png";
import { usePathname } from "next/navigation";
import { BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";

export default function App() {

    // Get the current route the user is on.
    const currentRoute = usePathname();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
        >
            <Navbar disableAnimation isBordered
                classNames={{
                    item: [
                        "flex",
                        "relative",
                        "h-full",
                        "items-center",
                        "data-[active=true]:after:content-['']",
                        "data-[active=true]:after:absolute",
                        "data-[active=true]:after:bottom-0",
                        "data-[active=true]:after:left-0",
                        "data-[active=true]:after:right-0",
                        "data-[active=true]:after:h-[2px]",
                        "data-[active=true]:after:rounded-[2px]",
                        "data-[active=true]:after:bg-primary",
                    ],
                }}
            >
                <NavbarContent className="flex gap-5" justify="center">
                    <NavbarBrand className="pr-3">
                        <Link href="/">
                            <Image src={icon} width={40} height={40} alt="Icon"></Image>
                        </Link>
                    </NavbarBrand>
                    <NavbarItem isActive={currentRoute === "/"}>
                        <Link className="px-2" color={currentRoute === "/" ? "warning" : "foreground"} aria-current="page" href="/">
                            <span>Home</span>
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive={currentRoute === "/projects"}>
                        <Link className="px-2" color={currentRoute === "/projects" ? "warning" : "foreground"} href="/projects">
                            <span>Projects</span>
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button as={Link} href="#" className="font-bold bg-gradient-to-r from-primary via-orange-400 to-primary bg-300% animate-gradient">
                                <BsLinkedin className="text-black w-5 h-5" />
                                <span className="text-black">Connect</span>
                            </Button>
                        </motion.div>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </motion.div>
    );
}
