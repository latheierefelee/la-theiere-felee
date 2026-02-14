"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/contexts/CartContext";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cart } = useCart();

  return (
    <header className="border-b border-gris-fonce/10 bg-creme">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo gauche */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white shadow-sm p-1 flex-shrink-0">
              <Image
                src="/images/logo.jpg"
                alt="La Théière Fêlée"
                fill
                className="object-contain rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="font-cursive text-xl text-noir-anthracite sm:text-2xl">
                La Théière Fêlée
              </h1>
              <p className="font-sans text-xs uppercase tracking-widest text-gris-fonce">
                Collection Impressionniste
              </p>
            </div>
          </Link>

          {/* Navigation centre - desktop */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
              <li>
                <Link href="/" className="font-sans text-sm text-noir-anthracite hover:text-kraft transition-colors">
                  ACCUEIL
                </Link>
              </li>
              <li>
                <Link href="/shop" className="font-sans text-sm text-noir-anthracite hover:text-kraft transition-colors">
                  NOS THÉS
                </Link>
              </li>
              <li>
                <Link href="/about" className="font-sans text-sm text-noir-anthracite hover:text-kraft transition-colors">
                  L'HISTOIRE
                </Link>
              </li>
              <li>
                <Link href="/contact" className="font-sans text-sm text-noir-anthracite hover:text-kraft transition-colors">
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>

          {/* Panier droite */}
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            <Link href="/cart" className="relative hover:opacity-70">
              <ShoppingCart className="h-5 w-5 text-noir-anthracite" />
              {cart.totalItems > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-kraft text-xs font-semibold text-creme">
                  {cart.totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Menu mobile */}
        {mobileMenuOpen && (
          <nav className="border-t border-gris-fonce/10 py-4 lg:hidden mt-4">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="block font-sans text-sm text-noir-anthracite hover:text-kraft transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ACCUEIL
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="block font-sans text-sm text-noir-anthracite hover:text-kraft transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  NOS THÉS
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block font-sans text-sm text-noir-anthracite hover:text-kraft transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  L'HISTOIRE
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block font-sans text-sm text-noir-anthracite hover:text-kraft transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}