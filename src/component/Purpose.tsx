"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Home, Shield } from "lucide-react";

export default function Hero() {
 return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-16">
      
      <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
        <Image
          src="/property-1.jpg"
          alt="Dream House"
          fill
          className="object-cover"
          priority
        />
        <h1 className="absolute top-6 left-6 text-white text-5xl md:text-6xl font-extrabold leading-tight uppercase opacity-80">
          DREAM <br /> HOUSE
        </h1>
      </div>

      {/* Right Content */}
      <div>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          We&apos;re redefining the way people see{" "}
          <span className="text-[#6C63FF]">Real Estate</span>
        </motion.h2>

        <p className="mt-4 text-gray-600 leading-relaxed">
          Discover your dream home with ease. Our team is committed to providing
          exceptional service and ensuring a seamless experience from start to
          finish. Let us help you find the perfect property that meets all your
          needs.
        </p>

        {/* Features */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.div
            className="p-5 bg-white rounded-xl shadow-md flex items-start gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Home className="w-8 h-8 text-[#6C63FF]" />
            <div>
              <h3 className="font-semibold text-lg text-gray-800">
                Modern Villa
              </h3>
              <p className="text-sm text-gray-500">
                Discover the luxury and comfort of modern villa living
              </p>
            </div>
          </motion.div>

          <motion.div
            className="p-5 bg-white rounded-xl shadow-md flex items-start gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Shield className="w-8 h-8 text-[#6C63FF]" />
            <div>
              <h3 className="font-semibold text-lg text-gray-800">
                Secure Payment
              </h3>
              <p className="text-sm text-gray-500">
                Safe and easy payment process for all property deals
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
