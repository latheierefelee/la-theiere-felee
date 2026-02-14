import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-blanc-casse">
      <Header />

      <main>
        <section className="border-b border-gris-fonce/10 bg-kraft/5 py-16">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="mb-4 font-serif text-5xl font-light text-noir-anthracite">
              Notre Histoire
            </h1>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8 font-sans text-base leading-relaxed text-gris-fonce">
              <p className="text-center text-xl">
                <span className="font-cursive text-4xl text-noir-anthracite">
                  La Théière Fêlée
                </span>
              </p>

              <p>
                Comme une théière fêlée qui garde toute sa beauté malgré ses marques du temps, 
                notre maison célèbre l'imperfection avec tendresse. Chaque fêlure raconte une histoire, 
                chaque tasse partagée crée un souvenir.
              </p>

              <p>
                Notre collection est née d'une passion pour l'art impressionniste et les traditions 
                du thé. Inspirée par l'atmosphère des jardins de Giverny, les couleurs vibrantes 
                des toiles de Monet, et la douceur des après-midis passés à contempler la beauté 
                éphémère d'un instant.
              </p>

              <div className="my-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/images/products/nympheas.jpg"
                    alt="Collection"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/images/products/les-roses.jpg"
                    alt="Collection"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/images/products/dans-les-bles.jpg"
                    alt="Collection"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <h2 className="font-serif text-2xl font-semibold text-noir-anthracite">
                Notre Philosophie
              </h2>

              <p>
                Nous sélectionnons avec soin des thés d'exception, que nous assemblons dans le 
                respect des savoir-faire ancestraux. Chaque mélange est pensé pour créer une 
                expérience sensorielle unique, où la vue, l'odorat et le goût s'unissent pour 
                évoquer l'émotion d'une œuvre d'art.
              </p>

              <p>
                L'élégance, la délicatesse, la qualité et une touche d'originalité sont les 
                piliers de notre marque. Nous croyons que chaque moment passé à déguster un thé 
                est une invitation à ralentir, à savourer, à se reconnecter avec la beauté 
                simple des choses.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-noir-anthracite">
                Nos Engagements
              </h2>

              <ul className="space-y-3">
                <li>• Thés biologiques et issus du commerce équitable</li>
                <li>• Emballages compostables et respectueux de l'environnement</li>
                <li>• Production artisanale en petites quantités</li>
                <li>• Sélection rigoureuse des meilleurs jardins de thé</li>
              </ul>

              <p className="text-center italic">
                "L'art qui s'infuse, pour des moments suspendus dans le temps."
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}