
import {useState} from "react";
import { ExternalLink } from "lucide-react";
import { Heart, BookOpen, Star, Book } from "lucide-react";
type Category =
  | "All"
  | "Primary Scripture"
  | "Biography"
  | "Devotional"
  | "Poetry"
  | "Leelas"
  | "Conduct"
  | "Dharma";

const categories: Category[] = [
  "All",
  "Primary Scripture",
  "Biography",
  "Devotional",
  "Poetry",
  "Leelas",
  "Conduct",
  "Dharma",
];

type Book = {
  title: string;
  hindi: string;
  category: string;      // For filtering
  tag?: string;          // For Primary Scripture badge
  desc: string;
  meta?: string;         // Slokas / Volumes / Discourses
};

export const books: Book[] = [
  {
    title: "Shikshapatri",
    hindi: "શિક્ષાપત્રી",
    category: "Primary Scripture",
    tag: "Primary Scripture",
    meta: "212 Slokas",
    desc:
      "The sacred epistle written by Bhagwan Shree Swaminarayan containing 212 verses of divine guidance for spiritual living, moral conduct, and devotion.",
  },
  {
    title: "Vachanamrut",
    hindi: "વચનામૃત",
    category: "Primary Scripture",
    tag: "Primary Scripture",
    meta: "273 Discourses",
    desc:
      "A compilation of 273 spiritual discourses delivered by Bhagwan Shree Swaminarayan, containing the essence of spiritual wisdom and philosophy.",
  },
  {
    title: "Satsangi Jivan",
    hindi: "સત્સંગી જીવન",
    category: "Biography",
    tag: "Primary Scripture",
    meta: "5 Volumes",
    desc:
      "The biography of Bhagwan Shree Swaminarayan written by Shatanand Muni, detailing the divine life and teachings of the Lord.",
  },
  {
    title: "Bhaktachintamani",
    hindi: "ભક્તચિંતામણી",
    category: "Devotional",
     tag: "Primary Scripture",
    desc:
      "A sacred text describing the life stories of devotees and the divine leelas of Bhagwan Shree Swaminarayan.",
  },
  {
    title: "Nishkulanand Kavya",
    hindi: "નિષ્કુલાનંદ કાવ્ય",
    category: "Poetry",
    tag: "Primary Scripture",
    desc:
      "Poetic compositions by Saint Nishkulanand Swami expressing deep devotion and spiritual teachings.",
  },
  {
    title: "Harililamrut",
    hindi: "હરિલીલામૃત",
    category: "Leelas",
    tag: "Primary Scripture",
    desc:
      "A detailed account of the divine pastimes (leelas) of Bhagwan Shree Swaminarayan during His time on earth.",
  },
  {
    title: "Satsangi Bhushan",
    hindi: "સત્સંગી ભૂષણ",
    category: "Conduct",
    tag: "Primary Scripture",
    desc:
      "A text adorning the principles of Satsang, explaining the codes of conduct for devotees.",
  },
  {
    title: "Dharmamrut",
    hindi: "ધર્મામૃત",
    category: "Dharma",
     tag: "Primary Scripture",
    desc:
      "The nectar of Dharma – explaining the principles of righteous living as taught by Bhagwan Swaminarayan.",
  },
];

export default function BooksPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All"
      ? books
      : books.filter((b) => b.category === active);
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

      {/* PURPOSE
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
      </section> */}
     <section className="bg-[#faf7f4] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-serif font-bold text-[#4b2f1f]">
          Primary Sacred Texts
        </h1>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          The foundational scriptures that form the core of Swaminarayan
          philosophy and spiritual practice
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {books.map((book, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden"
          >
            {/* Top Image Area */}
            <div className="relative h-48 bg-gradient-to-br from-orange-50 to-yellow-50 flex items-center justify-center">
              <span className="absolute top-4 right-4 text-xs bg-orange-400 text-white px-3 py-1 rounded-full">
                {book.tag}
              </span>

              <div className="w-16 h-16 border-2 border-orange-400 rounded-xl flex items-center justify-center">
                <img src="/book.png" className="h-10" alt="" />
              </div>
            </div>

            {/* Content */}
            <div className="p-6 text-left">
              <h3 className="text-2xl font-serif font-bold text-[#3b2417]">
                {book.title}
              </h3>
              <p className="text-orange-500 text-sm mt-1">{book.hindi}</p>

              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                {book.desc}
              </p>

              <div className="flex items-center justify-between mt-6">
                <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
                  {book.meta}
                </span>

                <a
                  href="#"
                  className="flex items-center gap-1 text-orange-500 hover:text-orange-600 font-medium text-sm"
                >
                  Learn More <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

     <section className="bg-[#fffaf3] py-24 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-serif font-bold text-[#4b2f1f]">
          Complete Sacred Library
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Discover the complete collection of divine literature from the
          Swaminarayan Sampraday
        </p>
      </div>

      {/* Filter Pills */}
      <div className="flex flex-wrap justify-center gap-3 mb-14">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full border text-sm transition
              ${
                active === cat
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-gray-700 border-orange-200 hover:border-orange-400"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filtered.map((book, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 border border-orange-100 shadow-sm hover:shadow-md transition"
          >
            <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center mb-4">
              <img src="/book.png" className="h-7" alt="" />
            </div>

            <h3 className="font-serif text-xl font-bold text-[#3b2417]">
              {book.title}
            </h3>
            <p className="text-orange-500 text-sm">{book.hindi}</p>

            <span className="inline-block mt-2 text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
              {book.category}
            </span>

            <p className="text-sm text-gray-600 mt-3 leading-relaxed line-clamp-3">
              {book.desc}
            </p>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-[#fffaf3] py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-14">
          <h2 className="text-4xl font-serif font-bold text-[#4b2f1f]">
            Guidelines for Sacred Reading
          </h2>
          <p className="text-gray-500 mt-4">
            Approach these divine texts with reverence and devotion
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Card */}
          <div className="bg-white rounded-2xl border border-orange-100 p-6 flex gap-5">
            <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
              <Heart size={20} />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-[#3b2417]">
                Pure Mind & Heart
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Begin with a clean body and pure intentions. Offer a prayer
                before reading.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-orange-100 p-6 flex gap-5">
            <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
              <BookOpen size={20} />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-[#3b2417]">
                Respectful Handling
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Keep sacred texts in a clean, elevated place. Never place them
                on the floor.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-orange-100 p-6 flex gap-5">
            <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
              <Star size={20} />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-[#3b2417]">
                Regular Study
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Establish a daily practice of reading, even if only a few
                verses.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-orange-100 p-6 flex gap-5">
            <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
              <Book size={20} />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-[#3b2417]">
                Seek Guidance
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Study under the guidance of learned saints for deeper
                understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-[#fff3df] to-[#fffaf3] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-[#4b2f1f]">
            Begin Your Spiritual Journey
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Visit our temple library or contact us to learn more about these
            sacred texts and how to incorporate their teachings into your daily
            life.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition">
              Visit Temple Library
            </button>
            <button className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-3 rounded-lg font-medium transition flex items-center gap-2">
              Download Reading Guide
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
