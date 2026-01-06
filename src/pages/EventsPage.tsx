import EventCard from "../components/EventCard";
import Section from "../components/Section";
import { Button } from "../components/ui/Button";


export default function EventsPage() {
  return (
    <main className="pt-20 bg-orange-200">

      {/* HERO */}
      <section className="bg-[#faf7f4] py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm tracking-widest text-gray-500 mb-4">
            ॥ SHREE SWAMINARAYANO VI JAYATE ॥
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
            Spiritual Events & Festivals
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto">
            At Vadtal Dham Palatine, a wide range of spiritual, devotional,
            and cultural events are organized throughout the year to
            inspire devotion and strengthen faith.
          </p>
        </div>
      </section>

      {/* MAJOR EVENTS */}
      <Section
        title="Major Spiritual Events"
        subtitle="Celebrated with devotion, discipline, and joy"
      >
        <div className="grid md:grid-cols-3 gap-6">
          <EventCard
            title="Divine Festivals"
            description="All major festivals of Sanatan Dharma are celebrated with great devotion, enthusiasm, and collective participation by saints and devotees."
          />
          <EventCard
            title="Sunday Sabha"
            description="Weekly spiritual gathering including Kirtan Bhakti, Katha, Sant Darshan, Bhagwan Darshan, and Mahaprasad."
          />
          <EventCard
            title="Bhajan & Kirtan Events"
            description="Devotional singing, chanting, and musical offerings that uplift the soul and strengthen spiritual connection."
          />
        </div>
      </Section>

      {/* SPECIAL PROGRAMS */}
      <Section
        title="Special Religious Programs"
        subtitle="Rooted in tradition and spiritual discipline"
      >
        <div className="grid md:grid-cols-3 gap-6">
          <EventCard
            title="Samuh Yajna"
            description="Collective yajnas and divine rituals performed with sacred chanting and offerings for peace and prosperity."
          />
          <EventCard
            title="Samuh Mahapooja"
            description="Large-scale devotional pooja performed by devotees under the guidance of saints."
          />
          <EventCard
            title="Sant Padharamani"
            description="Sacred visits of saints that bless devotees and strengthen spiritual values."
          />
        </div>
      </Section>

      {/* ANNAKUT */}
      <Section
        title="Annakut Utsav"
        subtitle="A grand offering of devotion through divine food offerings"
      >
        <p className="text-gray-700 max-w-4xl">
          Annakut Utsav is celebrated with immense devotion, where hundreds
          of food items are lovingly prepared and offered to the Lord.
          Various Annakut celebrations such as New Year Annakut, Hatadi
          Utsav, Mango Festival, Jalebi-Fafda Annakut, and Pushpabhishek
          are observed with spiritual joy.
        </p>
      </Section>

      {/* CTA */}
      <section className="py-20 bg-[#faf7f4]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-gray-900 mb-4">
            Join Our Spiritual Gatherings
          </h2>
          <p className="text-gray-700 mb-8">
            Be a part of our festivals, sabhas, and divine programs at
            Shree Swaminarayan Mandir, Vadtal Dham Palatine.
          </p>
          <div className="flex justify-center gap-4">
            <Button>Upcoming Events</Button>
            <Button variant="outline">Temple Calendar</Button>
          </div>
        </div>
      </section>

    </main>
  )
}
