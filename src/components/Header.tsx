"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { Button } from "./ui/Button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Darshan", href: "/darshan" },
  { name: "Divine Books", href: "/books" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const textColor = scrolled ? "text-gray-900" : "text-white";
  const subTextColor = scrolled ? "text-gray-500" : "text-white/80";

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
          ${scrolled ? "bg-white shadow-md" : "bg-transparent"}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="h-20 flex items-center justify-between">

            {/* LOGO */}
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="flex flex-col leading-tight"
            >
              <span className={`text-lg font-semibold ${textColor}`}>
                Shree Swaminarayan Mandir
              </span>
              <span className={`text-xs ${subTextColor}`}>
                Palatine, Chicago
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium transition-colors
                    ${
                      scrolled
                        ? "text-gray-700 hover:text-[#FF7A00]"
                        : "text-white hover:text-white/80"
                    }
                  `}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* DESKTOP CTA ONLY */}
            <div className="hidden md:block">
              <Button size="sm">Today&apos;s Darshan</Button>
            </div>

            {/* MOBILE MENU ICON (ONLY ICON ON MOBILE) */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className={`md:hidden text-3xl leading-none ${textColor}`}
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
        className={`fixed top-20 left-0 right-0 z-50 md:hidden bg-white shadow-lg
          transition-transform duration-300
          ${menuOpen ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <nav className="flex flex-col px-6 py-6 gap-5">
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

          {/* MOBILE CTA INSIDE MENU (NOT HEADER) */}
          <div className="pt-4">
            <Button className="w-full">
              Today&apos;s Darshan
            </Button>
          </div>
        </nav>
      </aside>
    </>
  );
}