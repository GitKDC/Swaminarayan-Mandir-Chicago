import DarshanCard from "@/components/ui/DarshanCard";
import Section from "@/components/Section";
import { Button } from "@/components/ui/Button";
import YouTubeEmbed from "@/components/YouTubeEmbed";

export default function DarshanPage() {
  return (
    <main className="pt-20 bg-bg-page">

      {/* HERO */}
      <section className="bg-[#faf7f4] py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm tracking-widest text-text-secondary mb-4">
            ॥ SHREE SWAMINARAYANO VI JAYATE ॥
          </p>

          <h1 className="font-heading text-4xl md:text-5xl text-gray-900 mb-6">
            Divine Darshan
          </h1>

          <p className="text-text-secondary max-w-3xl mx-auto">
            Experience the sacred presence of Lord Harikrishna Maharaj and
            Shri Laxminarayan Dev through daily darshan, seva, and aarti.
          </p>
        </div>
      </section>

      {/* LIVE DARSHAN */}
      <Section title="Live Darshan & Aarti">
        <div className="flex flex-col gap-12 items-center">

          <div className="w-full max-w-7xl">
            <YouTubeEmbed 
            videoId="P5d0sfP4qxg"
            live={true}/>
          </div>

          <div className="w-full max-w-4xl text-left">
            <p className="text-gray-700 leading-relaxed mb-6">
              Connecting devotees across the world
              <br /><br />

              For devotees who cannot visit the temple in person,
              daily live darshan and aarti are streamed through
              our official YouTube channel.

              <br /><br />

              Through live broadcasts of darshan and katha,
              devotees across the globe remain connected
              with the divine presence of Bhagwan.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button>Watch Live Darshan</Button>
              <Button variant="outline">YouTube Channel</Button>
            </div>
          </div>
        </div>
      </Section>

      {/* DAILY DARSHAN */}
      <Section
        title="Divine Daily Darshan"
        subtitle="A sacred opportunity to connect with the Divine every day"
      >
        <p className="text-gray-700 leading-relaxed max-w-4xl">
          Saints perform daily seva of Lord Harikrishna Maharaj
          and Shri Laxminarayan Dev with devotion and discipline.

          <br /><br />

          Devotees from around the world visit the temple daily
          to receive divine darshan and spiritual blessings.
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
            description="Saints perform daily seva of the Lord with devotion."
          />

          <DarshanCard
            title="Divine Aarti"
            description="Daily aarti allows devotees to participate in worship."
          />

          <DarshanCard
            title="Peace & Blessings"
            description="Darshan provides inner peace and spiritual strength."
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
          <li>Mahaprasad</li>
        </ul>
      </Section>

      {/* CTA */}
      <section className="py-20 bg-[#faf7f4]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-gray-900 mb-4">
            Receive Divine Blessings
          </h2>

          <p className="text-gray-700 mb-8">
            Visit the temple or join us online to experience
            divine darshan and spiritual bliss.
          </p>

          <div className="flex justify-center gap-4">
            <Button>Today's Darshan</Button>
            <Button variant="outline">Temple Schedule</Button>
          </div>
        </div>
      </section>

    </main>
  );
}