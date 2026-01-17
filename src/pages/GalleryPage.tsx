import { useState } from "react";
import { Button } from "../components/ui/Button";
import MasonryGrid from "../components/ui/AsymmetricGrid";

type GalleryImage = {
  id: number;
  src: string;
  category: string;
};

const categories: string[] = [
  "All",
  "Daily Darshan",
  "Divine Murti Darshan",
  "Aarti & Seva",
  "Temple Interior",
];

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "src/assets/gallery/01-Position-of-the-ACHARYA-555x407.jpg",
    category: "Daily Darshan",
  },
  {
    id: 2,
    src: "src/assets/gallery/1.5_diksha.jpg",
    category: "Divine Murti Darshan",
  },
  {
    id: 3,
    src: "src/assets/gallery/1.6_gaadi.jpg",
    category: "Aarti & Seva",
  },
  {
    id: 4,
    src: "src/assets/gallery/1.8_dham.jpg",
    category: "Temple Interior",
  },
  {
    id: 5,
    src: "src/assets/gallery/2-1-555x407.jpg",
    category: "Daily Darshan",
  },
];

const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredImages: GalleryImage[] =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (img) => img.category === activeCategory
        );

  return (
    <main className="pt-20 bg-bg-page">
      {/* HERO */}
      <section className="bg-[#faf7f4] py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm tracking-widest text-text-secondary mb-4"> 
            ॥ SHREE SWAMINARAYANO VI JAYATE ॥
          </p>
          <h1 className="font-heading text-4xl md:text-5xl text-gray-900 mb-6">
            Divine Gallery
          </h1>
          <p className="text-text-secondary max-w-3xl mx-auto">
            Glimpses of devotion, festivals, seva, and spiritual joy at
            Vadtal Dham Palatine, Chicago.
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

      {/* MASONRY GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <MasonryGrid images={filteredImages} />
      </section>
    </main>
  );
};

export default GalleryPage;


{/* GALLERY SECTIONS
      <Section title="Temple & Darshan">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <GalleryItem title="Daily Darshan" />
          <GalleryItem title="Divine Murti Darshan" />
          <GalleryItem title="Aarti & Seva" />
          <GalleryItem title="Temple Interior" />
        </div>
      </Section>

      <Section title="Festivals & Annakut">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <GalleryItem title="Annakut Utsav" />
          <GalleryItem title="Divine Festivals" />
          <GalleryItem title="Jalebi-Fafda Annakut" />
          <GalleryItem title="Pushpabhishek" />
        </div>
      </Section>

      <Section title="Cultural & Kids Activities">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <GalleryItem title="Bal Sanskar Mandal" />
          <GalleryItem title="Cultural Programs" />
          <GalleryItem title="Kids Activities" />
          <GalleryItem title="Encouragement by Santo" />
        </div>
      </Section>

      <Section title="Seva & Community">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <GalleryItem title="Divine Kitchen Seva" />
          <GalleryItem title="Volunteer Seva" />
          <GalleryItem title="Social Service" />
          <GalleryItem title="Community Gatherings" />
        </div>
      </Section> */}