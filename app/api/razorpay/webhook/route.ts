import { NextResponse } from 'next/server'
import crypto from 'node:crypto'

export async function POST(request: Request) {
  const raw = await request.text()
  const signature = request.headers.get('x-razorpay-signature') ?? ''
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET
  if (secret) {
    const expected = crypto.createHmac('sha256', secret).update(raw).digest('hex')
    if (!signature || !crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature))) return NextResponse.json({ error: 'Invalid signature.' }, { status: 401 })
  }
  const payload = JSON.parse(raw || '{}')
  console.log('[v0] Razorpay webhook received:', payload.event ?? 'unknown')
  return NextResponse.json({ received: true })
}
