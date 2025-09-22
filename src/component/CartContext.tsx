"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import type { Property } from "../data/properties";

export type CartItem = Property & { qty: number };

type CartContextType = {
  items: CartItem[];
  addToCart: (p: Property, qty?: number) => void;
  removeFromCart: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // safe read from localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = localStorage.getItem("brickly_cart");
      if (raw) {
        const parsed = JSON.parse(raw) as CartItem[];
        setItems(parsed);
        console.info("[Cart] loaded", parsed);
      }
    } catch (e) {
      console.warn("[Cart] failed to load from localStorage", e);
    }
  }, []);

  // persist
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem("brickly_cart", JSON.stringify(items));
    } catch (e) {
      console.warn("[Cart] failed to save to localStorage", e);
    }
  }, [items]);

  const addToCart = (p: Property, qty = 1) => {
    setItems(prev => {
      const found = prev.find(it => it.id === p.id);
      let next: CartItem[];
      if (found) {
        next = prev.map(it => (it.id === p.id ? { ...it, qty: it.qty + qty } : it));
      } else {
        next = [...prev, { ...p, qty }];
      }
      console.info("[Cart] addToCart", { added: p.id, qty, next });
      return next;
    });
  };

  const removeFromCart = (id: string) =>
    setItems(prev => {
      const next = prev.filter(i => i.id !== id);
      console.info("[Cart] removeFromCart", { id, next });
      return next;
    });

  const updateQty = (id: string, qty: number) =>
    setItems(prev => {
      const next = prev.map(i => (i.id === id ? { ...i, qty } : i));
      console.info("[Cart] updateQty", { id, qty, next });
      return next;
    });

  const clearCart = () => {
    setItems([]);
    console.info("[Cart] clearCart");
  };

  const total = items.reduce((acc, i) => {
    const numeric = Number(String(i.price).replace(/[^0-9.-]+/g, "")) || 0;
    return acc + numeric * i.qty;
  }, 0);

  const itemCount = items.reduce((acc, i) => acc + i.qty, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQty, clearCart, total, itemCount }}>
      {children}
    </CartContext.Provider>
  );
}
