import { events } from "@/data/events"
import { Button } from "@/components/ui/Button"

export default function EventsCarousel() {
  const featured = events.filter(e => e.featured)

  return (
    <section className="mb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          {featured.map(event => (
            <div
              key={event.id}
              className="group min-w-full snap-start relative rounded-3xl overflow-hidden shadow-lg"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-[560px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              
  {/* Mobile shadow overlay */}
  <div className="absolute inset-0 bg-black/50 md:hidden" />

              {/* overlay (hidden until hover) */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-r from-black/70 via-black/40 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                "
              />

              {/* content (hidden until hover) */}
             <div className="absolute inset-0 flex items-center">
  <div
    className="
      p-10 max-w-xl text-white
      opacity-100 md:opacity-0
      md:group-hover:opacity-100
      translate-y-0 md:translate-y-6
      md:group-hover:translate-y-0
      transition-all duration-300
      
    "
  >
    <span className="inline-block mb-4 px-4 py-1 rounded-full bg-brand-muted text-sm text-brand-primary">
      Featured Events
    </span>

    <h2 className="font-serif text-4xl mb-4">{event.title}</h2>
    <p className="text-white/80 mb-6">{event.description}</p>

    <Button className="bg-brand-secondary hover:bg-orange-600">
      Learn More
    </Button>
  </div>
</div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
