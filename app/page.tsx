"use client"

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <motion.div className="flex flex-col items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
        <h1 className="text-4xl font-bold text-center">Welcome to <a className="text-blue-600" href="https://nextjs.org">Next.js!</a></h1>
      </motion.div>
    </main>
  )
}
