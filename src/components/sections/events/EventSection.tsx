import EventsCarousel from "@/components/sections/events/EventsCarousel";
import EventInfoCard from "@/components/sections/events/EventInfoCard";
import { events } from "@/data/events"


export default function EventSection() {
  const nonFeatured = events.filter(e => !e.featured)

  return (
    <main className="pt-15 bg-[#faf7f4]">

      {/* HERO */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm text-text-secondary tracking-widest mb-4">
            ॥ SHREE SWAMINARAYANO VI JAYATE ॥
          </p>

          <h1 className="font-heading text-4xl md:text-5xl text-gray-900 mb-6">
            Spiritual Events & Festivals
          </h1>

          <p className="text-text-secondary max-w-3xl mx-auto leading-relaxed">
            At Vadtal Dham Palatine, a wide range of spiritual, devotional,
            and cultural events are organized throughout the year to
            inspire devotion, unity, and righteous living.
          </p>
        </div>
      </section>

     {/* FEATURED CAROUSEL */}
      <EventsCarousel />

      {/* EVENTS GRID */}
      <section className="pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {nonFeatured.map(event => (
              <EventInfoCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
