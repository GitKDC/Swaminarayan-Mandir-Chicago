import { useState } from "react";

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

        {/* Title */}
        <h2 className="text-xl font-semibold text-[#8B4513] mb-4">
          Make a Donation
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit({
              name,
              amount: Number(amount),
              contact,
              email,
            });
            onClose();
          }}
          className="space-y-4"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Amount */}
          <div>
  <label className="block text-sm font-medium mb-1">Amount ($)</label>
  <input
    type="number"
    min={1}
    max={1500}
    step="1"
    required
    value={amount}
    onChange={(e) => {
      const val = Number(e.target.value);
      if (val >= 1 && val <= 1500) {
        setAmount(e.target.value);
      }
    }}
    placeholder="Enter amount (1 - 1500 USD)"
    className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
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
              required
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="10 digit mobile number"
              className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-600 hover:text-black"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-[#FFB703] px-5 py-2 font-medium text-white hover:bg-[#FF9F1C]"
            >
              Donate Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
