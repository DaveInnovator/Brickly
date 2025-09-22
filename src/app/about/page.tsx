"use client";

import Navbar from "./../../component/Navbar";
import Footer from "../../component/Footer";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-16">
        <motion.h1
          className="text-4xl font-bold mb-6 text-[#4C21B1]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Brickly helps you find your dream home with ease. From luxury
              villas to affordable apartments, we connect buyers and sellers
              across the country with transparency and trust.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to simplify real estate for everyone — whether
              you’re buying, selling, or renting. With our platform, the process
              is seamless and enjoyable.
            </p>
          </div>

          <motion.img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80"
            alt="About us"
            className="rounded-xl shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
          />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
