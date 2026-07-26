export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "Isn't $499 a significant investment for a two-day event?",
    answer: "It is, because we don't do fluff. Standard conferences spend their budgets on vanity items and generic panels. VECTORS invests directly in shipping actual code, systems-level architecture audits, and keyboard-first design workshops. If you implement just one optimization or token model from the event, the ticket pays for itself in week one."
  },
  {
    question: "I have a tight shipping deadline — is this worth taking two days off?",
    answer: "We know you're busy. That's why we don't require you to sit through long introduction slides. Every session is designed as a condensed, actionable masterclass with accompanying Git repos. Think of it as a 48-hour sprint that will save you months of trial-and-error layout and rendering debugging."
  },
  {
    question: "Is this event suited for junior profiles, or is it too advanced?",
    answer: "VECTORS targets senior and lead-level engineers and designers. We bypass basic HTML/CSS lectures and jump straight into GPU compositing, design tokens databases, and keyboard-first accessibility logic. If you are looking to step into a leadership role or build complex, production-scale products, this is exactly where you need to be."
  },
  {
    question: "Can I get my company to cover the registration cost?",
    answer: "Yes. Most attendees use their company's professional development or education budget. After ticket reservation, we provide a structured expense receipt template detailing the technical syllabus and business metrics covered, making manager approvals seamless."
  }
];
