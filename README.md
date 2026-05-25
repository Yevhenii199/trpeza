# 🍽️ Trpeza Restaurant Website

![Project Status](https://img.shields.io/badge/Status-Active-success.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=flat&logo=vite&logoColor=FFD62E)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat&logo=supabase&logoColor=white)

Official website for the restaurant **Trpeza**, located in Sutomore, Montenegro. The project is a modern, fast, and responsive full-stack application focused on attracting guests, handling bookings, and showcasing the culinary selection.

🔗 **Live Demo:** [trpezasutomore.me](https://trpezasutomore.me)

---

## ✨ Key Features

- **Modern UI/UX:** Built with React, Tailwind CSS, and `shadcn/ui` components to deliver an elegant, premium, and fully responsive presentation.
- **Telegram Integration:** Automated notification system routing instant alerts for new table reservations and guest requests straight to a Telegram bot.
- **Streamlined Interactive Menu:** Designed for quick scanning—dish images are hidden within standard cards and seamlessly open via an interactive lightbox on text click.
- **Robust Full-Stack Foundation:** Powered by Vite for optimized build performance and Supabase for secure data management.

## 🛠 Tech Stack

- **Frontend:** React, TypeScript, Vite, Tailwind CSS, `shadcn/ui`.
- **Backend / Database:** Supabase (PostgreSQL, Auth, Edge Functions).
- **Package Manager:** Bun (supported by npm/yarn).
- **Testing:** Playwright (E2E), Vitest (Unit/Integration).
- **Deployment & Hosting:** Vercel, automatic CI/CD (via `vercel.json`).

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) (versions 18+).
- [Bun](https://bun.sh/) (recommended for quick dependency installation, but npm/pnpm can be used).
- [Supabase](https://supabase.com/) account for a local/remote database.

### Installation

1. **Clone the repository:**

```bash
git clone [https://github.com/Yevhenii199/trpeza.git](https://github.com/Yevhenii199/trpeza.git)
cd trpeza
```

2. **Install dependencies:**

```bash
npm install
```

3. **Configure environment variables:
   Copy the sample configuration file and fill it with your data (Supabase keys, Telegram bot tokens, GA4 ID):**

```bash
cp .env.example .env
```

4. **Start the development server:**

```bash
npm run dev
```

## 📁 Project structure

```bash
trpeza/
├── public/                 # Static assets (icons, favicons, fonts)
├── src/                    # Frontend application source code
│   ├── components/         # Reusable UI components (incl. shadcn)
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Page components (Routing)
│   ├── lib/                # Utilities, helpers, and library configuration
│   ├── services/           # API clients (Supabase, Telegram)
│   └── main.tsx            # Entry point to the React application
├── supabase/               # Configuration, migrations, and edge functions for Supabase
├── playwright.config.ts    # E2E test configuration
├── vitest.config.ts        # Unit test configuration
├── tailwind.config.ts      # Tailwind stylesheet configuration
└── vercel.json             # Deployment settings for Vercel
```

## 🔧 Available scripts

In the project directory, you can run the following commands:

bun run dev — Run the application in development mode with HMR.

bun run build — Build the application for production.

bun run preview — Local preview of the production build.

bun run lint — Run code linting (ESLint).

bun run test — Run unit tests via Vitest.

bun run test:e2e — Run end-to-end tests via Playwright.

## 🚢 Deployment

The project is configured for seamless deployment to Vercel.

Push to the main branch.

Vercel will automatically pick up the changes, run the build process (using the settings in vercel.json), and update the production version.

The domain is connected through a registrar (Porkbun), and SSL certificates are managed automatically by Vercel.

## 📄 License

This project is the private property of the Trpeza restaurant (Sutomore). Copying or distributing the source code without permission is prohibited!

Developed with ❤️ and user experience in mind for the Trpeza restaurant.
