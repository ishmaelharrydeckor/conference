"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const yOffset = prefersReducedMotion ? 0 : 20;

      const tl = gsap.timeline();
      tl.fromTo(
        ".hero-meta",
        { opacity: 0, y: yOffset / 2 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      )
        .fromTo(
          ".hero-title",
          { opacity: 0, y: yOffset },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.3"
        )
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, y: yOffset },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          ".hero-timer",
          { opacity: 0, y: yOffset / 2 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: yOffset / 2 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
          "-=0.4"
        );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center bg-zinc-100 text-zinc-900 overflow-x-hidden">
      {/* Decorative Technical Gridlines background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full border-x border-zinc-200/60 max-w-7xl mx-auto grid grid-cols-4 gap-0">
          <div className="border-r border-zinc-200/40 h-full"></div>
          <div className="border-r border-zinc-200/40 h-full"></div>
          <div className="border-r border-zinc-200/40 h-full"></div>
          <div></div>
        </div>
        <div className="absolute top-1/2 left-0 right-0 border-b border-zinc-200/40"></div>
      </div>

      {/* Hero Content Section */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 w-full flex flex-col items-start gap-10">
        {/* Date / Location Eyebrow */}
        <div className="hero-meta flex flex-wrap items-center gap-6 font-mono text-xs font-bold tracking-widest text-zinc-500 opacity-0">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-orange-500" />
            <span>OCTOBER 14-16, 2026</span>
          </div>
          <span className="hidden sm:inline text-zinc-300">|</span>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-orange-500" />
            <span>SAN FRANCISCO, CA</span>
          </div>
        </div>

        {/* Headline */}
        <div className="max-w-5xl">
          <h1 className="hero-title font-display text-5xl font-extrabold tracking-tighter text-zinc-900 sm:text-7xl lg:text-8xl opacity-0 uppercase leading-[0.95]">
            Stop attending conferences<br />
            that could have been <span className="text-orange-500">an email.</span>
          </h1>
          <p className="hero-subtitle mt-8 font-sans text-lg sm:text-xl text-zinc-600 leading-relaxed max-w-2xl opacity-0">
            VECTORS 2026 is a 48-hour hands-on sprint for senior designers and frontend engineers. No high-level slides. Just raw layout engine mechanics, GPU pipelines, and production code.
          </p>
        </div>

        {/* Live Countdown Timer */}
        <div className="hero-timer w-full opacity-0">
          <CountdownTimer />
        </div>

        {/* CTA Button */}
        <div className="hero-cta opacity-0">
          <Link
            href="#tickets"
            className="inline-flex items-center gap-2 rounded-lg bg-orange-500 text-white px-8 py-4 text-sm font-semibold tracking-wider hover-scale hover-glow transition-all duration-300 shadow-sm"
          >
            RESERVE PASS
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
