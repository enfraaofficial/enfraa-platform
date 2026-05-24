"use client";

import { motion } from "framer-motion";
import { 
  FileSpreadsheet, FilePieChart, LineChart, Shield, 
  GitBranch, Users2, Sparkles, CloudLightning
} from "lucide-react";

export default function FeaturesGrid() {
  const features = [
    {
      title: "Auto Invoice Generation",
      description: "Generate and deliver invoices automatically on recurring payment cycles with dynamic receipt adjustments.",
      icon: <FileSpreadsheet className="text-primary-400 group-hover:scale-110 transition-transform duration-300" size={24} />,
    },
    {
      title: "Smart Reports",
      description: "Create detailed, compliance-ready reports for tax ledgers, P&L, balance sheets, and audit filings in one click.",
      icon: <FilePieChart className="text-accent-blue group-hover:scale-110 transition-transform duration-300" size={24} />,
    },
    {
      title: "Real-time Analytics",
      description: "Track global cash intake, payment failures, active churn rates, and LTV trends in real-time dashboards.",
      icon: <LineChart className="text-accent-purple group-hover:scale-110 transition-transform duration-300" size={24} />,
    },
    {
      title: "Expense Tracking",
      description: "Connect physical or virtual corporate cards, read receipts, and automatically reconcile accounting ledgers.",
      icon: <Shield className="text-accent-green group-hover:scale-110 transition-transform duration-300" size={24} />,
    },
    {
      title: "Team Workflows",
      description: "Define multi-level approval hierarchies for transactions, assign custom roles, and automate payroll syncs.",
      icon: <GitBranch className="text-accent-yellow group-hover:scale-110 transition-transform duration-300" size={24} />,
    },
    {
      title: "Client Management",
      description: "Offer white-labeled payment screens, subscription modifiers, and contract agreements to all active clients.",
      icon: <Users2 className="text-primary-200 group-hover:scale-110 transition-transform duration-300" size={24} />,
    },
    {
      title: "AI Finance Insights",
      description: "Leverage machine learning to predict invoice default dates, forecast monthly burn, and discover cost saving tips.",
      icon: <Sparkles className="text-accent-yellow group-hover:rotate-12 transition-transform duration-300" size={24} />,
    },
    {
      title: "Cloud Sync",
      description: "Instant bi-directional cloud data backup. Seamlessly integrate with HubSpot, QuickBooks, Slack, and Salesforce.",
      icon: <CloudLightning className="text-accent-blue group-hover:scale-110 transition-transform duration-300" size={24} />,
    },
  ];

  return (
    <section className="py-24 bg-dark-bg relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase font-bold tracking-widest text-primary-400">ARCHITECTED FOR PERFORMANCE</span>
          <h2 className="font-headings text-3xl sm:text-4xl font-extrabold text-gradient-purple mt-4 mb-6">
            Engineered to Scale Your Operations
          </h2>
          <p className="text-neutral-text font-light text-base">
            Every operational feature is optimized for speed, regulatory compliance, and ease of use.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, index) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-card rounded-2xl p-6 border border-white/5 flex flex-col justify-between h-[220px] group cursor-pointer"
            >
              <div>
                {/* Icon wrapper with hover scaling */}
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center mb-5 group-hover:bg-primary-600/10 group-hover:border-primary-600/20 transition-all duration-300">
                  {feat.icon}
                </div>
                <h3 className="font-headings text-lg font-bold text-white mb-2 group-hover:text-primary-200 transition-colors">
                  {feat.title}
                </h3>
              </div>
              <p className="text-neutral-text text-sm font-light leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
