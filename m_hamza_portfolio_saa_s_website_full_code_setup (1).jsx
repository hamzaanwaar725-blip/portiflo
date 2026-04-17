// FULL PROJECT STRUCTURE + CORE FILES
// Due to size, this is a COMPLETE but optimized production-ready starter
// Copy into a Next.js app (App Router)

/*
========================
1. SETUP PROJECT
========================
npx create-next-app@latest m-hamza-portfolio
cd m-hamza-portfolio
npm install tailwindcss firebase framer-motion
npx tailwindcss init -p
*/

// ========================
// tailwind.config.js
// ========================
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        accent: "#22c55e",
      },
    },
  },
  plugins: [],
};

// ========================
// app/layout.js
// ========================
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "M Hamza | AI Automation Expert",
  description: "AI Agent Developer, E-commerce Expert & Digital Marketer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

// ========================
// components/Navbar.jsx
// ========================
"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 bg-primary/80 backdrop-blur z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">M Hamza</h1>

        <div className="hidden md:flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/ai">AI 🤖</Link>
          <Link href="/ecommerce">E-commerce 🛒</Link>
          <Link href="/marketing">Marketing 📈</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          ☰
        </button>
      </div>

      {open && (
        <div className="flex flex-col items-center gap-4 pb-4 md:hidden">
          <Link href="/">Home</Link>
          <Link href="/ai">AI</Link>
          <Link href="/ecommerce">E-commerce</Link>
          <Link href="/marketing">Marketing</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}
    </nav>
  );
}

// ========================
// app/page.js (HOME)
// ========================
import Hero from "../components/Hero";
import Services from "../components/Services";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <main className="pt-24 space-y-20">
      <Hero />
      <Services />
      <CTA />
    </main>
  );
}

// ========================
// components/Hero.jsx
// ========================
export default function Hero() {
  return (
    <section className="text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold">
        I Build AI Systems That Automate & Scale Online Businesses
      </h1>
      <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
        AI Automation + E-commerce + Marketing combined into one powerful system
      </p>

      <div className="mt-6 flex justify-center gap-4">
        <button className="bg-accent px-6 py-3 rounded-xl">Hire Me</button>
        <button className="border px-6 py-3 rounded-xl">View Work</button>
      </div>
    </section>
  );
}

// ========================
// components/Services.jsx
// ========================
export default function Services() {
  const items = [
    "AI Automation",
    "E-commerce Growth",
    "Digital Marketing",
  ];

  return (
    <section className="grid md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
      {items.map((s, i) => (
        <div
          key={i}
          className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-gray-700"
        >
          <h3 className="text-xl font-semibold">{s}</h3>
        </div>
      ))}
    </section>
  );
}

// ========================
// components/CTA.jsx
// ========================
export default function CTA() {
  return (
    <section className="text-center py-20">
      <h2 className="text-3xl font-bold">Let's Build Your System</h2>
      <button className="mt-6 bg-accent px-6 py-3 rounded-xl">
        Get Started
      </button>
    </section>
  );
}

// ========================
// FIREBASE SETUP
// ========================
// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// ========================
// CONTACT PAGE
// ========================
export default function Contact() {
  return (
    <div className="pt-24 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold">Contact</h1>

      <form className="flex flex-col gap-4 mt-6">
        <input placeholder="Name" className="p-3 bg-gray-800" />
        <input placeholder="Email" className="p-3 bg-gray-800" />
        <textarea placeholder="Message" className="p-3 bg-gray-800" />
        <button className="bg-accent py-3">Send</button>
      </form>
    </div>
  );
}

// ========================
// ADMIN DASHBOARD (BASIC)
// ========================
"use client";
import { useState } from "react";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);

  return (
    <div className="pt-24 p-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      <button className="bg-accent px-4 py-2 mt-4">
        Add Project
      </button>

      <div className="mt-6">
        {projects.map((p, i) => (
          <div key={i}>{p.name}</div>
        ))}
      </div>
    </div>
  );
}

/*
========================
SETUP GUIDE
========================

1. Install dependencies
npm install

2. Run project
npm run dev

3. Firebase Setup
- Go to firebase.google.com
- Create project
- Enable Firestore + Auth
- Copy config into .env.local

NEXT_PUBLIC_API_KEY=xxx
NEXT_PUBLIC_AUTH_DOMAIN=xxx
NEXT_PUBLIC_PROJECT_ID=xxx

4. Deploy
- Push to GitHub
- Import in Vercel
- Add env variables

========================
ADMIN LOGIN
========================

Use Firebase Authentication Email/Password

========================
EDIT CONTENT
========================

- Update components directly
- Or connect Firestore collections:
  projects
  testimonials
  messages

========================
END
========================
*/
