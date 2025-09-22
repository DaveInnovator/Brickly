"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Property } from "../data/properties";

export default function PropertyCard({ prop }: { prop: Property }) {
  return (
    <motion.article
      className="bg-white rounded-2xl overflow-hidden shadow-md"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative h-48 md:h-56">
        <Image src={prop.img} alt={prop.title} fill className="object-cover" />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800">{prop.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{prop.location}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-xl font-bold text-primary">{prop.price}</div>
          <span className="text-xs px-3 py-1 border rounded-full text-gray-500">FOR SALE</span>
        </div>
      </div>
    </motion.article>
  );
}
