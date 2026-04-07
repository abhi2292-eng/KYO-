<div align="center">

# KYO

**Break it down. Build it up.**

A habit and goal tracking app powered by AI — KYO takes your goals and breaks them into achievable, day-by-day steps so you actually follow through.

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![n8n](https://img.shields.io/badge/n8n-EA4B71?style=for-the-badge&logo=n8n&logoColor=white)

</div>

---

## What is KYO?

Most goal trackers just let you log goals. KYO goes further — it uses AI to decompose your goals into focused, achievable steps and surfaces the right task at the right time. Pair that with a daily habit tracker and streak system, and you have a tool that actually helps you build momentum.

---

## Features

- **AI Goal Breakdown** — Set a goal, AI splits it into a clear step-by-step action plan
- **Daily Focus** — Every day KYO surfaces your single most important next step
- **Habit Tracker** — Track daily habits with streaks and completion history
- **Goal Progress** — Visual progress tracking across all active goals
- **User Authentication** — Secure login and registration via Supabase Auth
- **Real-time Sync** — Data synced live across sessions using Supabase

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React Native + Expo |
| Backend / Database | Supabase (PostgreSQL + Auth + Realtime) |
| Automation | n8n (WhatsApp/SMS notifications via Twilio) |
| AI Integration | Gemini API |

---

## Screens

> Screenshots coming soon

| Login | Register | Home |
|---|---|---|
| ![login](#assets/image_2026-04-07_214712744.png) | ![register](#) | ![home](#) |

---

## Getting Started

### Prerequisites

- Node.js v18+
- Expo CLI
- A Supabase project ([create one here](https://supabase.com))

### Installation

```bash
# Clone the repo
git clone https://github.com/abhi2292-eng/KYO-
cd KYO-

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Fill in your Supabase URL and anon key in .env

# Start the app
npx expo start
```

### Environment Variables

Create a `.env` file in the root with:

```
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## Project Structure

```
KYO/
├── app/
│   ├── (auth)/
│   │   ├── login.jsx
│   │   └── register.jsx
│   └── (tabs)/
│       └── index.jsx        # Homescreen
├── components/
├── lib/
│   └── supabase.js          # Supabase client
├── assets/
├── .env.example
└── app.json
```

> Structure may vary based on your actual file organization — update this to match.

---

## Roadmap

- [x] User authentication (login + register)
- [x] Homescreen UI
- [x] Supabase integration
- [ ] AI goal breakdown (Gemini API)
- [ ] Habit tracker with streaks
- [ ] Push notifications via n8n + Twilio
- [ ] Onboarding flow
- [ ] Analytics dashboard

---

## Developer

**Abhijeet Singh**
Third-year CSE @ VIT-AP University

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white)](https://github.com/abhi2292-eng)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/)

---

<div align="center">
Built with focus. 🔥
</div>
