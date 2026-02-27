import EventsCarousel from "@/components/sections/events/EventsCarousel";
import EventInfoCard from "@/components/sections/events/EventInfoCard";
import { useEffect, useState } from "react";
import { api } from "@/api/api";


export default function EventSection() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await api.get("/events");
        setEvents(res.data);
        setError(null);
      } catch (err: any) {
        setError(err?.response?.data?.message || "Failed to load events");
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const nonFeatured = events.filter(e => !e.featured);

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
          {loading ? (
            <div className="text-center py-10 text-gray-500">Loading events...</div>
          ) : error ? (
            <div className="text-center py-10 text-red-500">{error}</div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {nonFeatured.map(event => (
                <EventInfoCard key={event.id || event._id} event={event} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
