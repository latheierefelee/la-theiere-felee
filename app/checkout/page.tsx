'use client'

import { useState, useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'
import { useCart } from '@/lib/contexts/CartContext'
import Link from 'next/link'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string)

// ─── Formulaire de paiement ───────────────────────────────────────────────────
interface DeliveryInfo {
  firstName: string
  lastName: string
  email: string
  address: string
  city: string
  postal: string
}

function CheckoutForm({ deliveryInfo }: { deliveryInfo: DeliveryInfo }) {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!stripe || !elements) return

    setLoading(true)
    setError('')

    const { error: stripeError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/checkout/success`,
        payment_method_data: {
          billing_details: {
            name: `${deliveryInfo.firstName} ${deliveryInfo.lastName}`,
            email: deliveryInfo.email,
            address: {
              line1: deliveryInfo.address,
              city: deliveryInfo.city,
              postal_code: deliveryInfo.postal,
              country: 'FR',
            },
          },
        },
      },
    })

    if (stripeError) {
      setError(stripeError.message || 'Une erreur est survenue.')
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement options={{ layout: 'tabs' }} />

      {error && (
        <p className="text-sm text-red-600 border border-red-200 p-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-[#2C2C2C] text-white py-4 font-sans text-sm tracking-widest uppercase hover:bg-[#3A3A3A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Traitement en cours...' : 'Confirmer & Payer'}
      </button>
    </form>
  )
}

// ─── Page principale ──────────────────────────────────────────────────────────
export default function CheckoutPage() {
  const { cart, clearCart } = useCart()

  const [clientSecret, setClientSecret] = useState('')
  const [step, setStep] = useState<'delivery' | 'payment'>('delivery')
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo>({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    postal: '',
  })
  const [deliveryError, setDeliveryError] = useState('')

  useEffect(() => {
    if (cart.items.length === 0) return

    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: cart.total,
        items: cart.items.map((i) => ({
          name: i.product.name,
          quantity: i.quantity,
        })),
      }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((err) => console.error('Erreur payment intent:', err))
  }, [cart.total, cart.items])

  const handleDeliverySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { firstName, lastName, email, address, city, postal } = deliveryInfo
    if (!firstName || !lastName || !email || !address || !city || !postal) {
      setDeliveryError('Merci de remplir tous les champs.')
      return
    }
    setDeliveryError('')
    setStep('payment')
  }

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-[#F8F8F8] flex flex-col items-center justify-center gap-6">
        <p className="font-serif text-2xl text-[#2C2C2C]">Votre panier est vide</p>
        <Link
          href="/shop"
          className="text-sm font-sans tracking-widest uppercase underline underline-offset-4 text-[#2C2C2C]"
        >
          Découvrir la collection
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F8F8F8] py-16">
      <div className="max-w-5xl mx-auto px-6">

        {/* Titre */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl text-[#2C2C2C] uppercase tracking-widest mb-2">
            Finaliser la commande
          </h1>
          <div className="w-16 h-px bg-[#B89C7E] mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Colonne gauche */}
          <div className="space-y-8">

            {/* Étapes */}
            <div className="flex items-center gap-4 text-sm font-sans">
              <button
                onClick={() => setStep('delivery')}
                className={`tracking-widest uppercase transition-colors ${step === 'delivery'
                    ? 'text-[#2C2C2C] font-semibold'
                    : 'text-[#B89C7E]'
                  }`}
              >
                1. Livraison
              </button>
              <div className="w-8 h-px bg-[#B89C7E]" />
              <span
                className={`tracking-widest uppercase transition-colors ${step === 'payment'
                    ? 'text-[#2C2C2C] font-semibold'
                    : 'text-[#B89C7E]'
                  }`}
              >
                2. Paiement
              </span>
            </div>

            {/* Formulaire livraison */}
            {step === 'delivery' && (
              <form onSubmit={handleDeliverySubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans tracking-widest uppercase text-[#3A3A3A] mb-1">
                      Prénom
                    </label>
                    <input
                      type="text"
                      value={deliveryInfo.firstName}
                      onChange={(e) =>
                        setDeliveryInfo({ ...deliveryInfo, firstName: e.target.value })
                      }
                      className="w-full border border-[#2C2C2C] bg-white px-4 py-3 font-sans text-sm text-[#2C2C2C] focus:outline-none focus:border-[#B89C7E]"
                      placeholder="Marie"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-sans tracking-widest uppercase text-[#3A3A3A] mb-1">
                      Nom
                    </label>
                    <input
                      type="text"
                      value={deliveryInfo.lastName}
                      onChange={(e) =>
                        setDeliveryInfo({ ...deliveryInfo, lastName: e.target.value })
                      }
                      className="w-full border border-[#2C2C2C] bg-white px-4 py-3 font-sans text-sm text-[#2C2C2C] focus:outline-none focus:border-[#B89C7E]"
                      placeholder="Dupont"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-sans tracking-widest uppercase text-[#3A3A3A] mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={deliveryInfo.email}
                    onChange={(e) =>
                      setDeliveryInfo({ ...deliveryInfo, email: e.target.value })
                    }
                    className="w-full border border-[#2C2C2C] bg-white px-4 py-3 font-sans text-sm text-[#2C2C2C] focus:outline-none focus:border-[#B89C7E]"
                    placeholder="marie@exemple.fr"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans tracking-widest uppercase text-[#3A3A3A] mb-1">
                    Adresse
                  </label>
                  <input
                    type="text"
                    value={deliveryInfo.address}
                    onChange={(e) =>
                      setDeliveryInfo({ ...deliveryInfo, address: e.target.value })
                    }
                    className="w-full border border-[#2C2C2C] bg-white px-4 py-3 font-sans text-sm text-[#2C2C2C] focus:outline-none focus:border-[#B89C7E]"
                    placeholder="12 rue des Nymphéas"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans tracking-widest uppercase text-[#3A3A3A] mb-1">
                      Code postal
                    </label>
                    <input
                      type="text"
                      value={deliveryInfo.postal}
                      onChange={(e) =>
                        setDeliveryInfo({ ...deliveryInfo, postal: e.target.value })
                      }
                      className="w-full border border-[#2C2C2C] bg-white px-4 py-3 font-sans text-sm text-[#2C2C2C] focus:outline-none focus:border-[#B89C7E]"
                      placeholder="75001"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-sans tracking-widest uppercase text-[#3A3A3A] mb-1">
                      Ville
                    </label>
                    <input
                      type="text"
                      value={deliveryInfo.city}
                      onChange={(e) =>
                        setDeliveryInfo({ ...deliveryInfo, city: e.target.value })
                      }
                      className="w-full border border-[#2C2C2C] bg-white px-4 py-3 font-sans text-sm text-[#2C2C2C] focus:outline-none focus:border-[#B89C7E]"
                      placeholder="Paris"
                    />
                  </div>
                </div>

                {deliveryError && (
                  <p className="text-sm text-red-600">{deliveryError}</p>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#2C2C2C] text-white py-4 font-sans text-sm tracking-widest uppercase hover:bg-[#3A3A3A] transition-colors"
                >
                  Continuer vers le paiement →
                </button>
              </form>
            )}

            {/* Formulaire paiement Stripe */}
            {step === 'payment' && clientSecret && (
              <Elements
                stripe={stripePromise}
                options={{
                  clientSecret,
                  appearance: {
                    theme: 'stripe',
                    variables: {
                      colorPrimary: '#2C2C2C',
                      colorBackground: '#FFFFFF',
                      colorText: '#2C2C2C',
                      colorDanger: '#df1b41',
                      fontFamily: 'Lato, sans-serif',
                      borderRadius: '0px',
                    },
                  },
                }}
              >
                <CheckoutForm deliveryInfo={deliveryInfo} />
              </Elements>
            )}

            {step === 'payment' && !clientSecret && (
              <div className="flex items-center justify-center py-12">
                <p className="font-sans text-sm text-[#B89C7E] tracking-widest">
                  Initialisation du paiement...
                </p>
              </div>
            )}
          </div>

          {/* Colonne droite — Récapitulatif */}
          <div className="bg-white border border-[#2C2C2C] p-8 h-fit">
            <h2 className="font-serif text-xl text-[#2C2C2C] uppercase tracking-widest mb-6">
              Récapitulatif
            </h2>

            <div className="space-y-4 mb-6">
              {cart.items.map((item) => (
                <div key={item.productId} className="flex justify-between items-start">
                  <div>
                    <p className="font-serif text-sm text-[#2C2C2C] uppercase tracking-wider">
                      {item.product.name}
                    </p>
                    <p className="font-sans text-xs text-[#B89C7E] mt-0.5">
                      Qté : {item.quantity}
                    </p>
                  </div>
                  <span className="font-sans text-sm text-[#2C2C2C]">
                    {(item.product.price * item.quantity).toFixed(2)} €
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-[#B89C7E] pt-4 space-y-2">
              <div className="flex justify-between font-sans text-sm text-[#3A3A3A]">
                <span>Sous-total</span>
                <span>{cart.subtotal.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between font-sans text-sm text-[#3A3A3A]">
                <span>Livraison</span>
                <span>
                  {cart.shipping === 0 ? (
                    <span className="text-[#B89C7E]">Offerte</span>
                  ) : (
                    `${cart.shipping.toFixed(2)} €`
                  )}
                </span>
              </div>
              <div className="flex justify-between font-serif text-lg text-[#2C2C2C] pt-2 border-t border-[#2C2C2C]">
                <span>Total</span>
                <span>{cart.total.toFixed(2)} €</span>
              </div>
            </div>

            {cart.shipping > 0 && (
              <p className="font-sans text-xs text-[#B89C7E] mt-4 text-center">
                Plus que {(50 - cart.subtotal).toFixed(2)} € pour la livraison offerte
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}