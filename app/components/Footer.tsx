"use client";

import { Divider } from "@nextui-org/react";
import { BsHeartFill } from "react-icons/bs";
import { useState } from "react";

export default function App() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <footer 
        className="rounded-lg shadow place-content-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
            <Divider />
            <div className="w-full mx-auto max-w-[1024px] p-6 flex items-center flex-col">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 flex flex-row items-center gap-1">Made with <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-gray-300 hover:animate-pulse">Next.js</a>{","} <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="underline hover:animate-pulse underline-offset-2 decoration-blue-700">TailwindCSS</a> and <BsHeartFill className={`text-red-800 ${isHovered ? 'animate-pulsate' : ''}`}/> by Sergiu.</span>
            </div>
        </footer>
    );
}
