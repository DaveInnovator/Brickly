import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Footer from "../component/Footer";
import PropertyCard from "../component/PropertyCard";
import WhyChoose from "../component/WhyChoose";
import Stats from "../component/Stats";
import CTA from "../component/CTA";
import { properties } from "../data/properties";

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

        <WhyChoose />
        <Stats />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
