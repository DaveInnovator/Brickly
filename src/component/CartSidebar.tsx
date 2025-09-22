"use client";
import { useCart } from "./CartContext";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function CartSidebar() {
  const { items, total, removeFromCart, updateQty, itemCount } = useCart();
  const [open, setOpen] = useState<boolean>(true);

  const formatted = (n: number) => "$" + n.toLocaleString();

  return (
    <>
      {/* Floating handle when closed */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed right-4 bottom-4 z-50 w-12 h-12 rounded-full bg-primary text-white shadow-lg flex items-center justify-center"
          aria-label="Open Cart"
        >
          🛒
          <span className="sr-only">Open cart</span>
        </button>
      )}

      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.35 }}
            className="fixed right-4 bottom-4 w-80 max-w-full md:top-28 md:right-8 bg-white rounded-2xl shadow-lg p-4 z-50"
            aria-label="Cart"
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold">Cart</h4>
              <div className="flex items-center gap-2">
                <div className="text-sm text-gray-500">{itemCount} item{itemCount !== 1 ? "s" : ""}</div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close cart"
                  className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center"
                >
                  ✕
                </button>
              </div>
            </div>

            {items.length === 0 ? (
              <div className="text-sm text-gray-500 mt-3">No items yet</div>
            ) : (
              <>
                <ul className="space-y-3 max-h-60 overflow-auto pr-2 mt-1">
                  {items.map((it) => (
                    <li key={it.id} className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="text-sm font-medium">{it.title}</div>
                        <div className="text-xs text-gray-500">{it.location}</div>
                        <div className="text-sm text-gray-800 mt-1">{it.price}</div>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQty(it.id, Math.max(1, it.qty - 1))}
                            className="px-2 py-0.5 border rounded"
                            aria-label={`Decrease quantity for ${it.title}`}
                          >
                            -
                          </button>
                          <div className="text-sm">{it.qty}</div>
                          <button
                            onClick={() => updateQty(it.id, it.qty + 1)}
                            className="px-2 py-0.5 border rounded"
                            aria-label={`Increase quantity for ${it.title}`}
                          >
                            +
                          </button>
                        </div>
                        <button onClick={() => removeFromCart(it.id)} className="text-xs text-red-500 mt-1">
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm text-gray-500">Total</div>
                  <div className="text-lg font-bold">{formatted(total)}</div>
                </div>

                <Link href="/checkout" className="block mt-4 text-center bg-primary text-black px-4 py-2 rounded-lg">
                  Checkout
                </Link>
              </>
            )}
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
