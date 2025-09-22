"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "1.2k+", label: "Properties Listed" },
  { value: "900+", label: "Happy Clients" },
  { value: "120", label: "Agents" },
];

export default function Stats() {
  return (
    <section className="mt-12">
      <div className="grid grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <motion.div key={i} className="bg-white p-6 rounded-xl text-center shadow"
            initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
            <div className="text-2xl font-bold text-primary">{s.value}</div>
            <div className="text-sm text-gray-500 mt-1">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
