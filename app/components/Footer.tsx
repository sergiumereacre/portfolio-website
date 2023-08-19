'use client'

import React from "react";
import { Divider } from "@nextui-org/react";
import { usePathname } from "next/navigation";

export default function App() {

    // Get the current route the user is on.
    const currentRoute = usePathname();

    return (
        <footer className="rounded-lg shadow place-content-center">
            <Divider />
            <div className="w-full mx-auto max-w-[1024px] p-6 flex items-center flex-col">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Made with <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-gray-300 hover:animate-pulse">Next.js</a> and <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="underline hover:animate-pulse underline-offset-2 decoration-blue-700">TailwindCSS</a> by Sergiu.</span>
            </div>
        </footer>
    );
}
