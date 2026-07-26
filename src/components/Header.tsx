"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "speakers", href: "#speakers" },
    { name: "schedule", href: "#schedule" },
    { name: "tickets", href: "#tickets" },
    { name: "venue", href: "#venue" },
    { name: "faq", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-100/90 backdrop-blur-md border-b border-zinc-200 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Wordmark */}
        <Link href="#" className="font-display text-base font-black tracking-tight text-foreground hover:text-orange-500 transition-colors duration-200">
          VECTORS_2026
        </Link>

        {/* Desktop Nav Links (Lowercase Monospace + Underline hover) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-mono text-xs font-medium lowercase tracking-wide text-zinc-500 hover:text-orange-500 hover:underline underline-offset-4 transition-colors duration-200 py-1"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button (Sharp corner, no-rounding, font-mono) */}
        <div className="hidden md:flex">
          <Link
            href="#tickets"
            className="rounded-none border border-zinc-900 bg-zinc-900 hover:bg-orange-500 hover:border-orange-500 text-white px-5 py-2 text-xs font-mono font-bold tracking-widest transition-all duration-300"
          >
            REGISTER_PASS
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-none p-2 text-zinc-500 hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 bg-zinc-100 px-6 py-6 transition-all duration-300">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-mono text-xs lowercase text-zinc-600 hover:text-orange-500 transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-zinc-200">
              <Link
                href="#tickets"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center rounded-none border border-zinc-900 bg-zinc-900 text-white py-2.5 text-xs font-mono font-bold tracking-widest transition-all duration-300"
              >
                REGISTER_PASS
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
