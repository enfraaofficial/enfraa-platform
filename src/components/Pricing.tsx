"use client";

import { useState } from "react";
import { Check, Info } from "lucide-react";
import { motion } from "framer-motion";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Starter",
      desc: "Perfect for early stage startups setting up initial pipelines.",
      price: billingCycle === "monthly" ? 29 : 23,
      features: [
        "Up to 250 active invoices / month",
        "Automated email follow-ups",
        "1 corporate card sync",
        "Standard financial reporting",
        "Support via slack & email (24h SLA)",
      ],
      isRecommended: false,
      cta: "Start Free Trial"
    },
    {
      name: "Growth",
      desc: "For growing companies managing multi-currency global billing.",
      price: billingCycle === "monthly" ? 79 : 63,
      features: [
        "Unlimited invoices / clients",
        "Smart auto-debit & retry logic",
        "Up to 5 corporate card syncs",
        "AI Cash Flow Forecasts (Beta)",
        "Visual workflow automation (3 integrations)",
        "Priority Slack support (2h SLA)",
      ],
      isRecommended: true,
      cta: "Get Started Now"
    },
    {
      name: "Enterprise",
      desc: "For established businesses looking for custom integrations.",
      price: "Custom",
      features: [
        "Unlimited everything",
        "White-labeled client billing portals",
        "Dedicated accounting CRM sync (custom scripts)",
        "Full AI Finance Insights suite",
        "Visual workflow automation (unlimited)",
        "Dedicated Account Manager (24/7 SLA)",
      ],
      isRecommended: false,
      cta: "Contact Enterprise Sales"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-dark-deep relative z-20">
      <div className="glow-overlay w-[500px] h-[500px] bg-primary-600/5 top-[10%] left-[10%] blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-primary-400">TRANSPARENT VALUE</span>
          <h2 className="font-headings text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-6">
            Simple, Transparent Pricing Plans
          </h2>
          <p className="text-neutral-text font-light text-base">
            Choose the plan that fits your current operational scale. Upgrade or downgrade at any time.
          </p>

          {/* Toggle Billing Cycle */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className={`text-sm ${billingCycle === "monthly" ? "text-white font-semibold" : "text-neutral-text"}`}>Monthly</span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
              className="w-14 h-8 rounded-full bg-white/5 border border-white/10 p-1 transition-colors relative flex items-center"
              aria-label="Toggle billing cycle"
            >
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-6 h-6 rounded-full bg-primary-400 shadow-md"
                style={{
                  marginLeft: billingCycle === "monthly" ? "0" : "auto",
                }}
              />
            </button>
            <span className={`text-sm flex items-center gap-1.5 ${billingCycle === "yearly" ? "text-white font-semibold" : "text-neutral-text"}`}>
              Yearly 
              <span className="px-2 py-0.5 text-[10px] bg-accent-green/20 text-accent-green font-bold rounded-full border border-accent-green/30">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.isRecommended
                  ? "glass-card border-primary-400/40 shadow-[0_0_40px_rgba(91,63,212,0.2)] bg-dark-card/60"
                  : "glass-card bg-dark-bg/40"
              }`}
            >
              {plan.isRecommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-primary-600 to-accent-purple text-white text-[10px] font-bold tracking-widest uppercase">
                  Most Popular
                </span>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="font-headings text-xl font-bold text-white">{plan.name}</h3>
                  <p className="text-neutral-text text-sm font-light mt-2 leading-relaxed">{plan.desc}</p>
                </div>

                <div className="flex items-baseline gap-1 py-4 border-y border-white/5">
                  {typeof plan.price === "number" ? (
                    <>
                      <span className="text-4xl font-extrabold font-headings text-white">${plan.price}</span>
                      <span className="text-neutral-text text-sm">/ month</span>
                    </>
                  ) : (
                    <span className="text-3xl font-extrabold font-headings text-white">{plan.price}</span>
                  )}
                  {typeof plan.price === "number" && billingCycle === "yearly" && (
                    <span className="text-[10px] text-accent-green block font-medium ml-2">Billed annually</span>
                  )}
                </div>

                {/* Features List */}
                <ul className="space-y-3.5">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-neutral-light">
                      <Check size={16} className="text-primary-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call To Action Button */}
              <div className="mt-8">
                {plan.isRecommended ? (
                  <a
                    href="#contact"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-primary-600 to-accent-purple text-white text-center font-bold block shadow-[0_0_20px_rgba(91,63,212,0.3)] hover:shadow-[0_0_30px_rgba(91,63,212,0.5)] hover:scale-[1.02] transition-all duration-300"
                  >
                    {plan.cta}
                  </a>
                ) : (
                  <a
                    href="#contact"
                    className="w-full py-4 rounded-xl glass-panel hover:bg-white/5 border border-white/10 text-white text-center font-bold block hover:scale-[1.02] transition-all duration-300"
                  >
                    {plan.cta}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ footer notice */}
        <p className="text-center text-xs text-neutral-text mt-12 flex items-center justify-center gap-1.5">
          <Info size={14} className="text-primary-400" />
          <span>Need custom ledger syncs, enterprise SLAs, or regional multi-currency support? <a href="#contact" className="text-white hover:text-primary-400 font-medium underline">Speak with sales</a></span>
        </p>
      </div>
    </section>
  );
}
