"use client";

import Navbar from "./../../component/Navbar";
import Footer from "../../component/Footer";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <motion.h1
          className="text-4xl font-bold mb-6 text-[#4C21B1]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Have questions? We’d love to hear from you. Fill out the form and our
          team will get back to you shortly.
        </motion.p>

        <motion.form
          className="space-y-5 bg-white p-6 rounded-xl shadow-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={5}
            whileFocus={{ scale: 1.02 }}
          ></motion.textarea>
          <motion.button
            type="submit"
            className="bg-[#4C21B1] text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </main>
      <Footer />
    </div>
  );
}
