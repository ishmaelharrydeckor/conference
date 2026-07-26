export interface TicketTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  isRecommended: boolean;
  ctaText: string;
}

export const ticketTiers: TicketTier[] = [
  {
    id: "standard",
    name: "Standard Pass",
    price: "$299",
    description: "Ideal for individual developers and designers looking to sharpen their skills.",
    features: [
      "Access to all talk sessions & panels",
      "Full access to the general exhibition hall",
      "Digital recordings of all keynotes post-event",
      "Official conference badge & welcome kit"
    ],
    isRecommended: false,
    ctaText: "GET STANDARD PASS"
  },
  {
    id: "pro",
    name: "Pro Pass",
    price: "$499",
    description: "Perfect for senior professionals and teams seeking deep-dive interactive experiences.",
    features: [
      "Everything in Standard Pass",
      "Guaranteed seat in active hands-on workshops",
      "Invites to the Day 1 networking dinner",
      "Exclusive VECTORS design system toolkit",
      "1-year access to resource archives"
    ],
    isRecommended: true,
    ctaText: "GET PRO PASS"
  },
  {
    id: "vip",
    name: "VIP Elite",
    price: "$899",
    description: "Designed for leaders, speakers, and executives looking for elite networking channels.",
    features: [
      "Everything in Pro Pass",
      "VVIP front-row seating across all halls",
      "Access to the private speaker lounge",
      "1-on-1 portfolio audit / architectural consult",
      "VECTORS premium windbreaker & custom swag",
      "Priority check-in and dedicated concierge"
    ],
    isRecommended: false,
    ctaText: "GET VIP PASS"
  }
];
