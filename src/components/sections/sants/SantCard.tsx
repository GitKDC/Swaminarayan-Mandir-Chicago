import type { Sant } from "./types";

interface Props {
  sant: Sant;
  onSelect: (sant: Sant) => void;
}

export default function SantCard({ sant, onSelect }: Props) {
  return (
    <div className="bg-bg-card rounded-xl py-6 px-4 text-center hover:shadow-xl transition">
      <div className="w-40 h-40 mx-auto mb-6 relative">
        <img
          src={sant.image}
          alt={sant.name}
          className="w-full h-full rounded-full object-cover border-4 border-white"
        />
      </div>

      <h3 className="text-xl font-semibold">{sant.name}</h3>
      {sant.role && (
        <p className="text-sm text-text-secondary mb-2">{sant.role}</p>
      )}

      <p className="text-sm text-text-secondary px-3">
        {sant.description}
      </p>

      <button
        onClick={() => onSelect(sant)}
        className="mt-4 text-brand-primary text-sm font-medium hover:underline"
      >
        Know More →
      </button>
    </div>
  );
}
