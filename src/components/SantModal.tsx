import { useEffect } from "react";

type SantModalProps = {
  sant: any;
  onClose: () => void;
};

const SantModal = ({ sant, onClose }: SantModalProps) => {

    useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
        document.body.style.overflow = "auto";
    };
    }, []);

    useEffect(() => {
    const handler = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
    }, []);


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 opacity-60"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-[#f2e6e8] text-white w-full max-w-7xl max-h-[150vh] overflow-y-auto rounded-2xl shadow-2xl">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/70 hover:text-white text-2xl"
        >
          ×
        </button>

        {/* HERO SECTION */}
        <div className="grid md:grid-cols-2 gap-10 p-10 border-b border-white/10">

          {/* Image */}
          <div className="w-98 h-98 mx-auto flex justify-center">
            <img
              src={sant.image}
              alt={sant.name}
              className="w-full h-full object-cover rounded-full border border-white/10"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <span className="text-primary text-sm uppercase tracking-widest mb-3">
              {sant.role}
            </span>

            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              {sant.name}
            </h2>

            <div className="h-1 w-16 bg-primary mb-6" />

            <p className="text-white/70 leading-relaxed">
              {sant.shortDescription}
            </p>
          </div>
        </div>

        {/* BIOGRAPHY SECTION */}
        <div className="p-10">
          <h3 className="text-2xl font-serif mb-6">Biography</h3>

          <div className="space-y-6 text-white/80 leading-relaxed">
            {sant.biography?.map((para: string, index: number) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SantModal;
