"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/lib/contexts/CartContext";
import { formatPrice } from "@/lib/utils";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

export default function CartPage() {
  const { cart, updateQuantity, removeItem } = useCart();

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-blanc-casse">
        <Header />
        <main className="py-16">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <ShoppingBag className="mx-auto h-16 w-16 text-gris-fonce/30" />
            <h1 className="mt-6 mb-4 font-serif text-3xl text-noir-anthracite">
              Votre panier est vide
            </h1>
            <p className="mb-8 font-sans text-gris-fonce">
              Découvrez notre collection de thés d'exception
            </p>
            <Link href="/shop">
              <Button variant="primary">Découvrir nos thés</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blanc-casse">
      <Header />

      <main className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 font-serif text-4xl font-light text-noir-anthracite">
            Panier
          </h1>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cart.items.map((item) => (
                  <div
                    key={item.productId}
                    className="flex gap-4 border border-gris-fonce/10 bg-creme p-4"
                  >
                    <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h3 className="font-serif text-lg font-semibold text-noir-anthracite">
                          {item.product.name}
                        </h3>
                        <p className="mt-1 font-sans text-sm text-gris-fonce">
                          {formatPrice(item.product.price)}
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.productId, item.quantity - 1)
                            }
                            className="flex h-8 w-8 items-center justify-center border border-gris-fonce/20 hover:bg-kraft/10"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center font-sans text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.productId, item.quantity + 1)
                            }
                            className="flex h-8 w-8 items-center justify-center border border-gris-fonce/20 hover:bg-kraft/10"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.productId)}
                          className="ml-auto text-gris-fonce hover:text-kraft"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>

                    <div className="font-serif text-lg font-semibold text-noir-anthracite">
                      {formatPrice(item.product.price * item.quantity)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="border border-gris-fonce/10 bg-creme p-6">
                <h2 className="mb-6 font-serif text-2xl font-semibold text-noir-anthracite">
                  Résumé
                </h2>

                <div className="space-y-4 border-b border-gris-fonce/10 pb-4">
                  <div className="flex justify-between font-sans text-sm">
                    <span className="text-gris-fonce">Sous-total</span>
                    <span className="text-noir-anthracite">
                      {formatPrice(cart.subtotal)}
                    </span>
                  </div>
                  <div className="flex justify-between font-sans text-sm">
                    <span className="text-gris-fonce">Livraison</span>
                    <span className="text-noir-anthracite">
                      {cart.shipping === 0 ? "Gratuite" : formatPrice(cart.shipping)}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex justify-between font-serif text-xl font-semibold">
                  <span className="text-noir-anthracite">Total</span>
                  <span className="text-noir-anthracite">
                    {formatPrice(cart.total)}
                  </span>
                </div>

                {cart.subtotal < 50 && (
                  <p className="mt-4 font-sans text-xs text-gris-fonce">
                    Livraison gratuite à partir de 50€
                  </p>
                )}

                <Link href="/checkout">
                  <Button variant="primary" className="w-full">
                    Passer commande
                  </Button>
                </Link>

                <Link href="/shop" className="mt-4 block text-center">
                  <Button variant="secondary" className="w-full">
                    Continuer mes achats
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}