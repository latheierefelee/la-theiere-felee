import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-06-20',
})

export async function POST(req: NextRequest) {
    try {
        const { amount, items } = await req.json()

        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(amount * 100), // centimes
            currency: 'eur',
            metadata: {
                items: JSON.stringify(items),
            },
        })

        return NextResponse.json({ clientSecret: paymentIntent.client_secret })
    } catch (error) {
        console.error('Stripe error:', error)
        return NextResponse.json(
            { error: 'Erreur lors de la création du paiement' },
            { status: 500 }
        )
    }
}