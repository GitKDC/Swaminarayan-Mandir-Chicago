import GalleryItem from "../components/ui/GalleryItem";
import Section from "../components/Section";



export default function GalleryPage() {
  return (
    <main className="pt-20 bg-orange-200">

      {/* HERO */}
      <section className="bg-[#faf7f4] py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm tracking-widest text-gray-500 mb-4">
            ॥ SHREE SWAMINARAYANO VI JAYATE ॥
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
            Divine Gallery
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Glimpses of devotion, festivals, seva, and spiritual joy at
            Vadtal Dham Palatine, Chicago.
          </p>
        </div>
      </section>

      {/* GALLERY SECTIONS */}
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
      </Section>

    </main>
  )
}
