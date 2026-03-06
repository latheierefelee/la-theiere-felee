"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils";
import { ChevronLeft, Minus, Plus } from "lucide-react";
import { useCart } from "@/lib/contexts/CartContext";
import { useToast } from "@/lib/contexts/ToastContext";

const products = {
  "nympheas": {
    name: "NYMPHÉAS",
    price: 18.5,
    image: "/images/products/nympheas.jpg",
    description: "L’esprit de Giverny dans une fiole. Laissez-vous transporter au bord de l’étang de Claude Monet. Ce mélange exclusif, baptisé Nymphéas, célèbre la sérénité des jardins d'eau. Alliant la fraîcheur iodée des algues à la vivacité du citron vert, il offre une expérience "ambiance littorale" unique. Une infusion cristalline et apaisante, parfaite pour un moment de contemplation hors du temps.",
    ingredients: ["Thé vert Sencha", "Fleurs de jasmin", "Pétales de rose", "Arôme naturel de fleur de lotus"],
    brewing: {
      temperature: "75-80°C",
      duration: "2-3 minutes",
      quantity: "2g pour 200ml",
    },
  },
  "les-roses": {
    name: "LES ROSES",
    price: 17.0,
    image: "/images/products/les-roses.jpg",
    description: "Thé noir parfumé aux pétales de roses et bergamote, un hommage aux jardins impressionnistes. Un mélange élégant et romantique.",
    ingredients: ["Thé noir de Ceylan", "Pétales de rose", "Bergamote naturelle", "Boutons de rose"],
    brewing: {
      temperature: "95°C",
      duration: "3-4 minutes",
      quantity: "2.5g pour 200ml",
    },
  },
  "dans-les-bles": {
    name: "DANS LES BLÉS",
    price: 16.5,
    image: "/images/products/dans-les-bles.jpg",
    description: "Infusion douce aux céréales et miel, évoquant les champs dorés de l'été immortalisés par les peintres impressionnistes.",
    ingredients: ["Rooibos", "Flocons d'avoine", "Miel naturel", "Fleurs de camomille"],
    brewing: {
      temperature: "100°C",
      duration: "5-7 minutes",
      quantity: "3g pour 200ml",
    },
  },
};

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug as keyof typeof products];
  const { addItem } = useCart();
  const { showToast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  if (!product) {
    return <div>Produit non trouvé</div>;
  }

  const handleAddToCart = () => {
    setIsAdding(true);
    addItem({
      id: params.slug,
      name: product.name,
      slug: params.slug,
      description: product.description,
      shortDescription: product.description,
      price: product.price,
      compareAtPrice: undefined,
      images: [product.image],
      category: "Thés",
      stock: 100,
      featured: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, quantity);

    showToast(`${quantity} ${product.name} ajouté${quantity > 1 ? 's' : ''} au panier`);

    setTimeout(() => {
      setIsAdding(false);
      setQuantity(1);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-blanc-casse">
      <Header />

      <main className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/shop"
            className="mb-8 inline-flex items-center gap-2 font-sans text-sm text-gris-fonce hover:text-kraft transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Retour à la boutique
          </Link>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="relative aspect-square overflow-hidden bg-blanc-casse">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-col">
              <h1 className="mb-4 font-serif text-4xl font-semibold uppercase tracking-wider text-noir-anthracite">
                {product.name}
              </h1>

              <p className="mb-6 font-serif text-3xl text-noir-anthracite">
                {formatPrice(product.price)}
              </p>

              <p className="mb-8 font-sans text-base leading-relaxed text-gris-fonce">
                {product.description}
              </p>

              <div className="mb-8 border-t border-gris-fonce/10 pt-8">
                <h3 className="mb-4 font-serif text-lg font-semibold uppercase tracking-wider text-noir-anthracite">
                  Ingrédients
                </h3>
                <ul className="space-y-2">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index} className="font-sans text-sm text-gris-fonce">
                      • {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8 border-t border-gris-fonce/10 pt-8">
                <h3 className="mb-4 font-serif text-lg font-semibold uppercase tracking-wider text-noir-anthracite">
                  Préparation
                </h3>
                <div className="space-y-2 font-sans text-sm text-gris-fonce">
                  <p>Température : {product.brewing.temperature}</p>
                  <p>Durée d'infusion : {product.brewing.duration}</p>
                  <p>Quantité : {product.brewing.quantity}</p>
                </div>
              </div>

              <div className="mb-6">
                <label className="mb-2 block font-sans text-sm font-semibold text-noir-anthracite">
                  Quantité
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="flex h-10 w-10 items-center justify-center border border-gris-fonce/20 hover:bg-kraft/10 transition-colors"
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center font-sans text-lg font-semibold">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="flex h-10 w-10 items-center justify-center border border-gris-fonce/20 hover:bg-kraft/10 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <Button
                variant="primary"
                className="w-full"
                onClick={handleAddToCart}
                disabled={isAdding}
              >
                {isAdding ? "Ajouté ! ✓" : "Ajouter au panier"}
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}