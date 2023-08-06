"use client"

import { motion } from 'framer-motion';
import Navbar from '@/app/components/Navbar';
import { NextUIProvider } from '@nextui-org/react';

export default function Home() {
    return (
        <NextUIProvider>
            <main className="min-h-screen">
                <Navbar />
            </main>
        </NextUIProvider>
    )
}
