import { useState } from "react";
import { SANTS } from "./sants.data";
import type { Sant } from "./types";
import SantCard from "./SantCard";
import SantModal from "./SantModal";

export default function SantsSection() {
  const [selectedSant, setSelectedSant] = useState<Sant | null>(null);

  return (
    <section className="py-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {SANTS.map((sant) => (
          <SantCard
            key={sant.id}
            sant={sant}
            onSelect={setSelectedSant}
          />
        ))}
      </div>

      {selectedSant && (
        <SantModal
          sant={selectedSant}
          onClose={() => setSelectedSant(null)}
        />
      )}
    </section>
  );
}
