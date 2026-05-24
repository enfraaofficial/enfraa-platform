"use client";

import { motion } from "framer-motion";

export default function Trust() {
  const logos = [
    {
      name: "Quantum",
      svg: (
        <svg className="h-6 text-neutral-text group-hover:text-white transition-colors duration-300 fill-current" viewBox="0 0 120 30">
          <path d="M15,5 L25,15 L15,25 L5,15 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="15" cy="15" r="3" />
          <text x="35" y="21" fontFamily="var(--font-headings)" fontWeight="bold" fontSize="15" letterSpacing="1">QUANTUM</text>
        </svg>
      ),
    },
    {
      name: "Apex",
      svg: (
        <svg className="h-6 text-neutral-text group-hover:text-white transition-colors duration-300 fill-current" viewBox="0 0 100 30">
          <path d="M5,25 L15,5 L25,25" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11,17 L19,17" fill="none" stroke="currentColor" strokeWidth="2" />
          <text x="35" y="21" fontFamily="var(--font-headings)" fontWeight="bold" fontSize="16" letterSpacing="1">APEX</text>
        </svg>
      ),
    },
    {
      name: "Bolt",
      svg: (
        <svg className="h-6 text-neutral-text group-hover:text-white transition-colors duration-300 fill-current" viewBox="0 0 100 30">
          <path d="M12,4 L6,16 L13,16 L9,26 L17,12 L10,12 Z" />
          <text x="28" y="21" fontFamily="var(--font-headings)" fontWeight="bold" fontSize="18" letterSpacing="1">BOLT</text>
        </svg>
      ),
    },
    {
      name: "Vanta",
      svg: (
        <svg className="h-6 text-neutral-text group-hover:text-white transition-colors duration-300 fill-current" viewBox="0 0 110 30">
          <rect x="5" y="5" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M5,15 L25,15" stroke="currentColor" strokeWidth="1.5" />
          <path d="M15,5 L15,25" stroke="currentColor" strokeWidth="1.5" />
          <text x="35" y="21" fontFamily="var(--font-headings)" fontWeight="bold" fontSize="16" letterSpacing="1.5">VANTA</text>
        </svg>
      ),
    },
    {
      name: "Retool",
      svg: (
        <svg className="h-6 text-neutral-text group-hover:text-white transition-colors duration-300 fill-current" viewBox="0 0 110 30">
          <path d="M5,5 L20,5 L25,10 L25,25 L5,25 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M10,12 L20,12 M10,18 L20,18" stroke="currentColor" strokeWidth="2" />
          <text x="35" y="21" fontFamily="var(--font-headings)" fontWeight="bold" fontSize="15" letterSpacing="1">RETOOL</text>
        </svg>
      ),
    },
    {
      name: "Linear",
      svg: (
        <svg className="h-6 text-neutral-text group-hover:text-white transition-colors duration-300 fill-current" viewBox="0 0 110 30">
          <circle cx="15" cy="15" r="10" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M15,5 L15,15 L25,15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <text x="35" y="21" fontFamily="var(--font-headings)" fontWeight="bold" fontSize="16" letterSpacing="1">LINEAR</text>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-dark-deep/40 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs uppercase tracking-widest text-neutral-text font-semibold mb-8">
          {"TRUSTED BY THE WORLD'S MOST INNOVATIVE TEAMS"}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer flex items-center justify-center h-12"
            >
              {logo.svg}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
