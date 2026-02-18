import Section from '@/components/Section'
import { Button } from '@/components/ui/Button'

export default function ContactPage() {
  return (
    <main className="pt-20 bg-bg-page">

      {/* HERO */}
      <section className="bg-[#faf7f4] py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm tracking-widest text-text-secondary mb-4">
            ॥ SHREE SWAMINARAYANO VI JAYATE ॥
          </p>
          <h1 className="font-heading text-4xl md:text-5xl text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-text-secondary max-w-3xl mx-auto">
            We welcome devotees and visitors to connect with
            Shree Swaminarayan Mandir, Vadtal Dham Palatine.
            Please feel free to reach out or visit us.
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <Section title="Temple Information" subtitle="Visit us or get in touch">
        <div className="grid md:grid-cols-2 gap-10">

          {/* ADDRESS */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Temple Address
            </h3>
            <p className="text-gray-700 leading-relaxed">
              ॐ Shree Swaminarayan Mandir<br />
              Vadtal Dham, Palatine<br />
              1521 N Rand Road<br />
              Palatine, IL – 60074
            </p>

            <p className="text-gray-700 mt-4">
              <span className="font-medium">Phone:</span>{" "}
              <a
                href="tel:+18477015725"
                className="text-[#FF7A00] hover:underline"
              >
                +1 847-701-5725
              </a>
            </p>
          </div>

          {/* VISITING INFO */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Visiting the Mandir
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Devotees are welcome to visit the mandir for
              daily darshan, aarti, and spiritual programs.
              Special events, festivals, and sabhas are held
              throughout the year with devotion and discipline.
            </p>
          </div>

        </div>
      </Section>

      {/* MAP + CONTACT FORM (SIDE BY SIDE) */}
<Section title="Get in Touch" subtitle="Find us on map or send a message">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

    {/* CONTACT FORM */}
    <form className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]"
        />
      </div>

      <input
        type="text"
        placeholder="Subject"
        className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]"
      />

      <textarea
        rows={5}
        placeholder="Your Message"
        className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]"
      />

      <Button>Send Message</Button>
    </form>

    {/* GOOGLE MAP */}
    <div className="w-full h-87.5 md:h-105 rounded-2xl overflow-hidden shadow-lg">
      <iframe
        title="Shree Swaminarayan Mandir Palatine Map"
        src="https://www.google.com/maps?q=Shree+Swaminarayan+Mandir+Palatine+Chicago&output=embed"
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>

  </div>
</Section>


      {/* CTA */}
      <section className="py-20 bg-[#faf7f4]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-gray-900 mb-4">
            Visit the Mandir
          </h2>
          <p className="text-gray-700 mb-8">
            Join us for daily darshan, Sunday sabha,
            festivals, and spiritual gatherings at
            Vadtal Dham Palatine.
          </p>
          <div className="flex justify-center gap-4">
            <Button>Today&apos;s Darshan</Button>
            <Button variant="outline">Upcoming Events</Button>
          </div>
        </div>
      </section>

    </main>
  )
}
