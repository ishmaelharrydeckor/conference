import Link from "next/link";

export default function Footer() {
  const links = [
    { name: "Speakers", href: "#speakers" },
    { name: "Schedule", href: "#schedule" },
    { name: "Tickets", href: "#tickets" },
    { name: "Venue", href: "#venue" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="border-t border-zinc-200 bg-white py-12 font-sans text-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center gap-8">
        {/* Brand statement */}
        <p className="text-sm font-semibold tracking-wide text-foreground max-w-md uppercase">
          VECTORS 2026 — The intersection of frontend logic and interface design.
        </p>

        {/* Sitemap inline links */}
        <div className="flex justify-center gap-6 flex-wrap">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs text-foreground-muted hover:text-orange-500 transition-colors duration-200 font-mono font-bold tracking-wider"
            >
              {link.name.toUpperCase()}
            </Link>
          ))}
        </div>

        {/* Contact and Social details */}
        <div className="text-xs text-foreground-muted font-mono flex items-center justify-center gap-3 flex-wrap">
          <a href="mailto:hello@vectors2026.com" className="hover:text-orange-500 transition-colors">
            hello@vectors2026.com
          </a>
          <span>·</span>
          <a
            href="https://www.linkedin.com/in/ishmaelharrydeckor"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a
            href="https://github.com/ishmaelharrydeckor"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors"
          >
            GitHub
          </a>
        </div>

        {/* Copyright */}
        <p className="text-[10px] text-zinc-400 font-mono">
          © 2026 VECTORS
        </p>
      </div>
    </footer>
  );
}
