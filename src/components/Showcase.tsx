"use client";

import { motion } from "framer-motion";
import { 
  FileText, Shield, Sparkles, RefreshCw, BarChart3, Users,
  ArrowUpRight, ArrowRight
} from "lucide-react";

export default function Showcase() {
  const products = [
    {
      id: "invoice-management",
      tag: "Billing",
      title: "Automated Invoice Lifecycle",
      description: "Create, schedule, track, and reconcile invoices automatically. Get paid 10x faster with localized payment gateways, instant retry logic, and direct automated client follow-ups.",
      icon: <FileText className="text-primary-400" size={24} />,
      metrics: [
        { label: "Payment Time", value: "< 24 hrs" },
        { label: "Automation Rate", value: "98.2%" }
      ],
      visual: (
        <div className="relative w-full max-w-[480px] aspect-[1.3] glass-card rounded-2xl p-6 border border-white/10 shadow-2xl overflow-hidden flex flex-col justify-between">
          <div className="flex items-center justify-between pb-4 border-b border-white/5">
            <div>
              <span className="text-[10px] text-neutral-text font-bold uppercase tracking-wider">Invoice Details</span>
              <h4 className="text-lg font-bold font-headings text-white mt-0.5">INV-2026-089</h4>
            </div>
            <span className="px-3 py-1 rounded-full bg-accent-green/20 text-accent-green text-[10px] font-bold border border-accent-green/30">
              Active Recurring
            </span>
          </div>

          <div className="my-4 space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-neutral-text">Client</span>
              <span className="text-white font-medium">Stripe Labs Inc.</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-neutral-text">Billing Plan</span>
              <span className="text-white font-medium">Enterprise Custom (Monthly)</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-neutral-text">Amount Due</span>
              <span className="text-primary-200 font-bold">$18,450.00</span>
            </div>
          </div>

          {/* Progress bar / Timeline */}
          <div className="space-y-2">
            <div className="flex justify-between text-[10px] text-neutral-text">
              <span>Created (May 24)</span>
              <span className="text-white">Auto-Debit scheduled (May 28)</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-primary-400 w-3/4 rounded-full" />
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-[11px] bg-primary-600/10 border border-primary-600/20 p-2.5 rounded-lg text-primary-200">
            <div className="flex items-center gap-2">
              <RefreshCw size={12} className="animate-spin text-primary-400" />
              <span>Next cycle trigger active: 4 days remaining</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "expense-tracking",
      tag: "Expenses",
      title: "Real-time Expense Reconciliation",
      description: "Say goodbye to manual receipts. Connect corporate cards directly, track multi-currency operational expenditures, and automatically categorize SaaS subscriptions and cloud costs.",
      icon: <Shield className="text-accent-blue" size={24} />,
      metrics: [
        { label: "Receipt Matching", value: "Instant" },
        { label: "SaaS Waste Saved", value: "$1,420/mo" }
      ],
      visual: (
        <div className="relative w-full max-w-[480px] aspect-[1.3] glass-card rounded-2xl p-6 border border-white/10 shadow-2xl overflow-hidden flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] text-neutral-text font-bold uppercase tracking-wider">Corporate Spending</span>
              <span className="text-xs text-neutral-text font-mono">May 2026</span>
            </div>
            {/* Expense feed list */}
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5 hover:border-white/15 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-primary-600/20 flex items-center justify-center font-bold text-xs text-primary-200">A</div>
                  <div>
                    <h5 className="text-xs font-semibold text-white">AWS Cloud Services</h5>
                    <span className="text-[9px] text-neutral-text">Cloud Infrastructure</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-white">-$1,489.20</span>
                  <span className="block text-[8px] text-accent-green font-semibold">Matched (Auto)</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5 hover:border-white/15 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-accent-purple/20 flex items-center justify-center font-bold text-xs text-accent-purple">F</div>
                  <div>
                    <h5 className="text-xs font-semibold text-white">Framer Pro Subscription</h5>
                    <span className="text-[9px] text-neutral-text">Software / Design</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-white">-$120.00</span>
                  <span className="block text-[8px] text-accent-green font-semibold">Matched (Auto)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/5 flex items-center justify-between">
            <div>
              <span className="text-[9px] text-neutral-text block uppercase">Card Limit Used</span>
              <span className="text-sm font-bold text-white">$4,820.00 / $10,000</span>
            </div>
            <div className="w-24 h-2 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-accent-blue w-[48%] rounded-full" />
            </div>
          </div>
        </div>
      )
    },
    {
      id: "business-reports",
      tag: "Analytics",
      title: "Institutional-Grade Analytics",
      description: "Unlock growth opportunities with pixel-perfect investor-ready reporting templates. Drill down into MRR dynamics, client churn cohorts, cash flow projections, and runway models.",
      icon: <BarChart3 className="text-accent-yellow" size={24} />,
      metrics: [
        { label: "Report Generation", value: "< 3 sec" },
        { label: "Accuracy Rate", value: "100.00%" }
      ],
      visual: (
        <div className="relative w-full max-w-[480px] aspect-[1.3] glass-card rounded-2xl p-6 border border-white/10 shadow-2xl overflow-hidden flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-[10px] text-neutral-text font-bold uppercase tracking-wider">Finances</span>
              <h4 className="text-base font-bold font-headings text-white">MRR Growth & Projections</h4>
            </div>
            <span className="text-xs text-accent-yellow font-semibold flex items-center gap-1">
              <ArrowUpRight size={14} />
              +18.5% MoM
            </span>
          </div>

          {/* Projection Area Chart */}
          <div className="h-32 w-full">
            <svg className="w-full h-full" viewBox="0 0 300 120">
              <defs>
                <linearGradient id="gradientGold" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#D4A854" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#D4A854" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,110 L50,90 L100,95 L150,70 L200,60 L250,30 L300,10 L300,120 L0,120 Z"
                fill="url(#gradientGold)"
              />
              <path
                d="M0,110 L50,90 L100,95 L150,70 L200,60 L250,30 L300,10"
                fill="none"
                stroke="#D4A854"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              {/* Target projection dashed path */}
              <path
                d="M200,60 L250,45 L300,35"
                fill="none"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            </svg>
          </div>

          <div className="flex justify-between items-center text-xs text-neutral-text">
            <span>Q1 2026</span>
            <span>Q2 2026 (Actual)</span>
            <span className="text-accent-yellow">Q3 Projections</span>
          </div>
        </div>
      )
    },
    {
      id: "workflow-automation",
      tag: "Automation",
      title: "Visual Workflow Automations",
      description: "Connect payment actions to your other tools. Instantly update ERPs, ping slack channels on payout, trigger email notifications on invoices, and sync invoices to your database in real-time.",
      icon: <RefreshCw className="text-accent-purple" size={24} />,
      metrics: [
        { label: "Integrations Available", value: "150+" },
        { label: "Trigger Delay", value: "< 10ms" }
      ],
      visual: (
        <div className="relative w-full max-w-[480px] aspect-[1.3] glass-card rounded-2xl p-6 border border-white/10 shadow-2xl overflow-hidden flex flex-col justify-between">
          <span className="text-[10px] text-neutral-text font-bold uppercase tracking-wider block mb-4">Automation Chain</span>
          
          <div className="space-y-4 relative flex-1 flex flex-col justify-center">
            {/* Connecting line */}
            <div className="absolute left-[20px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary-400 to-accent-purple" />
            
            {/* Step 1 */}
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-10 h-10 rounded-full bg-primary-600/30 border border-primary-600/40 flex items-center justify-center font-bold text-white text-xs">
                1
              </div>
              <div className="flex-1 p-2 rounded-lg bg-white/5 border border-white/5 text-xs">
                <span className="font-semibold text-white block">Trigger: Invoice Paid</span>
                <span className="text-neutral-text">Client invoice INV-091 completes successfully.</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-10 h-10 rounded-full bg-accent-purple/30 border border-accent-purple/40 flex items-center justify-center font-bold text-white text-xs">
                2
              </div>
              <div className="flex-1 p-2 rounded-lg bg-white/5 border border-white/5 text-xs">
                <span className="font-semibold text-white block">Action: Sync CRM</span>
                <span className="text-neutral-text">Status updated in HubSpot and Stripe analytics.</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-10 h-10 rounded-full bg-accent-blue/30 border border-accent-blue/40 flex items-center justify-center font-bold text-white text-xs">
                3
              </div>
              <div className="flex-1 p-2 rounded-lg bg-white/5 border border-white/5 text-xs">
                <span className="font-semibold text-white block">Action: Slack Notify</span>
                <span className="text-neutral-text">{"Send payload to #sales-alerts: '$18,450 received'"}</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "client-management",
      tag: "CRM",
      title: "Next-Gen Client Portals",
      description: "Give your clients a unified, white-labeled dashboard. Let clients manage active contracts, download historic PDF receipts, modify automated payment methods, and request refunds.",
      icon: <Users className="text-accent-blue" size={24} />,
      metrics: [
        { label: "Portal Active Rate", value: "100%" },
        { label: "Support Ticket Drop", value: "45%" }
      ],
      visual: (
        <div className="relative w-full max-w-[480px] aspect-[1.3] glass-card rounded-2xl p-6 border border-white/10 shadow-2xl overflow-hidden flex flex-col justify-between">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary-600/30 flex items-center justify-center text-lg font-bold text-white">SF</div>
            <div>
              <h4 className="text-sm font-bold text-white font-headings">Sarah Finch</h4>
              <span className="text-[10px] text-neutral-text">VP of Finance, TechCorp Ltd.</span>
            </div>
          </div>
          
          <div className="space-y-3 flex-1 flex flex-col justify-center">
            <div className="flex justify-between items-center text-xs p-2 rounded-lg bg-white/5 border border-white/5">
              <span className="text-neutral-text">Lifetime Paid</span>
              <span className="text-white font-bold">$124,500.00</span>
            </div>
            <div className="flex justify-between items-center text-xs p-2 rounded-lg bg-white/5 border border-white/5">
              <span className="text-neutral-text">Average Pay Delay</span>
              <span className="text-accent-green font-semibold">1.8 Days (Ultra-Fast)</span>
            </div>
            <div className="flex justify-between items-center text-xs p-2 rounded-lg bg-white/5 border border-white/5">
              <span className="text-neutral-text">Default Gateway</span>
              <span className="text-white">Apple Pay / Visa Ending 4022</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "ai-finance-insights",
      tag: "AI Copilot",
      title: "Autonomous Financial Intelligence",
      description: "EnFraa AI analyzes cash flow patterns, predicts next month's payouts, identifies redundant operational SaaS expenditures, and provides actionable recommendations to increase margins.",
      icon: <Sparkles className="text-accent-yellow" size={24} />,
      metrics: [
        { label: "Prediction Accuracy", value: "96.4%" },
        { label: "Margin Improvement", value: "+4.2%" }
      ],
      visual: (
        <div className="relative w-full max-w-[480px] aspect-[1.3] glass-card rounded-2xl p-6 border border-white/10 shadow-2xl overflow-hidden flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
            <Sparkles className="text-accent-yellow" size={18} />
            <span className="text-xs font-bold text-white font-headings">EnFraa Autonomous AI</span>
          </div>

          <div className="space-y-4 flex-1 flex flex-col justify-center">
            <div className="p-3 rounded-lg bg-accent-purple/10 border border-accent-purple/20 text-xs text-white">
              💡 <span className="font-semibold text-primary-200">Cash Flow Forecast:</span> Based on historical invoice completions for stripe customers, cash flow is expected to rise by <span className="text-accent-green font-bold">14.8%</span> next month.
            </div>

            <div className="p-3 rounded-lg bg-accent-yellow/10 border border-accent-yellow/20 text-xs text-white">
              ⚠️ <span className="font-semibold text-accent-yellow">SaaS Optimization Alert:</span> 3 redundant subscription seats for Figma found. Estimated savings: <span className="font-bold text-white">$135.00/mo</span>.
            </div>
          </div>

          <div className="text-[10px] text-neutral-text text-center italic mt-2">
            AI recommendations update every 6 hours
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="features" className="py-24 bg-dark-bg relative z-20">
      <div className="glow-overlay w-[400px] h-[400px] bg-primary-600/5 top-[30%] left-[50%] blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="font-headings text-3xl sm:text-4xl font-extrabold text-gradient-purple mb-4">
            Unified Financial Operations
          </h2>
          <p className="text-neutral-text font-light text-base">
            Everything your business needs to manage workflows, billing, invoicing, and financial health globally.
          </p>
        </div>

        {/* Showcase Items */}
        <div className="space-y-32">
          {products.map((product, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={product.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
              >
                {/* Text Side */}
                <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                  >
                    {/* Icon & Category Tag */}
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center">
                        {product.icon}
                      </div>
                      <span className="text-xs uppercase font-bold tracking-wider text-primary-400">
                        {product.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-headings text-2xl sm:text-3xl font-extrabold text-white">
                      {product.title}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-text font-light leading-relaxed">
                      {product.description}
                    </p>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/5">
                      {product.metrics.map((metric) => (
                        <div key={metric.label}>
                          <span className="text-xs text-neutral-text block">{metric.label}</span>
                          <span className="text-lg font-bold text-white mt-1 block font-headings">{metric.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Button */}
                    <div className="pt-4">
                      <a 
                        href="#contact"
                        className="inline-flex items-center gap-2 text-sm text-primary-400 font-bold hover:text-white transition-colors group"
                      >
                        Explore product
                        <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </motion.div>
                </div>

                {/* Visual Side */}
                <div className={`lg:col-span-7 flex justify-center ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="w-full flex justify-center"
                  >
                    {product.visual}
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
