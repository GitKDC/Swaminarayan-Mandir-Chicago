"use client";

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/Button";
import DonationModal from "../sections/donation/DonationModel";

const navLinks = [
  { name: "Home", href: "/" },
  // { name: "About", href: "/about" },
  { name: "Darshan", href: "/darshan" },
  { name: "Divine Books", href: "/books" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [donationOpen, setDonationOpen] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "";
  const isTransparent = isHome && !scrolled;

  // Detect scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu or modal open
  useEffect(() => {
    document.body.style.overflow = menuOpen || donationOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, donationOpen]);

  const textColor = isTransparent ? "text-white" : "text-black";
  const subTextColor = isTransparent ? "text-white/80" : "text-black/80";

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-60 transition-all duration-300
          ${scrolled ? "bg-white shadow-md" : isHome ? "bg-transparent" : "bg-white"}
        `}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="h-16 sm:h-16 md:h-20 flex items-center justify-between">

            {/* LOGO */}
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 sm:gap-3 group"
            >
              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 transition-colors
                  ${
                    isTransparent
                      ? "bg-white/10 border-white/30 group-hover:border-white"
                      : "bg-primary/10 border-border-muted group-hover:border-primary"
                  }
                `}
              >
                <span className="text-lg sm:text-xl font-serif font-bold text-orange-400">
                  ॐ
                </span>
              </div>

              <div className="flex flex-col leading-tight">
                <span
                  className={`text-sm sm:text-base md:text-lg font-semibold transition-colors ${textColor}`}
                >
                  Shree Swaminarayan Mandir
                </span>
                <span
                  className={`hidden sm:block text-[10px] sm:text-xs transition-colors ${subTextColor}`}
                >
                  Palatine, Chicago
                </span>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-5 lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative inline-block text-sm font-medium transition-colors
                    ${
                      isTransparent
                        ? "text-white hover:text-[#FF7A00]"
                        : "text-gray-700 hover:text-[#FF7A00]"
                    }
                    after:absolute after:left-0 after:-bottom-1
                    after:h-0.5 after:w-0 after:bg-[#FF7A00]
                    after:transition-all after:duration-300
                    hover:after:w-full
                  `}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* DESKTOP CTA */}
            <div className="hidden md:block">
              <Button size="sm" onClick={() => setDonationOpen(true)}>
                Donation
              </Button>
            </div>

            {/* MOBILE MENU ICON */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className={`md:hidden text-2xl sm:text-3xl leading-none ${textColor}`}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* MOBILE MENU PANEL */}
      <aside
        className={`fixed top-16 sm:top-16 md:top-20 left-0 right-0 z-40 md:hidden bg-white shadow-lg
          transition-transform duration-300
          ${menuOpen ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <nav className="flex flex-col px-5 sm:px-6 py-6 gap-5 max-w-xl mx-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-800 font-medium text-lg hover:text-[#FF7A00]"
            >
              {link.name}
            </Link>
          ))}

          {/* MOBILE CTA INSIDE MENU */}
          <div className="pt-4">
            <Button className="w-full" onClick={() => setDonationOpen(true)}>
              Donation
            </Button>
          </div>
        </nav>
      </aside>

      {/* DONATION MODAL */}
      <DonationModal
        open={donationOpen}
        onClose={() => setDonationOpen(false)}
        onSubmit={(data) => {
          console.log("Donation Data:", data);
        }}
      />
    </>
  );
}
