import Section from "../components/Section";
import { Button } from "../components/ui/Button";

export default function BooksPage() {
  return (
    <main className="pt-20 bg-bg-page">

      {/* HERO */}
      <section className="bg-[#faf7f4] py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm tracking-widest text-text-secondary mb-4">
            ॥ SHREE SWAMINARAYANO VI JAYATE ॥
          </p>
          <h1 className="font-heading text-4xl md:text-5xl text-gray-900 mb-6">
            Divine Books
          </h1>
          <p className="text-text-secondary max-w-3xl mx-auto">
            Explore the sacred scriptures and spiritual literature that
            illuminate the divine teachings of Lord Swaminarayan and
            guide devotees on the path of devotion, righteousness,
            and inner peace.
          </p>
        </div>
      </section>

      {/* PURPOSE */}
      <Section
        title="Sacred Scriptures & Spiritual Wisdom"
        subtitle="Timeless guidance rooted in Sanatan Dharma"
      >
        <p className="text-gray-700 max-w-4xl leading-relaxed">
          Divine books play a vital role in preserving and spreading
          the teachings of Lord Swaminarayan. These sacred texts
          provide guidance on righteous living, devotion, discipline,
          and spiritual upliftment.
          <br /><br />
          At Shree Swaminarayan Mandir, Vadtal Dham Palatine, devotees
          are encouraged to study and reflect upon these scriptures
          to strengthen faith and cultivate a pure, value-based life.
        </p>
      </Section>

      {/* CORE SCRIPTURES */}
      <Section
        title="Core Scriptures of the Swaminarayan Sampraday"
        subtitle="Foundations of spiritual discipline and devotion"
      >
        <ul className="list-disc pl-5 space-y-3 text-gray-700 max-w-4xl">
          <li>
            <strong>Shikshapatri</strong> – The sacred code of conduct
            written by Lord Swaminarayan, guiding moral and spiritual life.
          </li>
          <li>
            <strong>Vachanamrut</strong> – Divine discourses of Lord
            Swaminarayan that reveal profound spiritual truths.
          </li>
          <li>
            <strong>Satsangi Jeevan</strong> – A comprehensive scripture
            detailing the life, teachings, and philosophy of Lord Swaminarayan.
          </li>
          <li>
            <strong>Bhaktachintamani</strong> – Devotional literature
            describing the divine acts and virtues of the Lord.
          </li>
        </ul>
      </Section>

      {/* TEACHINGS */}
      <Section
        title="Teachings & Spiritual Literature"
        subtitle="Guidance for daily life and devotion"
      >
        <p className="text-gray-700 max-w-4xl leading-relaxed">
          In addition to the core scriptures, various spiritual books,
          commentaries, and writings by revered saints of the
          Swaminarayan Sampraday are studied and shared with devotees.
          <br /><br />
          These texts inspire virtues such as humility, devotion,
          self-discipline, service, and unwavering faith in Bhagwan,
          helping devotees lead a spiritually centered life.
        </p>
      </Section>

      {/* STUDY & LEARNING */}
      <Section
        title="Study, Learning & Reflection"
        subtitle="Deepening understanding through knowledge"
      >
        <p className="text-gray-700 max-w-4xl leading-relaxed">
          Regular reading, discussion, and reflection upon divine books
          are encouraged through satsang, katha, and study sessions.
          Saints guide devotees in understanding the deeper meanings
          of scriptures and applying them in daily life.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button>Explore Scriptures</Button>
          <Button variant="outline">Join Katha Sessions</Button>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-20 bg-[#faf7f4]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-gray-900 mb-4">
            Learn, Reflect, and Grow Spiritually
          </h2>
          <p className="text-gray-700 mb-8">
            Discover the divine wisdom of the Swaminarayan Sampraday
            through sacred scriptures and spiritual teachings at
            Shree Swaminarayan Mandir, Vadtal Dham Palatine.
          </p>
          <div className="flex justify-center gap-4">
            <Button>Today&apos;s Darshan</Button>
            <Button variant="outline">Contact the Mandir</Button>
          </div>
        </div>
      </section>

    </main>
  )
}
