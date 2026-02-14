import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-blanc-casse">
      <Header />

      <main className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 font-serif text-4xl font-light text-noir-anthracite">
            Mentions Légales
          </h1>

          <div className="space-y-8 font-sans text-sm leading-relaxed text-gris-fonce">
            <section>
              <h2 className="mb-4 font-serif text-2xl font-semibold text-noir-anthracite">
                Éditeur du site
              </h2>
              <p>
                <strong>Raison sociale :</strong> La Théière Fêlée
                <br />
                <strong>Forme juridique :</strong> [À compléter - ex: Micro-entreprise, SARL, etc.]
                <br />
                <strong>Capital social :</strong> [À compléter si applicable]
                <br />
                <strong>SIRET :</strong> [À compléter]
                <br />
                <strong>Adresse :</strong> [À compléter]
                <br />
                <strong>Email :</strong> contact@latheierfelee.fr
                <br />
                <strong>Téléphone :</strong> [À compléter]
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-semibold text-noir-anthracite">
                Directeur de publication
              </h2>
              <p>
                [Nom du directeur de publication - généralement le gérant ou le président]
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-semibold text-noir-anthracite">
                Hébergement
              </h2>
              <p>
                <strong>Hébergeur :</strong> Vercel Inc.
                <br />
                <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA
                <br />
                <strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-kraft hover:underline">vercel.com</a>
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-semibold text-noir-anthracite">
                Propriété intellectuelle
              </h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est la 
                propriété exclusive de La Théière Fêlée, sauf mention contraire. Toute reproduction, 
                distribution, modification, adaptation, retransmission ou publication de ces 
                différents éléments est strictement interdite sans l'accord écrit de La Théière Fêlée.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-semibold text-noir-anthracite">
                Données personnelles
              </h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi 
                Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de 
                suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p className="mt-4">
                Pour exercer ces droits, vous pouvez nous contacter à l'adresse : 
                contact@latheierfelee.fr
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-semibold text-noir-anthracite">
                Cookies
              </h2>
              <p>
                Ce site utilise des cookies techniques nécessaires au bon fonctionnement du panier 
                d'achat. Ces cookies ne collectent aucune donnée personnelle et sont stockés 
                localement dans votre navigateur.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-semibold text-noir-anthracite">
                Crédits
              </h2>
              <p>
                <strong>Conception et développement :</strong> [À compléter]
                <br />
                <strong>Photographies :</strong> Collections impressionnistes du domaine public
              </p>
            </section>

            <p className="mt-12 text-xs">
              Dernière mise à jour : Février 2026
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}