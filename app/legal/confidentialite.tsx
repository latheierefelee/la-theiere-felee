import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function ConfidentialitePage() {
  return (
    <div className="min-h-screen bg-blanc-casse">
      <Header />

      <main className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 font-serif text-4xl font-light text-noir-anthracite">
            Politique de Confidentialité
          </h1>

          <div className="space-y-8 font-sans text-sm leading-relaxed text-gris-fonce">
            <section>
              <h2 className="mb-4 font-serif text-2xl font-semibold text-noir-anthracite">
                1. Introduction
              </h2>
              <p>
                La Théière Fêlée accorde une grande importance à la protection de vos données 
                personnelles. Cette politique de confidentialité vous informe sur la manière dont 
                nous collectons, utilisons et protégeons vos données conformément au Règlement 
                Général sur la Protection des Données (RGPD).
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-semibold text-noir-anthracite">
                2. Données collectées
              </h2>
              <p>
                Nous collectons les données suivantes lorsque vous passez commande :
              </p>
              <ul className="mt-4 space-y-2 ml-6">
                <li>• Nom et prénom</li>
                <li>• Adresse email</li>
                <li>• Numéro de téléphone</li>
                <li>• Adresse de livraison</li>
                <li>• Informations de paiement (traitées de manière sécurisée par notre prestataire)</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-semibold text-noir-anthracite">
                3. Utilisation des données
              </h2>
              <p>
                Vos données personnelles sont utilisées uniquement pour :
              </p>
              <ul className="mt-4 space-y-2 ml-6">
                <li>• Traiter et livrer vos commandes</li>
                <li>• Vous envoyer des confirmations de commande</li>
                <li>• Gérer le service client</li>
                <li>• Vous envoyer notre newsletter (avec votre consentement)</li>
                <li>• Améliorer nos services</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-semibold text-noir-anthracite">
                4. Conservation des données
              </h2>
              <p>
                Vos données personnelles sont conservées pendant la durée nécessaire à 
                l'accomplissement des finalités mentionnées ci-dessus :
              </p>
              <ul className="mt-4 space-y-2 ml-6">
                <li>• Données de commande : 10 ans (obligations comptables et fiscales)</li>
                <li>• Données de compte client : jusqu'à suppression de votre compte</li>
                <li>• Données newsletter : jusqu'à votre désinscription</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-semibold text-noir-anthracite">
                5. Partage des données
              </h2>
              <p>
                Vos données ne sont jamais vendues à des tiers. Elles peuvent être partagées 
                uniquement avec :
              </p>
              <ul className="mt-4 space-y-2 ml-6">
                <li>• Notre prestataire de paiement (Stripe) pour le traitement sécurisé des paiements</li>
                <li>• Notre transporteur pour la livraison de vos commandes</li>
                <li>• Notre service d'emailing (avec votre consentement)</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-semibold text-noir-anthracite">
                6. Vos droits
              </h2>
              <p>
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="mt-4 space-y-2 ml-6">
                <li>• <strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
                <li>• <strong>Droit de rectification :</strong> corriger vos données inexactes</li>
                <li>• <strong>Droit à l'effacement :</strong> supprimer vos données</li>
                <li>• <strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                <li>• <strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
                <li>• <strong>Droit de limitation :</strong> limiter le traitement de vos données</li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, contactez-nous à : <strong>contact@latheierfelee.fr</strong>
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-semibold text-noir-anthracite">
                7. Cookies
              </h2>
              <p>
                Notre site utilise uniquement des cookies techniques nécessaires au fonctionnement 
                du panier d'achat. Ces cookies sont stockés localement dans votre navigateur et ne 
                contiennent aucune information personnelle identifiable.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-semibold text-noir-anthracite">
                8. Sécurité
              </h2>
              <p>
                Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées 
                pour protéger vos données contre tout accès non autorisé, modification, divulgation 
                ou destruction. Les paiements sont traités via une plateforme sécurisée conforme aux 
                normes PCI-DSS.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-semibold text-noir-anthracite">
                9. Mineurs
              </h2>
              <p>
                Notre site ne s'adresse pas aux personnes de moins de 16 ans. Nous ne collectons 
                pas sciemment de données personnelles de mineurs.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-semibold text-noir-anthracite">
                10. Modifications
              </h2>
              <p>
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout 
                moment. Toute modification sera publiée sur cette page avec une nouvelle date de 
                mise à jour.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-semibold text-noir-anthracite">
                11. Contact
              </h2>
              <p>
                Pour toute question concernant cette politique de confidentialité ou l'utilisation 
                de vos données personnelles, contactez-nous :
              </p>
              <p className="mt-4">
                <strong>Email :</strong> contact@latheierfelee.fr
                <br />
                <strong>Adresse :</strong> [À compléter]
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