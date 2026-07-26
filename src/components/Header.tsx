"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "SPEAKERS", href: "#speakers" },
    { name: "SCHEDULE", href: "#schedule" },
    { name: "TICKETS", href: "#tickets" },
    { name: "VENUE", href: "#venue" },
    { name: "FAQ", href: "#faq" },
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
        {/* Brand Logo */}
        <Link href="#" className="font-display text-lg font-black tracking-widest text-foreground hover:text-orange-500 transition-colors">
          VECTORS <span className="text-orange-500">//</span> 2026
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-mono text-xs font-bold tracking-widest text-foreground hover:text-orange-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center">
          <Link
            href="#tickets"
            className="rounded-lg bg-foreground text-background hover:bg-orange-500 hover:text-white px-4 py-2 text-xs font-semibold tracking-wider transition-all duration-300 flex items-center gap-1.5"
          >
            GET TICKETS
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </header>
  );
}
