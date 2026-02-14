/**
 * Constantes de l'application La Théière Fêlée
 */

export const COMPANY = {
  name: "La Théière Fêlée",
  tagline: "Collection Impressionniste",
  description:
    "L'art qui s'infuse. Découvrez nos thés d'exception inspirés des grands maîtres impressionnistes.",
  email: "contact@latheierfelee.fr",
} as const;

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/latheierfelee",
  facebook: "https://facebook.com/latheierfelee",
  pinterest: "https://pinterest.com/latheierfelee",
} as const;

export const MAIN_NAV = [
  { name: "ACCUEIL", href: "/" },
  { name: "NOS THÉS", href: "/shop" },
  { name: "L'HISTOIRE", href: "/about" },
  { name: "BOUTIQUE", href: "/shop" },
  { name: "CONTACT", href: "/contact" },
] as const;