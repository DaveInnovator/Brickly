"use client";
import { useCart } from "../../component/CartContext";
import { useState } from "react";

export default function CheckoutForm() {
  const { items, total, clearCart } = useCart();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const numericTotal = total;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) {
      alert("Cart is empty");
      return;
    }
    if (!name || !email) {
      alert("Fill name and email");
      return;
    }

    setProcessing(true);
    // simulate remote call
    await new Promise(res => setTimeout(res, 1400));
    setProcessing(false);
    setSuccess("Payment successful! We sent a confirmation to " + email);
    clearCart();
    setName("");
    setEmail("");
    setTimeout(() => setSuccess(null), 5000);
  };

  return (
    <div className="max-w-2xl">
      {items.length === 0 ? <div className="p-6 bg-white rounded-lg shadow">Your cart is empty.</div> : (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow space-y-4">
          <div>
            <label className="block text-sm font-medium">Full name</label>
            <input value={name} onChange={e=>setName(e.target.value)} className="w-full p-3 border rounded mt-1" required />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input value={email} onChange={e=>setEmail(e.target.value)} type="email" className="w-full p-3 border rounded mt-1" required />
          </div>

          <div>
            <h4 className="font-semibold">Order summary</h4>
            <ul className="mt-2 space-y-2">
              {items.map(it => (
                <li key={it.id} className="flex justify-between text-sm">
                  <span>{it.title} × {it.qty}</span>
                  <span>{it.price}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex justify-between font-bold">
              <span>Total</span>
              <span>${numericTotal.toLocaleString()}</span>
            </div>
          </div>

          <button disabled={processing} className="w-full bg-primary text-white py-3 rounded-lg">
            {processing ? "Processing..." : `Pay $${numericTotal.toLocaleString()}`}
          </button>

          {success && <div className="p-3 bg-green-50 text-green-700 rounded">{success}</div>}
        </form>
      )}
    </div>
  );
}
