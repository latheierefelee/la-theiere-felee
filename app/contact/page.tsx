"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Pour l'instant on fait juste un console.log
    console.log("Formulaire soumis :", formData);
    alert("Message envoyé ! (pour l'instant c'est une simulation)");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-blanc-casse">
      <Header />

      <main>
        <section className="border-b border-gris-fonce/10 bg-kraft/5 py-16">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="mb-4 font-serif text-5xl font-light text-noir-anthracite">
              Contactez-nous
            </h1>
            <p className="mx-auto max-w-2xl font-sans text-base text-gris-fonce">
              Une question ? Une suggestion ? N'hésitez pas à nous écrire.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-6 font-serif text-2xl font-semibold text-noir-anthracite">
                  Informations
                </h2>
                <div className="space-y-4 font-sans text-sm text-gris-fonce">
                  <div>
                    <h3 className="font-semibold text-noir-anthracite">Email</h3>
                    <p>contact@latheierfelee.fr</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-noir-anthracite">Téléphone</h3>
                    <p>+33 1 23 45 67 89</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-noir-anthracite">Horaires</h3>
                    <p>Lundi - Vendredi : 9h - 18h</p>
                    <p>Samedi : 10h - 17h</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-noir-anthracite">Réseaux sociaux</h3>
                    <p>@latheierfelee</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="mb-6 font-serif text-2xl font-semibold text-noir-anthracite">
                  Formulaire de contact
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block font-sans text-sm font-semibold text-noir-anthracite"
                    >
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-gris-fonce/20 bg-blanc-casse px-4 py-3 font-sans text-sm text-noir-anthracite focus:border-kraft focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block font-sans text-sm font-semibold text-noir-anthracite"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-gris-fonce/20 bg-blanc-casse px-4 py-3 font-sans text-sm text-noir-anthracite focus:border-kraft focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block font-sans text-sm font-semibold text-noir-anthracite"
                    >
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full border border-gris-fonce/20 bg-blanc-casse px-4 py-3 font-sans text-sm text-noir-anthracite focus:border-kraft focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block font-sans text-sm font-semibold text-noir-anthracite"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full border border-gris-fonce/20 bg-blanc-casse px-4 py-3 font-sans text-sm text-noir-anthracite focus:border-kraft focus:outline-none"
                    />
                  </div>

                  <Button type="submit" variant="primary" className="w-full">
                    Envoyer
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}