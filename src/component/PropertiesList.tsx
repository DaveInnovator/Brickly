"use client";
import PropertyItem from "./PropertyItem";
import { properties as propsData } from "../data/properties";
import CartSidebar from "./CartSidebar";

export default function PropertiesList() {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {propsData.map(p => (
          <PropertyItem key={p.id} prop={p} />
        ))}
      </div>

      {/* Cart sidebar in bottom-right on small screens, right side on larger */}
      <CartSidebar />
    </div>
  );
}
