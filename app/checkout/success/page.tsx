'use client'

import { useEffect } from 'react'
import { useCart } from '@/lib/contexts/CartContext'
import Link from 'next/link'

export default function SuccessPage() {
    const { clearCart } = useCart()

    useEffect(() => {
        clearCart()
    }, [])

    return (
        <div className="min-h-screen bg-[#F8F8F8] flex flex-col items-center justify-center gap-8 px-6">
            <div className="text-center max-w-md">
                <p className="font-cursive text-6xl text-[#B89C7E] mb-4">Merci</p>
                <h1 className="font-serif text-2xl text-[#2C2C2C] uppercase tracking-widest mb-4">
                    Commande confirmée
                </h1>
                <div className="w-16 h-px bg-[#B89C7E] mx-auto mb-6" />
                <p className="font-sans text-sm text-[#3A3A3A] leading-relaxed">
                    Votre commande a bien été reçue. Vous recevrez bientôt un email de confirmation avec les détails de votre livraison.
                </p>
            </div>

            <Link
                href="/shop"
                className="font-sans text-sm tracking-widest uppercase border border-[#2C2C2C] px-8 py-4 hover:bg-[#2C2C2C] hover:text-white transition-colors"
            >
                Continuer mes achats
            </Link>
        </div>
    )
}