export interface Speaker {
  id: string;
  name: string;
  title: string;
  company: string;
  topic: string;
  bio: string;
  imageUrl: string;
}

export const speakers: Speaker[] = [
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    title: "Principal Designer",
    company: "Linear",
    topic: "Crafting High-Agency Interfaces",
    bio: "Sarah leads interface design at Linear, focusing on speed, keyboard navigation, and cognitive efficiency in professional productivity tools.",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "marcus-graham",
    name: "Marcus Graham",
    title: "Staff UI Engineer",
    company: "Vercel",
    topic: "Next-Gen Rendering & Layout Systems",
    bio: "Marcus is a core contributor to modern web layouts, specializing in CSS grid mechanics, subgrid, and sub-millisecond paint loops.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    title: "Director of Product Design",
    company: "Stripe",
    topic: "The Psychology of Frictionless Flows",
    bio: "Elena oversees Stripe's checkout product designs, researching cognitive loads, trust signals, and micro-interactions globally.",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "devon-harris",
    name: "Devon Harris",
    title: "Core Web Performance Lead",
    company: "Google",
    topic: "Hardware-Accelerated Web Layouts",
    bio: "Devon researches browser compositing, GPU layer promotion, and how to maintain a locked 120Hz frame rate under heavy layout animations.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "hana-tanaka",
    name: "Hana Tanaka",
    title: "Founder",
    company: "Atmos Studio",
    topic: "Spatial Computing & Responsive 3D Canvas",
    bio: "Hana pioneers browser-based WebGL environments, exploring Three.js pipelines that scale gracefully across desktop and mobile VR headsets.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "julian-vance",
    name: "Julian Vance",
    title: "Head of Systems Design",
    company: "Figma",
    topic: "Architecting Multi-Brand Systems",
    bio: "Julian coordinates token translation structures, helping large scale organizations maintain cross-platform component libraries.",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "amara-dike",
    name: "Amara Dike",
    title: "Lead Frontend Architect",
    company: "Vaser",
    topic: "Brutalist Grids: Design Beyond Templates",
    bio: "Amara writes about CSS architecture, advocating for structural layout constraints, raw content styling, and asymmetric alignment.",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "lucas-moretti",
    name: "Lucas Moretti",
    title: "Product Designer",
    company: "OpenAI",
    topic: "Designing for Infinite Outputs",
    bio: "Lucas focuses on the conversational layout paradigm, creating interfaces that accommodate dynamic, non-deterministic model outcomes.",
    imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&h=400&q=80"
  }
];
