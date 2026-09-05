import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { amount, receipt = `commit_${Date.now()}` } = await request.json().catch(() => ({}))
  if (!Number.isInteger(amount) || amount <= 0) return NextResponse.json({ error: 'Amount must be a positive integer in paise.' }, { status: 400 })
  const keyId = process.env.RAZORPAY_KEY_ID
  const keySecret = process.env.RAZORPAY_KEY_SECRET
  if (!keyId || !keySecret) return NextResponse.json({ demo: true, keyId: keyId ?? 'rzp_test_demo', order: { id: `order_demo_${Date.now()}`, amount, currency: 'INR', receipt } })
  const auth = Buffer.from(`${keyId}:${keySecret}`).toString('base64')
  const response = await fetch('https://api.razorpay.com/v1/orders', { method: 'POST', headers: { Authorization: `Basic ${auth}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ amount, currency: 'INR', receipt, notes: { source: 'commit' } }) })
  const data = await response.json()
  if (!response.ok) return NextResponse.json({ error: data.error?.description ?? 'Razorpay order creation failed.' }, { status: response.status })
  return NextResponse.json({ demo: false, keyId, order: data })
}
