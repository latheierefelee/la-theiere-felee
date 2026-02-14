import Link from "next/link";
import { Instagram, Facebook, PinIcon as Pinterest } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gris-fonce/10 bg-creme">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <h3 className="font-cursive text-2xl text-noir-anthracite">
              La Théière Fêlée
            </h3>
            <p className="mt-2 font-sans text-sm text-gris-fonce">
              Collection Impressionniste
            </p>
          </div>

          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-noir-anthracite">
              Boutique
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/shop"
                  className="font-sans text-sm text-gris-fonce transition-colors hover:text-kraft"
                >
                  Tous les thés
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-noir-anthracite">
              Informations
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/about"
                  className="font-sans text-sm text-gris-fonce transition-colors hover:text-kraft"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-sans text-sm text-gris-fonce transition-colors hover:text-kraft"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-noir-anthracite">
              Newsletter
            </h4>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full border border-gris-fonce/20 bg-blanc-casse px-4 py-2 font-sans text-sm"
              />
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gris-fonce/10 pt-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-6">
              <Instagram className="h-5 w-5 text-gris-fonce hover:text-kraft transition-colors cursor-pointer" />
              <Facebook className="h-5 w-5 text-gris-fonce hover:text-kraft transition-colors cursor-pointer" />
              <Pinterest className="h-5 w-5 text-gris-fonce hover:text-kraft transition-colors cursor-pointer" />
            </div>
            
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
              <p className="font-sans text-xs text-gris-fonce">
                © 2026 La Théière Fêlée
              </p>
              <div className="flex gap-4">
                <Link
                  href="/legal/mentions-legales"
                  className="font-sans text-xs text-gris-fonce transition-colors hover:text-kraft"
                >
                  Mentions légales
                </Link>
                <Link
                  href="/legal/cgv"
                  className="font-sans text-xs text-gris-fonce transition-colors hover:text-kraft"
                >
                  CGV
                </Link>
                <Link
                  href="/legal/confidentialite"
                  className="font-sans text-xs text-gris-fonce transition-colors hover:text-kraft"
                >
                  Confidentialité
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}