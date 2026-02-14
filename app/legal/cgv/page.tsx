import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function CGVPage() {
  return (
    <div className="min-h-screen bg-blanc-casse">
      <Header />

      <main className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 font-serif text-4xl font-light text-noir-anthracite">
            Conditions Générales de Vente
          </h1>

          <div className="space-y-8 font-sans text-sm leading-relaxed text-gris-fonce">
            <section>
              <h2 className="mb-4 font-serif text-2xl font-semibold text-noir-anthracite">
                Article 1 - Objet
              </h2>
              <p>
                Les présentes conditions générales de vente s'appliquent à toutes les commandes 
                passées sur le site La Théière Fêlée. En passant commande, le client reconnaît 
                avoir pris connaissance et accepté les présentes conditions générales de vente.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-semibold text-noir-anthracite">
                Article 2 - Produits
              </h2>
              <p>
                Les produits proposés sont ceux qui figurent sur le site La Théière Fêlée. 
                Ces produits sont proposés dans la limite des stocks disponibles. Les photographies 
                illustrant les produits n'entrent pas dans le champ contractuel.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-semibold text-noir-anthracite">
                Article 3 - Prix
              </h2>
              <p>
                Les prix sont indiqués en euros TTC. La Théière Fêlée se réserve le droit de 
                modifier ses prix à tout moment, étant toutefois entendu que le prix figurant au 
                catalogue le jour de la commande sera le seul applicable à l'acheteur.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-semibold text-noir-anthracite">
                Article 4 - Commande
              </h2>
              <p>
                Les commandes sont passées en ligne via le formulaire disponible sur le site. 
                Toute commande vaut acceptation des prix et descriptions des produits disponibles 
                à la vente. La vente ne sera considérée comme définitive qu'après l'envoi au client 
                de la confirmation de l'acceptation de la commande par La Théière Fêlée.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-semibold text-noir-anthracite">
                Article 5 - Paiement
              </h2>
              <p>
                Le paiement s'effectue par carte bancaire via notre plateforme de paiement sécurisée. 
                Le débit de la carte est effectué au moment de la validation de la commande.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-semibold text-noir-anthracite">
                Article 6 - Livraison
              </h2>
              <p>
                Les produits sont livrés à l'adresse indiquée par le client lors de la commande. 
                Les délais de livraison sont de 3 à 5 jours ouvrés pour la France métropolitaine. 
                La livraison est gratuite à partir de 50€ d'achat.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-semibold text-noir-anthracite">
                Article 7 - Droit de rétractation
              </h2>
              <p>
                Conformément à l'article L.121-20 du Code de la consommation, vous disposez d'un 
                délai de 14 jours à compter de la réception de vos produits pour exercer votre 
                droit de rétractation sans avoir à justifier de motifs ni à payer de pénalité.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-semibold text-noir-anthracite">
                Article 8 - Responsabilité
              </h2>
              <p>
                La Théière Fêlée ne peut être tenue responsable de l'inexécution du contrat conclu 
                en cas de rupture de stock, indisponibilité du produit, ou force majeure.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-semibold text-noir-anthracite">
                Article 9 - Données personnelles
              </h2>
              <p>
                Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de 
                suppression des données vous concernant. Pour exercer ce droit, contactez-nous à 
                contact@latheierfelee.fr
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-semibold text-noir-anthracite">
                Article 10 - Litiges
              </h2>
              <p>
                Les présentes conditions générales sont soumises au droit français. En cas de litige, 
                les tribunaux français seront seuls compétents.
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