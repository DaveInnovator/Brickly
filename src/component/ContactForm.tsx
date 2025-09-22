"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
   
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <motion.form className="max-w-2xl bg-white p-8 rounded-2xl shadow space-y-4" onSubmit={onSubmit}
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <input name="name" placeholder="Your name" className="w-full p-3 border rounded-lg" required />
      <input name="email" type="email" placeholder="Your email" className="w-full p-3 border rounded-lg" required />
      <textarea name="message" rows={5} placeholder="Message" className="w-full p-3 border rounded-lg" required />
      <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg">{sent ? "Sent ✓" : "Send Message"}</button>
    </motion.form>
  );
}
