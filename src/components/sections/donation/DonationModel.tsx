import { useState } from "react";
import PayPalButton from "./PaypalButton";

interface DonationModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: {
    name: string;
    amount: number;
    contact: string;
    email: string;
  }) => void;
}

export default function DonationModal({ open, onClose, onSubmit }: DonationModalProps) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [showPayPal, setShowPayPal] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl p-6 relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-3 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold text-[#8B4513] mb-4">
          Make a Donation
        </h2>

        {/* FORM */}
        {!showPayPal && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit({
                name,
                amount: Number(amount),
                contact,
                email,
              });
              setShowPayPal(true); // show PayPal after form submit
            }}
            className="space-y-4"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter a Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border px-3 py-2"
              />
            </div>

            {/* Amount */}
            <div>
              <label className="block text-sm font-medium mb-1">Amount ($)</label>
              <input
                type="number"
                placeholder="Amount"
                min={1}
                max={1500}
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full rounded-lg border px-3 py-2"
              />
              <p className="text-xs text-gray-500 mt-1">
                Donation limit: $1 – $1500
              </p>
            </div>

            {/* Contact */}
            <div>
              <label className="block text-sm font-medium mb-1">Contact No</label>
              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full rounded-lg border px-3 py-2"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border px-3 py-2"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 pt-4">
              <button type="button" onClick={onClose} className="text-gray-600">
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-lg bg-[#FFB703] px-5 py-2 font-medium text-white"
              >
                Proceed to PayPal
              </button>
            </div>
          </form>
        )}

        {/* PAYPAL */}
        {showPayPal && (
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              Paying <b>${amount}</b> via PayPal
            </p>

            <PayPalButton amount={amount} />

            <button
              onClick={() => setShowPayPal(false)}
              className="text-sm text-gray-500 underline"
            >
              Back to form
            </button>
          </div>
        )}
      </div>
    </div>
  );
}