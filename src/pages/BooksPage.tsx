import { useState, useMemo } from "react";
import { ExternalLink, Loader, Download } from "lucide-react";
import { Heart, BookOpen, Star, Book } from "lucide-react";
import { useBooks, type Book as BookType } from "@/hooks/useBooks";

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


// Helper function to download PDF
const downloadPDF = (url: string, filename: string) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename || "book.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Helper function to open PDF in browser
const openPDFInBrowser = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};



export default function BooksPage() {
  const { books: apiBooks, loading, error, fetchBooks } = useBooks();
  const [active, setActive] = useState<Category>("All");

  // Only display backend books (no fallback)
  const books = apiBooks;

  const filtered = useMemo(() => {
    return active === "All"
      ? books
      : books.filter((b) => b.category === active);
  }, [books, active]);
  return (
    <main className="pt-20 bg-bg-page">
      {/* Error Banner */}
      {error && (
        <div className="bg-red-50 border-b border-red-200 px-6 py-3 text-red-700">
          <p className="max-w-5xl mx-auto">Error loading books: {error}</p>
        </div>
      )}

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
        {books
          .filter((book) => book.category === "Primary Scripture")
          .map((book) => (
            <div
              key={book._id}
              className="bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden"
            >
              {/* Top Image Area */}
              <div className="relative h-48 bg-linear-to-br from-orange-50 to-yellow-50 flex items-center justify-center">
                <span className="absolute top-4 right-4 text-xs bg-orange-400 text-white px-3 py-1 rounded-full">
                  Primary Scripture
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
                <p className="text-orange-500 text-sm mt-1">{book.hindiTitle}</p>

                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  {book.description}
                </p>

                <div className="flex items-center justify-between mt-6">
                  {book.stats && (
                    <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
                      {book.stats}
                    </span>
                  )}

                  {book.pdfUrl && book.pdfUrl !== "#" && (
                    <div className="flex gap-3">
                      <button
                        onClick={() => downloadPDF(book.pdfUrl, `${book.title}.pdf`)}
                        className="flex items-center gap-1 text-orange-500 hover:text-orange-600 font-medium text-sm cursor-pointer"
                      >
                        Download PDF <Download size={14} />
                      </button>
                      <button
                        onClick={() => openPDFInBrowser(book.pdfUrl.replace('/download', '/read'))}
                        className="flex items-center gap-1 text-orange-500 hover:text-orange-600 font-medium text-sm cursor-pointer"
                        style={{ textDecoration: 'underline' }}
                      >
                        Read PDF
                      </button>
                    </div>
                  )}
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

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center py-12">
          <Loader className="animate-spin text-orange-500" size={32} />
        </div>
      )}

      {/* Filter Pills */}
      {!loading && (
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
      )}

      {/* Cards */}
      {!loading && (
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filtered.length > 0 ? (
          filtered.map((book) => (
            <div
              key={book._id}
              className="bg-white rounded-2xl p-6 border border-orange-100 shadow-sm hover:shadow-md transition"
            >
              <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center mb-4">
                <img src="/book.png" className="h-7" alt="" />
              </div>

              <h3 className="font-serif text-xl font-bold text-[#3b2417]">
                {book.title}
              </h3>
              <p className="text-orange-500 text-sm">{book.hindiTitle}</p>

              <span className="inline-block mt-2 text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
                {book.category}
              </span>

              <p className="text-sm text-gray-600 mt-3 leading-relaxed line-clamp-3">
                {book.description}
              </p>

              {book.pdfUrl && book.pdfUrl !== "#" && (
                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => {downloadPDF(book.pdfUrl, `${book.title}.pdf`);console.log(book.pdfUrl)}}
                    className="inline-flex items-center gap-1 text-orange-500 hover:text-orange-600 font-medium text-xs cursor-pointer"
                  >
                    Download PDF <Download size={12} />
                  </button>
                  <button
                    onClick={() => openPDFInBrowser(book.pdfUrl.replace('/download', '/read'))}
                    className="inline-flex items-center gap-1 text-orange-500 hover:text-orange-600 font-medium text-xs cursor-pointer"
                    style={{ textDecoration: 'underline' }}
                  >
                    Read PDF
                  </button>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-gray-500">
            No books found in this category
          </div>
        )}
      </div>
      )}
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
      <section className="bg-linear-to-b from-[#fff3df] to-[#fffaf3] py-24 px-6">
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
