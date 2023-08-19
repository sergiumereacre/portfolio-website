"use client"

import { motion } from 'framer-motion';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { NextUIProvider } from '@nextui-org/react';

export default function Projects() {
    return (
        <NextUIProvider>
            <main className="min-h-screen flex flex-col">
                <Navbar />
                <div className='flex-grow flex items-center justify-center'>
                    <p>Under construction.</p>
                </div>
                <Footer />
            </main>
        </NextUIProvider>
    )
}
