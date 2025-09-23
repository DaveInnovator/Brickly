import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Footer from "../component/Footer";
import PropertyCard from "../component/PropertyCard";
import WhyChoose from "../component/WhyChoose";
import Stats from "../component/Stats";
import CTA from "../component/CTA";
import { properties } from "../data/properties";
import Purpose from "../component/Purpose"
import Link from "next/link";
export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />

      <main className="container-max py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10">
          Discover our <span className="text-accent">latest listings</span>
        </h2>

        <section id="listings" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((p) => (
            <PropertyCard key={p.id} prop={p} />
          ))}
          
        </section>
<div className="text-center mt-8">
  <Link
    href="/properties"
    className="inline-block bg-[#4C21B1] text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
  >
    View All Properties
  </Link>
</div>
<Purpose/>
        <WhyChoose />
        <Stats />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
