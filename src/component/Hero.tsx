"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const heroImg = "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <section className="relative h-[64vh] md:h-[72vh] lg:h-[76vh]">
      <Image src={heroImg} alt="Luxury property" fill className="object-cover brightness-[0.45]" priority />
      <div className="absolute inset-0 flex items-center">
        <div className="container-max text-center mx-auto">
          <motion.h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}>
            Buy, rent, or sell your property with ease
          </motion.h1>

          <motion.p className="text-white mt-4 max-w-2xl mx-auto opacity-90"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            We provide comprehensive services for the sale, purchase, or rental of real estate.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            <a href="#listings" className="inline-block mt-8 px-6 py-3 bg-white rounded-full text-primary font-semibold shadow">
              Explore our properties
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
