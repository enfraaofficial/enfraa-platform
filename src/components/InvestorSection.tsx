"use client";

import { motion } from "framer-motion";
import { Sparkles, Trophy, TrendingUp, Compass } from "lucide-react";

export default function InvestorSection() {
  const metrics = [
    {
      label: "Showcase Event",
      value: "Kerala Startup Carnival 2026",
      desc: "Selected as one of the premier fintech startups driving local and global innovation.",
      icon: <Trophy className="text-investor-gold" size={20} />
    },
    {
      label: "Year-Over-Year Growth",
      value: "450% YoY",
      desc: "Exceptional adoption rates across regional hubs and international clients alike.",
      icon: <TrendingUp className="text-investor-gold" size={20} />
    },
    {
      label: "Global Compliance",
      value: "40+ Countries",
      desc: "Fully integrated localized tax ledgers, invoicing structures, and cross-border APIs.",
      icon: <Compass className="text-investor-gold" size={20} />
    }
  ];

  return (
    <section className="py-24 bg-dark-deep relative z-20 overflow-hidden">
      {/* Golden Glow background overlay */}
      <div className="glow-overlay w-[400px] h-[400px] bg-investor-gold/5 top-[20%] right-[10%] blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Vision & Pitch */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-investor-gold/10 border border-investor-gold/20 text-investor-gold text-xs font-semibold tracking-wide">
              <Sparkles size={14} />
              <span>Investor Spotlight</span>
            </div>

            <h2 className="font-headings text-4xl sm:text-5xl font-extrabold text-gradient-gold leading-tight">
              Built in Kerala.<br />Scaling globally.
            </h2>

            <p className="text-neutral-text text-base sm:text-lg font-light leading-relaxed max-w-xl">
              From our roots in the high-growth technological hubs of Kerala to modern businesses scaling across borders. EnFraa is engineering the next generation of automated billing, financial ledgers, and cash flow infrastructure.
            </p>

            <blockquote className="border-l-2 border-investor-gold pl-6 py-2 italic text-neutral-light text-sm bg-investor-gold/5 pr-4 rounded-r-lg max-w-lg">
              “EnFraa represents the next wave of fintech innovation from India. By automating the entire billing lifecycle, they help startups save thousands in legal, operational, and development overheads.”
              <cite className="block not-italic font-bold text-xs text-investor-gold mt-2">— Kerala Startup Carnival Committee 2026</cite>
            </blockquote>
          </div>

          {/* Right Column: Investor Metrics / Mock Deck */}
          <div className="lg:col-span-5 space-y-6">
            {metrics.map((metric, idx) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card-gold p-5 rounded-2xl flex gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-investor-gold/10 border border-investor-gold/20 flex items-center justify-center shrink-0">
                  {metric.icon}
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-investor-gold uppercase font-bold tracking-widest block">{metric.label}</span>
                  <h4 className="text-lg font-bold font-headings text-white">{metric.value}</h4>
                  <p className="text-neutral-text text-xs font-light leading-relaxed">{metric.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
