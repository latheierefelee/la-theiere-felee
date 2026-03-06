"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/lib/contexts/CartContext";
import { useToast } from "@/lib/contexts/ToastContext";
import { formatPrice } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const { showToast } = useToast();
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "France",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Commande passée :", formData);
    showToast("Commande passée avec succès ! Merci pour votre confiance ✨");
    clearCart();
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  if (cart.items.length === 0) {
    router.push("/cart");
    return null;
  }

  return (
    <div className="min-h-screen bg-blanc-casse">
      <Header />

      <main className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 font-serif text-4xl font-light text-noir-anthracite">
            Finaliser ma commande
          </h1>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border border-gris-fonce/10 bg-creme p-6">
                  <h2 className="mb-6 font-serif text-2xl font-semibold text-noir-anthracite">
                    Informations de livraison
                  </h2>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block font-sans text-sm font-semibold text-noir-anthracite">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full border border-gris-fonce/20 bg-blanc-casse px-4 py-3 font-sans text-sm focus:border-kraft focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block font-sans text-sm font-semibold text-noir-anthracite">
                        Nom *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full border border-gris-fonce/20 bg-blanc-casse px-4 py-3 font-sans text-sm focus:border-kraft focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block font-sans text-sm font-semibold text-noir-anthracite">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-gris-fonce/20 bg-blanc-casse px-4 py-3 font-sans text-sm focus:border-kraft focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block font-sans text-sm font-semibold text-noir-anthracite">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full border border-gris-fonce/20 bg-blanc-casse px-4 py-3 font-sans text-sm focus:border-kraft focus:outline-none"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="mb-2 block font-sans text-sm font-semibold text-noir-anthracite">
                        Adresse *
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full border border-gris-fonce/20 bg-blanc-casse px-4 py-3 font-sans text-sm focus:border-kraft focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block font-sans text-sm font-semibold text-noir-anthracite">
                        Ville *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full border border-gris-fonce/20 bg-blanc-casse px-4 py-3 font-sans text-sm focus:border-kraft focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block font-sans text-sm font-semibold text-noir-anthracite">
                        Code postal *
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        required
                        className="w-full border border-gris-fonce/20 bg-blanc-casse px-4 py-3 font-sans text-sm focus:border-kraft focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <Button type="submit" variant="primary" className="w-full">
                  Valider ma commande
                </Button>
              </form>
            </div>

            <div className="lg:col-span-1">
              <div className="border border-gris-fonce/10 bg-creme p-6">
                <h2 className="mb-6 font-serif text-2xl font-semibold text-noir-anthracite">
                  Résumé
                </h2>

                <div className="space-y-4">
                  {cart.items.map((item) => (
                    <div key={item.productId} className="flex justify-between text-sm">
                      <span className="font-sans text-gris-fonce">
                        {item.product.name} x {item.quantity}
                      </span>
                      <span className="font-sans text-noir-anthracite">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-4 border-t border-gris-fonce/10 pt-4">
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

                <div className="mt-4 flex justify-between border-t border-gris-fonce/10 pt-4 font-serif text-xl font-semibold">
                  <span className="text-noir-anthracite">Total</span>
                  <span className="text-noir-anthracite">
                    {formatPrice(cart.total)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}