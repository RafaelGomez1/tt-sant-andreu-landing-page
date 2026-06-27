# TT Sant Andreu — Landing Page

Landing page for **TT Sant Andreu**, a table tennis club based in Sant Andreu (Barcelona). The site showcases the club's history, academy programmes, competition leagues, training schedules, membership options, and a contact form.

## ✨ Features

- **Multi-language** — Spanish, Catalan, and English (ES / CA / EN)
- **Responsive design** — built with Tailwind CSS
- **Image carousel** — gallery section
- **Contact form** — email delivery via [Web3Forms](https://web3forms.com)
- **Sections** — Hero, History, Academy, Competition, Schedule, Membership, Contact

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [React 18](https://react.dev) |
| Language | [TypeScript](https://www.typescriptlang.org) |
| Build tool | [Vite](https://vitejs.dev) |
| Styling | [Tailwind CSS](https://tailwindcss.com) |
| Icons | [Lucide React](https://lucide.dev) |
| Contact form | [Web3Forms](https://web3forms.com) |

## 📋 Prerequisites

- [Node.js](https://nodejs.org) (v18 or higher recommended)
- npm (comes with Node.js)

## 🚀 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/RafaelGomez1/tt-sant-andreu-landing-page.git
cd tt-sant-andreu-landing-page

# 2. Install dependencies
npm install

# 3. (Optional) Configure environment variables — see below
cp .env.example .env

# 4. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

## ⚙️ Environment Variables

Create a `.env` file in the project root (or set them in your hosting provider):

```env
VITE_WEB3FORMS_ACCESS_KEY=your-web3forms-access-key
```

> **Note:** If the access key is not set, the contact form will not be able to send emails. Get a free key at [web3forms.com](https://web3forms.com).

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with hot-reload |
| `npm run build` | Build for production (output in `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type-checking (no emit) |

## 📁 Project Structure

```
├── public/              # Static assets (favicon, images)
├── src/
│   ├── components/      # React components (Hero, Academy, Schedule, etc.)
│   ├── hooks/           # Custom React hooks
│   ├── i18n/            # Internationalisation (translations & language context)
│   ├── lib/             # Utilities
│   ├── App.tsx          # Root component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles / Tailwind directives
├── index.html           # HTML entry point
├── tailwind.config.js   # Tailwind configuration
├── vite.config.ts       # Vite configuration
└── tsconfig.json        # TypeScript configuration
```

## 📄 License

This project is private and not licensed for redistribution.
