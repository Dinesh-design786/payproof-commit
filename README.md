# COMMIT — AI Memory for Money

> **From Promise → Payment → Proof**

COMMIT is an AI-powered financial memory layer that connects **what was promised, what was paid, what happened, and the evidence behind it**.

## 🚨 The Problem

Financial commitments usually start outside payment systems.

A conversation might say:

> “I'll pay ₹20,000 after the final delivery.”

Later, the order, payment, invoice, fulfilment, and evidence may exist in completely different places.

So a simple question becomes difficult:

**Why did this payment happen, what was promised, was the condition fulfilled, and what evidence supports it?**

COMMIT solves this **context gap between financial intent and financial reality**.

---

## 💡 How COMMIT Works

```text
Conversation
     ↓
AI Promise Extraction
     ↓
Commitment
     ↓
Condition
     ↓
Razorpay Order
     ↓
Payment
     ↓
Transaction Twin
     ↓
Evidence
     ↓
Investigation
     ↓
Outcome

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

✨ Core Features
🧠 AI Promise Extraction

Extracts structured financial commitments from unstructured conversations and documents.

"I'll pay ₹20,000 after delivery."

        ↓

Person      → Priya Sharma
Amount      → ₹20,000
Condition   → Final delivery
Confidence  → 94%
🔗 PromiseGraph

An interactive relationship graph connecting:

Person
  ↓
Promise
  ↓
Commitment
  ↓
Condition
  ↓
Order
  ↓
Payment
  ↓
Evidence
  ↓
Outcome

Every node represents an actual object and every edge represents a meaningful relationship.

⚖️ Transaction Twin

Compares:

WHAT WAS PROMISED
        VS
WHAT ACTUALLY HAPPENED

Example:

Promised: ₹20,000 after delivery
Paid:     ₹20,000 captured
Evidence: Delivery proof missing

Result: PARTIAL MATCH
🔍 Evidence Intelligence

Connects invoices, payment records, conversations, fulfilment proof, and other evidence to commitments and transactions.

Detects:

Missing evidence
Supporting evidence
Contradictory evidence
Evidence gaps
🚨 Conflict Detection

Identifies inconsistencies such as:

Original commitment → ₹20,000
Updated commitment  → ₹15,000
Actual payment      → ₹20,000
🕒 Commitment History

Preserves how a commitment changes over time instead of silently overwriting the original agreement.

📨 Commit Inbox

Surfaces:

New promises
Changed commitments
Payment conflicts
Evidence gaps
Items requiring review
🕵️ Investigations

Turns unexplained events into structured investigations containing:

Question
   ↓
Timeline
   ↓
Evidence
   ↓
AI Findings
   ↓
Human Decision

AI findings are separated into:

Observed · Likely · Unknown

💬 Ask Commit

Ask questions using natural language:

Why did this ₹20,000 payment happen?

Which commitments are overdue?

Which payments have missing evidence?

What happened with Priya Sharma?

Which commitments changed after payment?

Answers link back to the underlying COMMIT records.

👤 Customer Memory

Instead of acting like a traditional CRM, COMMIT builds a financial memory of each customer:

Customer
 ├── Commitments
 ├── Payments
 ├── Evidence
 ├── Investigations
 └── Timeline
🛡️ Agent Guard — Future Layer

Designed to eventually evaluate AI-initiated payments against existing commitments and authorization policies.

Allowed
Needs Approval
Blocked
Unknown
💳 Razorpay Integration

Razorpay provides the payment reality.

COMMIT provides the context around that payment.

COMMITMENT
     ↓
RAZORPAY ORDER
     ↓
RAZORPAY PAYMENT
     ↓
TRANSACTION
     ↓
TRANSACTION TWIN
     ↓
EVIDENCE

The project uses Razorpay Test Mode for development and demonstration.

Integration includes:

Test order creation
Test payment flow
Server-side payment verification
Webhook processing
Payment event tracking
Transaction linking
Commitment linking
PromiseGraph updates

Secrets are kept server-side using environment variables.

🏗️ Architecture
┌───────────────────────────────────────────┐
│                 COMMIT UI                 │
│        Next.js + React + TypeScript       │
└─────────────────────┬─────────────────────┘
                      │
                      ▼
┌───────────────────────────────────────────┐
│            APPLICATION LAYER              │
│ Routes · State · Validation · Actions     │
└──────────────┬───────────┬────────────────┘
               │           │
       ┌───────▼────┐ ┌────▼─────────┐
       │ AI ENGINE  │ │ INTEGRATIONS │
       │            │ │              │
       │ Extraction │ │  Razorpay    │
       │ Analysis   │ │  Webhooks    │
       │ Conflicts  │ │  Payments    │
       └──────┬─────┘ └──────┬───────┘
              │              │
              └──────┬───────┘
                     ▼
          ┌──────────────────────┐
          │   FINANCIAL MEMORY   │
          │                      │
          │ Promise              │
          │ Commitment           │
          │ Condition            │
          │ Order                │
          │ Payment              │
          │ Evidence             │
          │ Investigation        │
          │ Outcome              │
          └──────────────────────┘
🔄 End-to-End Workflow
┌───────────────┐
│ Conversation  │
└───────┬───────┘
        ↓
┌───────────────┐
│ AI extracts   │
│ the promise   │
└───────┬───────┘
        ↓
┌───────────────┐
│ Commitment    │
│ CM-1024       │
│ ₹20,000       │
└───────┬───────┘
        ↓
┌───────────────┐
│ Razorpay      │
│ Test Order    │
└───────┬───────┘
        ↓
┌───────────────┐
│ Payment       │
│ ₹20,000       │
│ Captured      │
└───────┬───────┘
        ↓
┌───────────────┐
│ Transaction   │
│ Twin          │
└───────┬───────┘
        ↓
┌───────────────┐
│ Evidence      │
│ checked       │
└───────┬───────┘
        ↓
┌───────────────┐
│ Gap / Conflict│
│ detected      │
└───────┬───────┘
        ↓
┌───────────────┐
│ Investigation │
└───────┬───────┘
        ↓
┌───────────────┐
│ Ask Commit    │
│ explanation   │
└───────────────┘
🧩 Domain Model
Person
  │
  └── makes → Promise
                 │
                 ▼
             Commitment
              │      │
              │      └── requires → Condition
              │
              └── creates → Order
                               │
                               ▼
                            Payment
                               │
                               ▼
                          Transaction
                               │
                         supported by
                               ▼
                            Evidence
                               │
                     ┌─────────┴─────────┐
                     ▼                   ▼
                  Supports          Contradicts
                     │                   │
                     └─────────┬─────────┘
                               ▼
                          Commitment

Investigation
 ├── examines → Commitment
 ├── examines → Transaction
 └── uses → Evidence
🛠️ Tech Stack
Layer	Technology
Framework	Next.js
Frontend	React
Language	TypeScript
Styling	Tailwind CSS
AI	Configurable AI provider
Payments	Razorpay
Deployment	Vercel
API	Next.js Route Handlers
Visualization	Interactive graph
State	Shared application state
📁 Project Structure
commit/
├── app/
│   ├── overview/
│   ├── inbox/
│   ├── commitments/
│   │   └── [id]/
│   ├── promise-graph/
│   ├── transactions/
│   │   └── [id]/
│   ├── evidence/
│   ├── investigations/
│   │   └── [id]/
│   ├── customers/
│   │   └── [id]/
│   ├── ask/
│   ├── reports/
│   ├── policies/
│   ├── integrations/
│   ├── settings/
│   └── api/
│       ├── razorpay/
│       ├── webhooks/
│       └── ai/
│
├── components/
│   ├── commitments/
│   ├── promise-graph/
│   ├── transactions/
│   ├── evidence/
│   ├── investigations/
│   └── ai/
│
├── lib/
│   ├── ai/
│   ├── razorpay/
│   ├── memory/
│   └── validation/
│
├── types/
├── public/
├── .env.example
├── package.json
└── README.md
🔐 Environment Variables
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
RAZORPAY_WEBHOOK_SECRET=

NEXT_PUBLIC_RAZORPAY_KEY_ID=

AI_API_KEY=
AI_MODEL=

DATABASE_URL=
NEXT_PUBLIC_APP_URL=

Never commit .env or .env.local.

Never expose:

RAZORPAY_KEY_SECRET
RAZORPAY_WEBHOOK_SECRET
AI_API_KEY
🔌 API
Razorpay
POST /api/razorpay/create-order
POST /api/razorpay/verify-payment
POST /api/webhooks/razorpay
AI
POST /api/ai/extract-promise
POST /api/ai/explain-payment
POST /api/ai/detect-conflict
POST /api/ai/detect-evidence-gap
POST /api/ai/ask-commit
🎯 Demo Scenario

A synthetic customer:

Priya Sharma

makes a commitment:

“I'll pay ₹20,000 after final delivery.”

COMMIT extracts the promise and creates:

CM-1024
₹20,000
After final delivery

A Razorpay Test Mode order is created.

Payment:

PAY-204
₹20,000
Captured

Transaction Twin determines:

Amount matches ✓
Payment captured ✓
Delivery evidence missing !

COMMIT creates an investigation and lets the user ask:

“Why did this ₹20,000 payment happen?”

The answer traces back to the original commitment and shows the available evidence.

🧠 Responsible AI

COMMIT is designed to be evidence-grounded.

The system should never:

Invent payments
Invent evidence
Invent commitments
Present assumptions as facts
Treat missing evidence as proof that something did not happen
Make unsupported legal or fraud conclusions

AI outputs are separated into:

OBSERVED
What the system knows.

LIKELY
What the evidence suggests.

UNKNOWN
What cannot currently be verified.
🎨 Product Philosophy

COMMIT is intentionally not designed as another generic fintech dashboard.

Its interface combines:

Financial Data
      +
Relationship Graphs
      +
Evidence
      +
AI Reasoning
      +
Investigation UX

The core interfaces are:

PromiseGraph — how financial objects are connected.

Transaction Twin — promise vs reality.

Evidence Graph — what supports or contradicts the financial story.

Investigation View — why something needs attention.

Ask Commit — query the financial memory.

🚀 Roadmap
Current MVP
AI promise extraction
Commitment management
PromiseGraph
Transaction Twin
Evidence management
Conflict detection
Evidence-gap detection
Investigations
Ask Commit
Customer Memory
Razorpay Test Mode
Payment verification
Webhooks
Future
Email ingestion
Document ingestion
Multi-payment-provider support
Accounting integrations
Team collaboration
Approval workflows
Organization-level financial memory
AI Agent Guard
Agent authorization policies
🧪 Development
git clone <repository-url>
cd commit
npm install

Create environment variables:

cp .env.example .env.local

Run:

npm run dev

Open:

http://localhost:3000
🏆 The Core Idea

Traditional payment systems tell you:

WHERE did the money move?

COMMIT asks:

WHY did the money move?

And then connects:

WHAT WAS PROMISED?
        ↓
WHAT WAS PAID?
        ↓
WHAT ACTUALLY HAPPENED?
        ↓
WHAT EVIDENCE SUPPORTS IT?
        ↓
WHAT IS STILL UNKNOWN?
COMMIT
AI MEMORY FOR MONEY

From Promise → Payment → Proof.

