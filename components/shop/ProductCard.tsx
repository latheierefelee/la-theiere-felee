"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/lib/contexts/CartContext";
import { useToast } from "@/lib/contexts/ToastContext";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  name: string;
  slug: string;
  price: number;
  image: string;
  description?: string;
}

export function ProductCard({
  name,
  slug,
  price,
  image,
  description,
}: ProductCardProps) {
  const { addItem } = useCart();
  const { showToast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem({
      id: slug,
      name: name,
      slug: slug,
      description: description || "",
      shortDescription: description,
      price: price,
      compareAtPrice: undefined,
      images: [image],
      category: "Thés",
      stock: 100,
      featured: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    
    showToast(`${name} ajouté au panier`);
  };

  return (
    <div className="group flex flex-col">
      <Link href={`/shop/${slug}`} className="flex flex-col flex-1">
        <div className="relative mb-6 aspect-square overflow-hidden bg-blanc-casse">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="text-center flex flex-col flex-1">
          <h3 className="product-title mb-2">{name}</h3>

          <p className="mb-4 font-sans text-sm leading-relaxed text-gris-fonce flex-1">
            {description}
          </p>

          <p className="mb-4 font-serif text-xl text-noir-anthracite">
            {formatPrice(price)}
          </p>

          <div className="flex gap-2">
            <Button variant="secondary" className="flex-1">
              Découvrir
            </Button>
            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center border border-kraft bg-kraft px-4 py-3 text-creme transition-all hover:bg-kraft/80"
              title="Ajouter au panier"
            >
              <ShoppingCart className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}