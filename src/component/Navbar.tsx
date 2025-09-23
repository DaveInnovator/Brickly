"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="bg-white shadow-md sticky top-0 z-50"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
    >
      <div className="container-max flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 text-primary font-bold text-xl"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path
              d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V11.5z"
              fill="#4C21B1"
            />
          </svg>
          Brickly
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-8 text-sm"
          aria-label="Main navigation"
        >
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="hover:text-primary">
            About Us
          </Link>
          <Link href="/properties" className="hover:text-primary">
            Properties
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 bg-[#4C21B1] text-white rounded-lg hover:opacity-90 transition"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg px-6 py-4 flex flex-col gap-4 text-sm"
          >
            <Link href="/" className="hover:text-primary" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="hover:text-primary" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link href="/properties" className="hover:text-primary" onClick={() => setIsOpen(false)}>
              Properties
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 bg-[#4C21B1] text-white rounded-lg hover:opacity-90 transition text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
