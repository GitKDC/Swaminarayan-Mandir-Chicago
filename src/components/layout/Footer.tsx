import { Link } from "react-router-dom"
import { Button } from "../ui/Button";

export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-gray-300">
      {/* TOP */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">

          {/* ABOUT */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Shree Swaminarayan Mandir
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Vadtal Dham Palatine, Chicago is a divine spiritual center
              of the Swaminarayan Sampraday, inspiring devotion,
              righteousness, and inner peace through daily darshan,
              seva, and satsang.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/darshan" className="hover:text-white">Darshan</Link></li>
              <li><Link to="/events" className="hover:text-white">Events</Link></li>
              <li><Link to="/books" className="hover:text-white">Divine Books</Link></li>
              <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* DARSHAN & EVENTS */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Spiritual Activities
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Daily Darshan & Aarti</li>
              <li>Sunday Sabha</li>
              <li>Divine Festivals</li>
              <li>Annakut Utsav</li>
              <li>Bhajan & Kirtan</li>
              <li>Bal Sanskar Mandal</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Contact
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              1521 N Rand Road<br />
              Palatine, IL – 60074
            </p>

            <p className="text-sm text-gray-400 mt-3">
              Phone:{" "}
              <a
                href="tel:+18477015725"
                className="text-[#FF7A00] hover:underline"
              >
                +1 847-701-5725
              </a>
            </p>

            <div className="mt-5">
              <Button size="sm">
                Today&apos;s Darshan
              </Button>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Shree Swaminarayan Mandir, Vadtal Dham Palatine
          </p>
          <p className="tracking-widest text-xs">
            ॥ SHREE SWAMINARAYANO VI JAYATE ॥
          </p>
        </div>
      </div>
    </footer>
  );
}
