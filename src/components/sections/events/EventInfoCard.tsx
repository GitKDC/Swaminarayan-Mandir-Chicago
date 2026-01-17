import type { Event } from "@/data/events"

export default function EventInfoCard({ event }: { event: Event }) {
  return (
    <div className="bg-bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      
      {/* date pill */}
      <div className="inline-block mb-4 px-4 py-2 rounded-lg bg-orange-50 text-orange-600 text-center">
        <p className="text-xs uppercase">{event.date}</p>
        <p className="text-lg font-semibold">{event.day}</p>
      </div>

      <h3 className="font-serif text-brand-primary text-xl mb-2">
        {event.title}
      </h3>

      <div className="text-sm text-gray-600 space-y-1 mb-4">
        <p>{event.time}</p>
        <p>{event.venue}</p>
      </div>

      <p className="text-gray-600 text-sm mb-6">
        {event.description}
      </p>

      <a
        href="#"
        className="inline-flex items-center gap-2 text-text-secondary text-sm font-medium hover:gap-3 transition-all"
      >
        View Details →
      </a>
    </div>
  )
}
