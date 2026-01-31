# Prefracta AI (Launch Intelligence Platform)

**Prefracta AI** is a **B2B SaaS launch-intelligence platform** that helps engineering teams, startups, and organizations determine **whether a software product is truly ready for production launch**.

It orchestrates **multiple real-world system signals** — load, browser behavior, infrastructure stress, and cost impact — and uses **AI orchestration** to convert them into a **single, precise launch verdict**.

> **One question. One answer.**
> *“Is this product safe to launch — yes or no?”*

---

## 🚀 What Problem It Solves

Most software products fail **not because of missing features**, but because of:

* Unknown scalability limits
* Latency spikes under real traffic
* Hidden frontend performance & accessibility issues
* Unexpected infrastructure cost explosions

Traditional tools analyze **parts** of the system.
Prefracta AI evaluates the **entire launch surface**.

---

## 🧠 How Prefracta AI Works (High-Level)

1. User connects a **GitHub repository** (read-only)
2. Repository is mirrored in a **temporary cloud environment**
3. **Load tests** simulate real user traffic (k6)
4. **Real-browser audits** run via Playwright
5. System, frontend, and cost metrics are collected
6. **AI Orchestration Layer** correlates all signals
7. Temporary infrastructure is **fully destroyed**
8. User receives a **clear launch-readiness verdict**

---

## 🤖 AI Orchestration (Core Differentiator)

Prefracta AI does **not** run a single AI model.

It performs **AI orchestration**, where multiple independent signals are combined:

* Backend stress & failure thresholds
* Frontend real-user experience metrics
* Accessibility & SEO compliance
* Cost amplification under load
* System collapse points

The AI layer **correlates these inputs** and produces:

* A **precise readiness verdict**
* Failure explanations in plain language
* Actionable risk breakdowns

> This is **decision intelligence**, not a chatbot.

---

## 📊 Metrics Generated

* Latency (p50 / p95 / p99)
* Error & failure rate
* Maximum sustainable concurrent users
* Browser performance scores (Playwright)
* Accessibility & best-practice audits
* Estimated infrastructure cost impact
* Overall **Launch Readiness Score**

---

## 🔐 Security & Privacy by Design

* ✅ Read-only GitHub access
* ❌ No AI access to source code
* ❌ No static code scanning
* 🧨 Temporary cloud environment (auto-destroyed)
* 🔒 Zero source-code retention

---

## 💼 B2B SaaS Model (Freemium)

Prefracta AI follows a **freemium B2B SaaS model**:

### Free Tier

* Limited audits
* Core launch metrics
* Ideal for individual developers & early testing

### Paid Plans

* Full audit depth
* Higher load limits
* Advanced AI explanations
* Team & organization usage

> Billing infrastructure is implemented in **test mode** for development and validation.

---

## 🛠 Technology Stack

* **Frontend:** React, Chart.js
* **Backend:** Node.js
* **Database:** MongoDB
* **Load Testing:** k6
* **Browser Audits:** Playwright
* **Cloud:** Azure (temporary workspace)
* **AI Layer:** Agentic AI (Orchestration-based)
* **Payments:** Razorpay (Test Mode)
* **Deployment:** Vercel (Frontend)

---

## 🧩 Project Status

* Core architecture: ✅
* Dashboard & analytics: ✅
* GitHub OAuth integration: ✅
* Load testing engine (k6): ✅
* Browser audits (Playwright): ✅
* AI orchestration logic: ✅
* Full automation engine: 🚧 (manual orchestration at present)

---

## 📌 Vision

Prefracta AI aims to become the **standard pre-launch validation layer** for modern software systems — helping teams detect **real-world failure risks before real users do**.

---

## 📄 License

This project is shared for **educational, research, and demonstration purposes**.

