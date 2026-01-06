import DarshanCard from "@/components/DarshanCard";
import Section from "@/components/Section";
import { Button } from "@/components/ui/Button";
import YouTubeEmbed from "@/components/YouTubeEmbed";

export default function DarshanPage() {
  return (
    <main className="pt-20 bg-orange-200">

      {/* HERO */}
      <section className="bg-[#faf7f4] py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm tracking-widest text-gray-500 mb-4">
            ॥ SHREE SWAMINARAYANO VI JAYATE ॥
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
            Divine Darshan
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Experience the sacred presence of Lord Harikrishna Maharaj and
            Shri Laxminarayan Dev through daily darshan, seva, and aarti at
            Vadtal Dham Palatine, Chicago.
          </p>
        </div>
      </section>

      {/* DAILY DARSHAN */}
      <Section
        title="Divine Daily Darshan"
        subtitle="A sacred opportunity to connect with the Divine every day"
      >
        <p className="text-gray-700 leading-relaxed max-w-4xl">
          At Vadtal Dham Palatine, the saints perform daily seva of
          Lord Harikrishna Maharaj and Shri Laxminarayan Dev with
          great devotion, discipline, and purity.
          <br /><br />
          Devotees from around the world visit the temple every day to
          receive darshan and feel spiritually uplifted by the divine
          presence of Bhagwan.
        </p>
      </Section>

      {/* DARSHAN HIGHLIGHTS */}
      <Section
        title="Darshan & Seva Highlights"
        subtitle="Rooted in devotion, guided by tradition"
      >
        <div className="grid md:grid-cols-3 gap-6">
          <DarshanCard
            title="Daily Seva"
            description="Saints perform daily seva of the Lord with purity and devotion, following the traditions of the Swaminarayan Sampraday."
          />
          <DarshanCard
            title="Divine Aarti"
            description="Daily aarti is performed, allowing devotees to participate in collective worship and spiritual reflection."
          />
          <DarshanCard
            title="Peace & Blessings"
            description="Darshan provides inner peace, spiritual strength, and divine blessings to devotees from all walks of life."
          />
        </div>
      </Section>

      {/* LIVE DARSHAN */}
      <Section
        title="Live Darshan & Aarti"
        subtitle="Connecting devotees across the world"
      >
        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* TEXT */}
          <div>
            <p className="text-gray-700 leading-relaxed mb-6">
              For devotees who are unable to visit the temple in person,
              daily live darshan and aarti are streamed through our
              official YouTube channel.
              <br /><br />
              Through live broadcasts of darshan, aarti, and katha,
              devotees across the globe are able to remain connected
              with the divine presence of Vadtal Dham.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button>Watch Live Darshan</Button>
              <Button variant="outline">YouTube Channel</Button>
            </div>
          </div>

          {/* YOUTUBE LIVE */}
          <YouTubeEmbed
            videoId="LIVE_VIDEO_ID_HERE"
            title="Vadtal Dham Palatine Live Darshan"
            live
          />
        </div>
      </Section>

      {/* SUNDAY DARSHAN */}
      <Section
        title="Sunday Darshan & Sabha"
        subtitle="A complete spiritual experience"
      >
        <ul className="list-disc pl-5 space-y-3 text-gray-700 max-w-4xl">
          <li>Bhagwan Darshan</li>
          <li>Kirtan Bhakti</li>
          <li>Katha & Spiritual Discourses</li>
          <li>Sant Darshan</li>
          <li>Mahaprasad for devotees</li>
        </ul>
      </Section>

      {/* CTA */}
      <section className="py-20 bg-[#faf7f4]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-gray-900 mb-4">
            Receive Divine Blessings
          </h2>
          <p className="text-gray-700 mb-8">
            Visit Shree Swaminarayan Mandir, Vadtal Dham Palatine, or
            join us online to experience divine darshan, seva,
            and spiritual bliss.
          </p>
          <div className="flex justify-center gap-4">
            <Button>Today&apos;s Darshan</Button>
            <Button variant="outline">Temple Schedule</Button>
          </div>
        </div>
      </section>

    </main>
  )
}
