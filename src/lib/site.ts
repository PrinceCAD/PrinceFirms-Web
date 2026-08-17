/**
 * Single source of truth for anything that appears in both the UI and the
 * metadata/sitemap/robots routes. Change it here, not in the components.
 */
export const site = {
  name: "PrinceFirms",
  tagline: "Your neighbourhood, open for business.",
  description:
    "PrinceFirms is a hyperlocal marketplace that ranks every shop, listing and " +
    "delivery by how close it is to you — with verified businesses, direct chat " +
    "and a logistics network built for local trade.",
  // Override per environment (e.g. a Vercel preview) with NEXT_PUBLIC_SITE_URL.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://princefirms.com",
  locale: "en",
} as const;

export const nav = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#businesses", label: "For businesses" },
  { href: "#logistics", label: "Logistics" },
] as const;
