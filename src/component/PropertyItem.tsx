"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Property } from "../data/properties";
import { useCart } from "./CartContext";
import { useState, useEffect } from "react";

export default function PropertyItem({ prop }: { prop: Property }) {
  const { addToCart, updateQty, removeFromCart, items } = useCart();
  const existing = items.find((i) => i.id === prop.id);
  const [qty, setQty] = useState<number>(existing?.qty ?? 0);
  const [busy, setBusy] = useState(false);

  // keep local qty in sync with cart (if cart changed elsewhere)
  useEffect(() => {
    setQty(existing?.qty ?? 0);
  }, [existing?.qty]);

  async function increment() {
    setBusy(true);
    try {
      // if not in cart yet, add with qty 1; otherwise update
      if (!existing) {
        addToCart(prop, 1);
      } else {
        updateQty(prop.id, existing.qty + 1);
      }
    } catch (err) {
      console.error("[PropertyItem] increment failed", err);
    } finally {
      setBusy(false);
    }
  }

  async function decrement() {
    setBusy(true);
    try {
      if (!existing) {
        // nothing to do
        return;
      }
      const next = existing.qty - 1;
      if (next <= 0) {
        removeFromCart(prop.id);
      } else {
        updateQty(prop.id, next);
      }
    } catch (err) {
      console.error("[PropertyItem] decrement failed", err);
    } finally {
      setBusy(false);
    }
  }

  return (
    <motion.article
      className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <div className="relative h-48 md:h-56">
        <Image src={prop.img} alt={prop.title} fill className="object-cover" />
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold">{prop.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{prop.location}</p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="text-xl font-bold text-primary">{prop.price}</div>
            <div className="text-xs text-gray-400">For sale</div>
          </div>

          {/* qty controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={decrement}
              disabled={busy || qty === 0}
              aria-label={`Decrease quantity for ${prop.title}`}
              className="w-9 h-9 rounded-lg border flex items-center justify-center hover:bg-gray-100 disabled:opacity-50"
            >
              −
            </button>

            <div className="min-w-[34px] text-center">{qty}</div>

            <button
              onClick={increment}
              disabled={busy}
              aria-label={`Increase quantity for ${prop.title}`}
              className="w-9 h-9 rounded-lg border flex items-center justify-center hover:bg-gray-100 disabled:opacity-50"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
