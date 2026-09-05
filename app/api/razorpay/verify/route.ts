import { NextResponse } from 'next/server'
import crypto from 'node:crypto'

export async function POST(request: Request) {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await request.json().catch(() => ({}))
  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) return NextResponse.json({ verified: false, error: 'Missing payment verification fields.' }, { status: 400 })
  const secret = process.env.RAZORPAY_KEY_SECRET
  if (!secret) return NextResponse.json({ verified: true, demo: true })
  const expected = crypto.createHmac('sha256', secret).update(`${razorpay_order_id}|${razorpay_payment_id}`).digest('hex')
  const verified = crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(razorpay_signature))
  return NextResponse.json({ verified, demo: false }, { status: verified ? 200 : 400 })
}
