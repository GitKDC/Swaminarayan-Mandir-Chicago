// import { useState } from "react";
// import { Button } from "../components/ui/Button";
// import MasonryGrid from "../components/ui/AsymmetricGrid";

// import g1 from "@/assets/gallery/01-Position-of-the-ACHARYA-555x407.jpg";
// import g2 from "@/assets/gallery/1.5_diksha.jpg";
// import g3 from "@/assets/gallery/1.6_gaadi.jpg";
// import g4 from "@/assets/gallery/1.8_dham.jpg";
// import g5 from "@/assets/gallery/2-1-555x407.jpg";

// type GalleryImage = {
//   id: number;
//   src: string;
//   category: string;
// };

// const categories: string[] = [
//   "All",
//   "Daily Darshan",
//   "Divine Murti Darshan",
//   "Aarti & Seva",
//   "Temple Interior",
// ];

// const galleryImages: GalleryImage[] = [
//   { id: 1, src: g1, category: "Daily Darshan" },
//   { id: 2, src: g2, category: "Divine Murti Darshan" },
//   { id: 3, src: g3, category: "Aarti & Seva" },
//   { id: 4, src: g4, category: "Temple Interior" },
//   { id: 5, src: g5, category: "Daily Darshan" },
// ];

// const GalleryPage: React.FC = () => {
//   const [activeCategory, setActiveCategory] = useState<string>("All");

//   const filteredImages: GalleryImage[] =
//     activeCategory === "All"
//       ? galleryImages
//       : galleryImages.filter(
//           (img) => img.category === activeCategory
//         );

//   return (
//     <main className="pt-20 bg-bg-page">
//       {/* HERO */}
//       <section className="bg-[#faf7f4] pt-20">
//         <div className="max-w-5xl mx-auto px-6 text-center">
//           <p className="text-sm tracking-widest text-text-secondary mb-4"> 
//             ॥ SHREE SWAMINARAYANO VI JAYATE ॥
//           </p>
//           <h1 className="font-heading text-4xl md:text-5xl text-gray-900 mb-6">
//             Divine Gallery
//           </h1>
//           <p className="text-text-secondary max-w-3xl mx-auto">
//             Glimpses of devotion, festivals, seva, and spiritual joy at
//             Vadtal Dham Palatine, Chicago.
//           </p>
//         </div>
//       </section>

//       {/* FILTER BUTTONS */}
//       <div className="flex flex-wrap justify-center gap-3 mb-12 mt-12">
//         {categories.map((category) => (
//           <Button
//             key={category}
//             variant={activeCategory === category ? "default" : "outline"}
//             onClick={() => setActiveCategory(category)}
//           >
//             {category}
//           </Button>
//         ))}
//       </div>

//       {/* MASONRY GRID */}
//       <section className="max-w-7xl mx-auto px-6 pb-20">
//         <MasonryGrid images={filteredImages} />
//       </section>
//     </main>
//   );
// };

// export default GalleryPage;

import { useState, useEffect } from "react";
import { Button } from "../components/ui/Button";
import MasonryGrid from "../components/ui/AsymmetricGrid";
import { api } from "../api/api";

type GalleryImage = {
  _id: string;
  imageUrl: string;
  category: string;
};

const categories: string[] = [
  "All",
  "Daily Darshan",
  "Divine Murti Darshan",
  "Aarti & Seva",
  "Temple Interior",
];

const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /* ---------------- FETCH PHOTOS ---------------- */

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await api.get("/photos"); // calls /api/photos
        setImages(res.data);
      } catch (err: any) {
        setError(err.response?.data?.error || "Failed to load gallery");
        console.error("Gallery fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  /* ---------------- FILTER ---------------- */

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <main className="pt-20 bg-bg-page">

      {/* HERO */}
      <section className="bg-[#faf7f4] pt-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm tracking-widest text-text-secondary mb-4">
            ॥ SHREE SWAMINARAYANO VI JAYATE ॥
          </p>
          <h1 className="font-heading text-4xl md:text-5xl text-gray-900 mb-6">
            Divine Gallery
          </h1>
          <p className="text-text-secondary max-w-3xl mx-auto">
            Glimpses of devotion, festivals, seva, and spiritual joy.
          </p>
        </div>
      </section>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 mt-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* GALLERY SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        {loading ? (
          <p className="text-center text-gray-500">Loading gallery...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : filteredImages.length === 0 ? (
          <p className="text-center text-gray-500">No images available</p>
        ) : (
          <MasonryGrid images={filteredImages} />
        )}
      </section>
    </main>
  );
};

export default GalleryPage;