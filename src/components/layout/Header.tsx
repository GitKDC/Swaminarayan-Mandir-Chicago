"use client";

import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";
import logoImg from "@/assets/Logo.png";

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
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/" || location.pathname === "";
const isTransparent = isHome && !scrolled && !isMobile;
  /* CLOSE MOBILE MENU PROPERLY */
  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";

    if (isHome) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  /* ABOUT SCROLL */
  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    closeMenu();

    const aboutSection = document.getElementById("about");

    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById("about");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    }
  };

  /* LIVE BUTTON */
  const handleLiveClick = () => {
    navigate("/darshan");

    setTimeout(() => {
      const liveSection = document.getElementById("live-darshan");
      if (liveSection) {
        liveSection.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 150);
  };
useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint
  };

  checkMobile();
  window.addEventListener("resize", checkMobile);

  return () => window.removeEventListener("resize", checkMobile);
}, []);
  /* SCROLL DETECTION */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* LOCK BODY SCROLL WHEN MENU OPEN */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const textColor = isTransparent ? "text-white" : "text-gray-900";
  const subTextColor = isTransparent ? "text-white/80" : "text-gray-600";

  return (
    <>
      {/* HEADER */}
      <header
  className={`fixed top-0 left-0 right-0 h-16 md:h-20 w-full z-60 transition-all duration-300
  ${
    scrolled
      ? "bg-white shadow-md"
      : isHome
      ? "bg-white md:bg-transparent"
      : "bg-white shadow-sm"
  }`}
>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">

            {/* LOGO */}
            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center gap-3"
            >
              <img
                src={logoImg}
                alt="Mandir Logo"
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
              />

              <div className="flex flex-col leading-tight">
                <span
                  className={`text-sm md:text-lg font-semibold transition-colors ${textColor}`}
                >
                  Shree Swaminarayan Mandir
                </span>

                <span
                  className={`block text-xs ${subTextColor}`}
                >
                  Palatine, Chicago
                </span>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) =>
                link.name === "About" ? (
                  <button
                    key={link.name}
                    onClick={handleAboutClick}
                    className={`text-sm font-medium transition-colors
                    ${
                      isTransparent
                        ? "text-white hover:text-[#FF7A00]"
                        : "text-gray-700 hover:text-[#FF7A00]"
                    }`}
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-sm font-medium transition-colors
                    ${
                      isTransparent
                        ? "text-white hover:text-[#FF7A00]"
                        : "text-gray-700 hover:text-[#FF7A00]"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </nav>

            {/* DESKTOP BUTTON */}
            <div className="hidden md:block">
              <Button size="sm" onClick={handleLiveClick}>
                Live
              </Button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden text-3xl ${textColor}`}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300
        ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* MOBILE MENU */}
      <aside
        className={`fixed top-16 md:top-20 left-0 right-0 bg-white shadow-lg z-50 md:hidden
        transition-transform duration-300
        ${menuOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <nav className="flex flex-col gap-5 px-6 py-6 max-w-md mx-auto">

          {navLinks.map((link) =>
            link.name === "About" ? (
              <button
                key={link.name}
                onClick={handleAboutClick}
                className="text-lg font-medium text-gray-800 hover:text-[#FF7A00] text-left"
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                onClick={closeMenu}
                className="text-lg font-medium text-gray-800 hover:text-[#FF7A00]"
              >
                {link.name}
              </Link>
            )
          )}

        </nav>
      </aside>
    </>
  );
}