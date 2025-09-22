"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      className="bg-white"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
    >
      <div className="container-max flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 text-primary font-bold text-xl">
          {/* svg is decorative so aria-hidden */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V11.5z" fill="#4C21B1"/>
          </svg>
          Brickly
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm" aria-label="Main navigation">
          <Link href="/" className="hover:text-primary">Home</Link>
          <Link href="/about" className="hover:text-primary">About Us</Link>
          <Link href="/properties" className="hover:text-primary">Properties</Link>
          <Link href="/contact" className="px-4 py-2 bg-primary text-black rounded-lg">Contact Us</Link>
        </nav>
      </div>
    </motion.header>
  );
}
