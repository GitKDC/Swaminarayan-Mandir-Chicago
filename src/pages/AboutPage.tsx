import FeatureCard from '../components/FeatureCard'
import Section from '../components/Section'
import { Button } from '../components/ui/Button'

export default function AboutPage() {
  return (
    <main className="pt-20 bg-orange-200">

      {/* HERO INTRO */}
      <section className="bg-[#faf7f4] py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm tracking-widest text-gray-500 mb-4">
            ॥ SHREE SWAMINARAYANO VI JAYATE ॥
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
            About Shree Swaminarayan Mandir
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Vadtal Dham, Palatine, Chicago is a divine spiritual center rooted in the
            Swaminarayan Sampraday and established to nurture devotion, culture,
            and righteousness.
          </p>
        </div>
      </section>

      {/* ABOUT TEMPLE */}
      <Section
        title="About Our Temple"
        subtitle="A divine extension of Vadtal Laxminarayan Dev Gadi"
      >
        <p className="text-gray-700 leading-relaxed max-w-4xl">
          Vadtal Dham, Palatine, Chicago is a branch of the Swaminarayan Sampraday’s
          divine capital — Vadtal Laxminarayan Dev Gadi.  
          Founded in 2018 with the divine blessings of H.H. Sadguru Shastri Shri
          Dharmprasad Dasji Swami, the temple was established by H.H. Sadguru
          Shastri Shri Bhaktiprakash Dasji Swami.
          <br /><br />
          As commanded by Lord Shree Hari in the Shikshapatri, the sacred idols were
          installed by P. P. D.D. 1008 Acharya Shree Rakeshprasadji Maharajshree,
          making this temple the divine Vadtal Dham Palatine–Chicago.
        </p>
      </Section>

      {/* VISION */}
      <Section
        title="Our Vision"
        subtitle="Guided by devotion, unity, and eternal values"
      >
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            title="Spiritual Growth"
            description="To inspire devotion, righteousness, and inner peace through the divine teachings of Lord Swaminarayan."
          />
          <FeatureCard
            title="Community & Seva"
            description="To unite devotees through love, service, and cultural harmony in the divine presence of Vadtal Dham."
          />
          <FeatureCard
            title="Preservation of Dharma"
            description="To preserve and spread the eternal values of the Swaminarayan Sampraday across generations."
          />
        </div>
      </Section>

      {/* ACTIVITIES */}
      <Section
        title="Spiritual & Cultural Activities"
        subtitle="A vibrant center of devotion and service"
      >
        <div className="grid md:grid-cols-2 gap-8 text-gray-700">
          <ul className="space-y-3 list-disc pl-5">
            <li>Daily Darshan & Aarti (Live streamed worldwide)</li>
            <li>Sunday Sabha – Kirtan, Katha, Sant Darshan & Mahaprasad</li>
            <li>Divine Festivals & Annakut Utsavs</li>
            <li>Yajna, Bhajan & Samuh Mahapooja</li>
            <li>Sant Padharamani & Dharm Sabha</li>
          </ul>
          <ul className="space-y-3 list-disc pl-5">
            <li>Bal Sanskar Mandal (Kids Cultural Education)</li>
            <li>Gujarati Language, Shlokas & Kirtans</li>
            <li>Cultural Programs & Youth Activities</li>
            <li>Divine Kitchen Seva by Devotees</li>
            <li>Social Seva & Community Outreach</li>
          </ul>
        </div>
      </Section>

      {/* GLOBAL CONNECTIVITY */}
      <Section
        title="World Connectivity"
        subtitle="Spreading Sanatan Dharma across the globe"
      >
        <p className="text-gray-700 max-w-4xl">
          Our saints tirelessly travel across India and abroad for the upliftment
          of Sanatan Dharma through Dharmsabhas, spiritual gatherings, public
          discourses, and religious assemblies — inspiring faith, devotion, and
          righteousness worldwide.
        </p>
      </Section>

      {/* CTA */}
      <section className="py-20 bg-[#faf7f4]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-gray-900 mb-4">
            Experience the Divine Presence
          </h2>
          <p className="text-gray-700 mb-8">
            Join us for daily darshan, festivals, and spiritual programs at
            Shree Swaminarayan Mandir, Vadtal Dham Palatine.
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
