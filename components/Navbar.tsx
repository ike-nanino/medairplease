"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Accreditations", href: "/accreditations" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-8 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)] border-b border-stone-200"
            : "bg-[#FDF8F2]/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0 group">
              <Image
                src="/images/logo.png"
                alt="Med Air Transport Logo"
                width={80}
                height={20}
                priority
                className="h-auto w-[60px] md:w-[90px] object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-[#C0392B] bg-red-50"
                        : "text-[#4A4A4A] hover:text-[#C0392B] hover:bg-red-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <a
              href="tel:+18005550199"
              className="hidden lg:flex items-center gap-2 bg-[#C0392B] hover:bg-[#96281B] text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors duration-200 shrink-0"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                viewBox="0 0 24 24"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.63a16 16 0 006.29 6.29l1.95-1.16a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              Emergency Call
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded hover:bg-stone-100 transition-colors"
            >
              <span
                className={`block w-5 h-0.5 bg-[#1C1C1E] rounded-full transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-5 h-0.5 bg-[#1C1C1E] rounded-full transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`}
              />
              <span
                className={`block w-5 h-0.5 bg-[#1C1C1E] rounded-full transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-30 lg:hidden transition-all duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* Slide-in drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-stone-100">
            <span className="font-serif font-bold text-lg text-[#1C1C1E]">
              MedAir <span className="text-[#C0392B]">Global</span>
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-100 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto py-4 px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-3.5 rounded-lg text-[#4A4A4A] font-medium hover:text-[#C0392B] hover:bg-red-50 transition-all duration-150 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C0392B] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="p-5 border-t border-stone-100 space-y-3">
            <a
              href="tel:+18005550199"
              className="flex items-center justify-center gap-2 w-full bg-[#C0392B] hover:bg-[#96281B] text-white font-semibold py-3 rounded-lg transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                viewBox="0 0 24 24"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.63a16 16 0 006.29 6.29l1.95-1.16a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              +1 (800) 555-0199
            </a>
            <a
              href="mailto:dispatch@medairglobal.com"
              className="flex items-center justify-center gap-2 w-full border-2 border-[#C0392B] text-[#C0392B] font-semibold py-3 rounded-lg hover:bg-red-50 transition-colors text-sm"
            >
              dispatch@medairglobal.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
