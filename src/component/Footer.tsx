"use client";
import { motion } from "framer-motion";

export default function Footer(){
  return (
    <motion.footer
      className="bg-white border-t mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-max py-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Brickly — Built with Next.js & Tailwind
      </div>
    </motion.footer>
  );
}
