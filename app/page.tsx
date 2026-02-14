import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  const featuredProducts = [
    {
      name: "NYMPHÉAS",
      slug: "nympheas",
      price: 18.5,
      image: "/images/products/nympheas.jpg",
      description:
        "Thé vert délicat aux notes florales, inspiré des jardins de Giverny.",
    },
    {
      name: "LES ROSES",
      slug: "les-roses",
      price: 17.0,
      image: "/images/products/les-roses.jpg",
      description:
        "Thé noir parfumé aux pétales de roses et bergamote.",
    },
    {
      name: "DANS LES BLÉS",
      slug: "dans-les-bles",
      price: 16.5,
      image: "/images/products/dans-les-bles.jpg",
      description:
        "Infusion douce aux céréales et miel, évoquant les champs dorés.",
    },
  ];

  return (
    <div className="min-h-screen bg-blanc-casse">
      <Header />

      <main>
        <section className="relative">
          <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
            <Image
              src="/images/products/nympheas.jpg"
              alt="Collection Impressionniste"
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blanc-casse/70 via-blanc-casse/50 to-blanc-casse" />

            <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
              <h2 className="mb-6 font-serif text-4xl font-light leading-tight text-noir-anthracite sm:text-5xl md:text-6xl lg:text-7xl">
                L'Art qui s'infuse
              </h2>
              <p className="mb-8 max-w-2xl font-sans text-base leading-relaxed text-gris-fonce sm:text-lg">
                Découvrez notre collection de thés d'exception, où chaque tasse
                est un voyage dans l'univers des maîtres impressionnistes.
              </p>
              <Button variant="primary">Découvrir nos thés</Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="section-title mb-4">Nos Créations</h2>
              <div className="mx-auto h-px w-24 bg-kraft" />
            </div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
              {featuredProducts.map((product) => (
                <ProductCard key={product.slug} {...product} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-b border-gris-fonce/10 bg-kraft/5 py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="section-title mb-8">Notre Philosophie</h2>

            <div className="space-y-6 font-sans text-base leading-relaxed text-gris-fonce">
              <p>
                <span className="font-cursive text-3xl text-noir-anthracite">
                  La Théière Fêlée
                </span>{" "}
                propose une collection de thés d'exception inspirée par l'art
                impressionniste. Chaque mélange est une invitation à un voyage
                sensoriel et artistique.
              </p>

              <p>
                Nous sélectionnons avec soin des thés d'exception, que nous
                assemblons dans le respect des savoir-faire ancestraux.
              </p>
            </div>

            <div className="mt-12">
              <Button variant="secondary">
                <Link href="/about">Découvrir notre histoire</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}