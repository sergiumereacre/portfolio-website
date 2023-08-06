"use client"

import Navbar from './components/Navbar';
import TextGradient from './components/TextGrandient';
import { NextUIProvider } from '@nextui-org/react';

export default function Home() {
  return (
    <NextUIProvider>
      <main className="min-h-screen">
        <Navbar />
        <section className='flex min-h-full items-center justify-center'>
          <TextGradient text='Sergiu Mereacre' className='font-bold text-4xl'/>
        </section>
      </main>
    </NextUIProvider>
  )
}
