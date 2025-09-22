import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import PropertiesList from "../../component/PropertiesList";

export default function PropertiesPage() {
  return (
    <>
      <Navbar />
      <main className="container-max py-16">
        <h1 className="text-3xl font-bold text-primary mb-6">Properties</h1>
        <PropertiesList />
      </main>
      <Footer />
    </>
  );
}
