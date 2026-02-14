import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/shop/ProductCard";

export default function ShopPage() {
  const products = [
    {
      name: "NYMPHÉAS",
      slug: "nympheas",
      price: 18.5,
      image: "/images/products/nympheas.jpg",
      description: "Thé vert délicat aux notes florales, inspiré des jardins de Giverny.",
    },
    {
      name: "LES ROSES",
      slug: "les-roses",
      price: 17.0,
      image: "/images/products/les-roses.jpg",
      description: "Thé noir parfumé aux pétales de roses et bergamote.",
    },
    {
      name: "DANS LES BLÉS",
      slug: "dans-les-bles",
      price: 16.5,
      image: "/images/products/dans-les-bles.jpg",
      description: "Infusion douce aux céréales et miel, évoquant les champs dorés.",
    },
  ];

  return (
    <div className="min-h-screen bg-blanc-casse">
      <Header />

      <main>
        <section className="border-b border-gris-fonce/10 bg-kraft/5 py-16">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="mb-4 font-serif text-5xl font-light text-noir-anthracite">
              Notre Collection
            </h1>
            <p className="mx-auto max-w-2xl font-sans text-base text-gris-fonce">
              Découvrez notre sélection de thés d'exception, inspirés par les plus beaux tableaux impressionnistes.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.slug} {...product} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}