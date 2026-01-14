import FramedImage from "@/components/ui/FramedImage";
import type { Sant } from "./types";

interface Props {
  sant: Sant;
  onClose: () => void;
}

export default function SantModal({ sant, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
      <div
        className="relative max-w-4xl rounded-xl p-10 bg-center bg-cover shadow-2xl"
        style={{
          backgroundImage: "url('/src/assets/Parchment.webp')",
        }}
      >
    
        <button //close button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl text-text-secondary hover:text-black"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-3 gap-8 items-center"> 
          <div className="flex justify-center">
            <FramedImage
                src={sant.image}
                alt={sant.name}
            />
          </div>

          <div className="md:col-span-2">
            <h3 className="text-2xl font-heading mb-1">
              {sant.name}
            </h3>

            {sant.role && (
              <p className="italic text-text-secondary mb-4">
                {sant.role}
              </p>
            )}

            <p className="leading-relaxed text-text-primary mb-4">
              {sant.description}
            </p>

            {sant.biography && (
              <ul className="list-disc ml-5 space-y-2 text-text-primary">
                {sant.biography.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
