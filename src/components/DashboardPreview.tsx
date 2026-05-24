"use client";

import { motion } from "framer-motion";
import { 
  ArrowUpRight, ArrowDownRight, Sparkles, ArrowRight, 
  Search, Bell, Settings, Download
} from "lucide-react";

export default function DashboardPreview() {
  const kpis = [
    {
      title: "Monthly Recurring Revenue (MRR)",
      value: "$182,450.00",
      change: "+12.4%",
      isPositive: true,
      glow: "bg-primary-600/10 border-primary-600/20"
    },
    {
      title: "Average Revenue Per User (ARPU)",
      value: "$340.00",
      change: "+4.1%",
      isPositive: true,
      glow: "bg-accent-blue/10 border-accent-blue/20"
    },
    {
      title: "Customer Lifetime Value (LTV)",
      value: "$14,800.00",
      change: "-1.2%",
      isPositive: false,
      glow: "bg-accent-purple/10 border-accent-purple/20"
    },
    {
      title: "Active Cash Runway",
      value: "22 Months",
      change: "Stable",
      isPositive: true,
      glow: "bg-accent-green/10 border-accent-green/20"
    }
  ];

  const transactions = [
    { company: "Vercel Inc.", item: "Enterprise Hosting", amount: "-$850.00", date: "Today, 14:24", status: "Completed" },
    { company: "Acme Corp Ltd", item: "Custom API Billing", amount: "+$4,890.00", date: "Today, 09:12", status: "Completed" },
    { company: "Stripe Gateway", item: "Batch Reconciliation", amount: "+$12,450.00", date: "Yesterday", status: "Completed" },
    { company: "Mailgun Corp", item: "SMTP Relay Fees", amount: "-$65.00", date: "May 22, 2026", status: "Completed" }
  ];

  const teamActivity = [
    { user: "Ajlan K.", role: "Admin", action: "Approved payout of $12,450", time: "2m ago", avatar: "AK" },
    { user: "Fayis M.", role: "Billing Operations", action: "Created recurring draft INV-208", time: "1h ago", avatar: "FM" },
    { user: "Meera R.", role: "Finance Manager", action: "Exported Q1 Tax Ledger PDF", time: "4h ago", avatar: "MR" }
  ];

  return (
    <section id="dashboard" className="py-24 bg-dark-deep relative z-20 overflow-hidden">
      {/* Background Glows */}
      <div className="glow-overlay w-[600px] h-[600px] bg-primary-600/5 top-[-10%] right-[-10%] blur-[130px]" />
      <div className="glow-overlay w-[500px] h-[500px] bg-accent-purple/5 bottom-[-10%] left-[-10%] blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Title / Description */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-primary-400">FINANCIAL CONTROL TOWER</span>
          <h2 className="font-headings text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-6 leading-tight">
            Cinematic Financial Workspace
          </h2>
          <p className="text-neutral-text font-light text-base sm:text-lg">
            Empower your finance and growth teams with real-time analytics, global billing control, and automated reconciliation inside one workspace.
          </p>
        </div>

        {/* Cinematic Dashboard Box */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full glass-card rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(91,63,212,0.15)] overflow-hidden"
        >
          {/* Top Mock Header */}
          <div className="px-6 py-4 border-b border-white/5 flex flex-wrap items-center justify-between gap-4 bg-white/2">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-xs text-neutral-text font-mono ml-4">dashboard.enfraa.com/workspace</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search size={14} className="absolute left-2.5 top-2.5 text-neutral-text" />
                <input 
                  type="text" 
                  placeholder="Search ledger..." 
                  className="pl-8 pr-4 py-1.5 text-xs rounded-lg bg-white/5 border border-white/5 focus:outline-none focus:border-primary-400 w-44"
                  readOnly 
                />
              </div>
              <Bell size={16} className="text-neutral-text cursor-pointer hover:text-white" />
              <Settings size={16} className="text-neutral-text cursor-pointer hover:text-white" />
            </div>
          </div>

          {/* Main Dashboard Layout */}
          <div className="p-6 space-y-6">
            {/* KPI Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {kpis.map((kpi) => (
                <div key={kpi.title} className={`p-4 rounded-xl border bg-dark-bg/40 ${kpi.glow}`}>
                  <span className="text-[10px] text-neutral-text block font-semibold uppercase tracking-wider">{kpi.title}</span>
                  <div className="flex items-baseline justify-between mt-2">
                    <span className="text-xl font-bold font-headings text-white">{kpi.value}</span>
                    <span className={`text-xs font-semibold flex items-center gap-0.5 ${kpi.isPositive ? "text-accent-green" : "text-accent-red"}`}>
                      {kpi.isPositive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                      {kpi.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Central Area Chart Panel & Insights */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Central Chart */}
              <div className="lg:col-span-8 p-5 rounded-xl border border-white/5 bg-white/1 flex flex-col justify-between h-[340px]">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-sm font-bold text-white font-headings">Global Cash Flow Dynamics</h3>
                    <span className="text-[10px] text-neutral-text">Simulating revenue intake vs. operational burn</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-2.5 py-1 text-[10px] rounded bg-primary-600 text-white font-semibold flex items-center gap-1.5">
                      <Download size={10} />
                      Export Ledger
                    </button>
                  </div>
                </div>

                <div className="flex-1 w-full relative">
                  <svg className="w-full h-full" viewBox="0 0 600 200" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#7B5CF5" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#7B5CF5" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {/* Grid lines */}
                    <line x1="0" y1="50" x2="600" y2="50" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                    <line x1="0" y1="100" x2="600" y2="100" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                    <line x1="0" y1="150" x2="600" y2="150" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                    
                    {/* Area charts */}
                    <path
                      d="M0,170 Q100,100 200,120 T400,60 T600,30 L600,200 L0,200 Z"
                      fill="url(#purpleGradient)"
                    />
                    <path
                      d="M0,185 Q100,150 200,140 T400,90 T600,75 L600,200 L0,200 Z"
                      fill="url(#blueGradient)"
                    />

                    {/* Lines */}
                    <path
                      d="M0,170 Q100,100 200,120 T400,60 T600,30"
                      fill="none"
                      stroke="#7B5CF5"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M0,185 Q100,150 200,140 T400,90 T600,75"
                      fill="none"
                      stroke="#38BDF8"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div className="flex justify-between items-center text-[10px] text-neutral-text mt-4">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun (Forecast)</span>
                </div>
              </div>

              {/* AI Insights & Reports */}
              <div className="lg:col-span-4 p-5 rounded-xl border border-white/5 bg-white/1 flex flex-col justify-between h-[340px]">
                <div>
                  <div className="flex items-center gap-1.5 text-accent-yellow mb-4">
                    <Sparkles size={16} />
                    <h3 className="text-sm font-bold text-white font-headings">Autonomous Insights</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="p-3 rounded-lg bg-primary-600/10 border border-primary-600/20 text-xs text-white">
                      💡 <span className="font-semibold text-primary-200">Reconciliation Rate:</span> Payment reconciliation has increased to <span className="text-accent-green font-bold">99.8%</span> due to Stripe Webhook sync upgrades.
                    </div>
                    <div className="p-3 rounded-lg bg-accent-yellow/10 border border-accent-yellow/20 text-xs text-white">
                      ⚠️ <span className="font-semibold text-accent-yellow">Runway Notice:</span> Current cash runway exceeds 18 months, reducing investor pressure for Q3 fundraising.
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-neutral-text font-medium">Auto-pilot recommendation mode</span>
                  <a href="#features" className="text-primary-400 font-bold hover:text-white">Settings</a>
                </div>
              </div>
            </div>

            {/* Bottom Row: Transactions & Team Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Recent Transactions */}
              <div className="lg:col-span-7 p-5 rounded-xl border border-white/5 bg-white/1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-white font-headings">Recent Transactions</h3>
                  <span className="text-xs text-neutral-text cursor-pointer hover:text-white">View Ledger</span>
                </div>
                <div className="space-y-3">
                  {transactions.map((tx, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-dark-bg/20 border border-white/2">
                      <div>
                        <h4 className="text-xs font-semibold text-white">{tx.company}</h4>
                        <span className="text-[9px] text-neutral-text">{tx.item} • {tx.date}</span>
                      </div>
                      <div className="text-right">
                        <span className={`text-xs font-bold ${tx.amount.startsWith("+") ? "text-accent-green" : "text-white"}`}>
                          {tx.amount}
                        </span>
                        <span className="block text-[8px] text-accent-green font-semibold">{tx.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Activity Feed */}
              <div className="lg:col-span-5 p-5 rounded-xl border border-white/5 bg-white/1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white font-headings mb-4">Team Activity</h3>
                  <div className="space-y-3.5">
                    {teamActivity.map((activity, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary-600/20 text-primary-200 flex items-center justify-center font-bold text-xs">
                          {activity.avatar}
                        </div>
                        <div className="flex-1 text-xs">
                          <p className="text-white font-medium">
                            {activity.user} <span className="text-neutral-text font-normal">({activity.role})</span>
                          </p>
                          <p className="text-neutral-text text-[10px]">{activity.action}</p>
                        </div>
                        <span className="text-[9px] text-neutral-text font-mono">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs mt-4">
                  <span className="text-neutral-text">4 active members online</span>
                  <a href="#contact" className="text-primary-400 font-bold hover:text-white flex items-center gap-1">
                    Manage Team
                    <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
