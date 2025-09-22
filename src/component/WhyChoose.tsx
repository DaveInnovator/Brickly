"use client";
import { motion } from "framer-motion";

const features = [
  { title: "Verified Listings", desc: "We verify every listing for authenticity." },
  { title: "Expert Agents", desc: "Experienced agents to guide every step." },
  { title: "Secure Payments", desc: "Private and secure payment processing." },
  { title: "Local Knowledge", desc: "Local market insights and data." }
];

export default function WhyChoose() {
  return (
    <section className="mt-12 bg-white p-8 rounded-2xl shadow">
      <motion.h3 className="text-2xl font-bold text-gray-800 mb-6" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        Why choose Brickly
      </motion.h3>

      <div className="grid sm:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <motion.div key={i} className="p-4 rounded-lg border"
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
            <h4 className="font-semibold">{f.title}</h4>
            <p className="text-sm text-gray-500 mt-1">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
