"use client";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <motion.section className="mt-12 bg-[#000] text-white p-8 rounded-2xl text-center"
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <h3 className="text-2xl font-bold">Ready to find your dream home?</h3>
      <p className="mt-2">Get in touch with our agents and start your search today.</p>
      <div className="mt-4">
        <a href="/contact" className="inline-block bg-white text-[#000] px-6 py-3 rounded-lg font-semibold">Contact Us</a>
      </div>
    </motion.section>
  );
}
