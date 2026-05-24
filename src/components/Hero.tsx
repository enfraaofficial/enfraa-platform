"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, TrendingUp, CheckCircle, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-24 overflow-hidden flex items-center bg-mesh">
      {/* Glow Effects */}
      <div className="glow-overlay w-[500px] h-[500px] bg-primary-600/10 top-[10%] left-[-10%] blur-[120px]" />
      <div className="glow-overlay w-[600px] h-[600px] bg-accent-purple/10 bottom-[10%] right-[-10%] blur-[150px]" />
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-white/10 text-primary-200 text-xs font-semibold mb-6 tracking-wide"
          >
            <Sparkles size={14} className="text-primary-400" />
            <span>Introducing EnFraa 2.0</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-headings text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gradient-purple leading-[1.1] mb-6"
          >
            Smart Billing & Finance Platform for Modern Businesses
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-text text-lg sm:text-xl font-light mb-8 max-w-lg leading-relaxed"
          >
            Manage invoices, analytics, reports, workflows, and business finances in one powerful, futuristic platform built for hyper-growth.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 w-full sm:w-auto"
          >
            <a
              href="#contact"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary-600 to-accent-purple text-white font-semibold flex items-center gap-2 hover:shadow-[0_0_30px_rgba(91,63,212,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Start Free
              <ArrowRight size={18} />
            </a>
            
            <a
              href="#dashboard"
              className="px-8 py-4 rounded-lg glass-panel hover:bg-white/5 border border-white/10 text-white font-semibold flex items-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Play size={18} className="fill-white text-white" />
              Watch Demo
            </a>
          </motion.div>

          {/* Trust Metric Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-white/5 w-full grid grid-cols-3 gap-6"
          >
            <div>
              <p className="text-3xl font-extrabold font-headings text-white">99.9%</p>
              <p className="text-xs text-neutral-text mt-1">Uptime SLA</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold font-headings text-white">10x</p>
              <p className="text-xs text-neutral-text mt-1">Billing Speed</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold font-headings text-white">256-bit</p>
              <p className="text-xs text-neutral-text mt-1">AES Encryption</p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Layered 3D Dashboard Mockups */}
        <div className="lg:col-span-6 relative h-[500px] w-full flex items-center justify-center">
          {/* Main Dashboard Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute w-[90%] md:w-[450px] aspect-[1.3] glass-card rounded-2xl p-5 z-20 shadow-2xl border border-white/10"
            style={{
              transform: "perspective(1000px) rotateX(12deg) rotateY(-12deg) rotateZ(3deg)",
            }}
          >
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
              <div>
                <span className="text-[10px] text-neutral-text uppercase tracking-widest font-semibold">Total Revenue</span>
                <h4 className="text-2xl font-bold font-headings text-white mt-1">$142,480.00</h4>
              </div>
              <div className="flex items-center gap-1 text-accent-green bg-accent-green/10 px-2 py-0.5 rounded-full text-xs font-semibold">
                <TrendingUp size={12} />
                <span>+24.8%</span>
              </div>
            </div>

            {/* Custom SVG Line Chart */}
            <div className="h-32 w-full relative">
              <svg className="w-full h-full" viewBox="0 0 400 120">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7B5CF5" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#7B5CF5" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,100 Q40,60 80,80 T160,40 T240,70 T320,30 T400,10"
                  fill="none"
                  stroke="#7B5CF5"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <path
                  d="M0,100 Q40,60 80,80 T160,40 T240,70 T320,30 T400,10 L400,120 L0,120 Z"
                  fill="url(#chartGradient)"
                />
                {/* Data Points */}
                <circle cx="160" cy="40" r="4" fill="#FFFFFF" stroke="#7B5CF5" strokeWidth="2" />
                <circle cx="320" cy="30" r="4" fill="#FFFFFF" stroke="#7B5CF5" strokeWidth="2" />
              </svg>
            </div>

            {/* Invoices Mini List */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-white/5 border border-white/5">
                <span className="text-white font-medium">Acme Corp</span>
                <span className="text-neutral-text font-mono">#INV-2041</span>
                <span className="font-semibold text-white">$4,250.00</span>
                <span className="px-2 py-0.5 rounded-full bg-accent-green/20 text-accent-green text-[9px] font-bold">Paid</span>
              </div>
            </div>
          </motion.div>

          {/* Floating Widget 1: Recent Invoices (Paid Card) */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute left-[-10px] top-[40px] z-30 w-[180px] glass-card p-4 rounded-xl border border-white/10 shadow-lg animate-float"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent-green/10 text-accent-green">
                <CheckCircle size={18} />
              </div>
              <div>
                <span className="text-[10px] text-neutral-text block font-medium">Invoice #1024</span>
                <span className="text-sm font-bold text-white">$2,840.00</span>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between text-[9px]">
              <span className="text-neutral-text">Sent to Vanta Inc.</span>
              <span className="text-accent-green font-semibold">Processed</span>
            </div>
          </motion.div>

          {/* Floating Widget 2: Expense Analytics (Doughnut Ring) */}
          <motion.div
            initial={{ opacity: 0, x: 60, y: 100 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute right-[-20px] bottom-[30px] z-30 w-[190px] glass-card p-4 rounded-xl border border-white/10 shadow-lg animate-float-delayed"
          >
            <span className="text-[10px] text-neutral-text font-bold block uppercase tracking-wider mb-2">Expenses</span>
            <div className="flex items-center justify-between gap-4">
              {/* Doughnut Chart */}
              <div className="relative w-12 h-12">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="15.91" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
                  <circle
                    cx="18"
                    cy="18"
                    r="15.91"
                    fill="none"
                    stroke="#5B3FD4"
                    strokeWidth="4"
                    strokeDasharray="60 100"
                    strokeDashoffset="25"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="15.91"
                    fill="none"
                    stroke="#38BDF8"
                    strokeWidth="4"
                    strokeDasharray="25 100"
                    strokeDashoffset="85"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-white">60%</div>
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-600" />
                  <span className="text-[9px] text-neutral-text font-medium">SaaS (60%)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                  <span className="text-[9px] text-neutral-text font-medium">Cloud (25%)</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Widget 3: Pending Invoices Clock */}
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute right-[30px] top-[10px] z-10 w-[150px] glass-card p-3 rounded-xl border border-white/5 shadow-md animate-float-reverse"
          >
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-accent-yellow/10 text-accent-yellow">
                <Clock size={14} />
              </div>
              <div>
                <span className="text-[9px] text-neutral-text block">Next Payout</span>
                <span className="text-xs font-bold text-white">In 2 days</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
