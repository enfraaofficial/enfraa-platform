"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, RefreshCw } from "lucide-react";

export default function FinalCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-mesh relative z-20 overflow-hidden">
      {/* Glow Effects */}
      <div className="glow-overlay w-[600px] h-[600px] bg-primary-600/15 top-[20%] left-[-10%] blur-[130px]" />
      <div className="glow-overlay w-[500px] h-[500px] bg-accent-purple/10 bottom-[10%] right-[-10%] blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Text and Branding */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-xs uppercase font-bold tracking-widest text-primary-400">GET STARTED TODAY</span>
            <h2 className="font-headings text-4xl sm:text-5xl font-extrabold text-gradient-purple leading-tight">
              Run Your Business Smarter with EnFraa
            </h2>
            <p className="text-neutral-text text-base sm:text-lg font-light leading-relaxed max-w-xl">
              Join the next generation of fast-growing startups and businesses. Automate your invoicing, optimize operational spending, and forecast your cash flow.
            </p>
            <div className="flex flex-col gap-4 max-w-md pt-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-accent-green shrink-0" size={18} />
                <span className="text-sm text-neutral-light font-light">Free 14-day trial on all premium tiers</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-accent-green shrink-0" size={18} />
                <span className="text-sm text-neutral-light font-light">No credit card required to start</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-accent-green shrink-0" size={18} />
                <span className="text-sm text-neutral-light font-light">Instant API integration and migration support</span>
              </div>
            </div>
          </div>

          {/* Right Side: Contact/Demo Form */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[480px] glass-card rounded-2xl p-8 border border-white/10 shadow-2xl relative">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div>
                      <h3 className="font-headings text-xl font-bold text-white mb-1">Book a Demo / Start Free</h3>
                      <p className="text-xs text-neutral-text">{"Fill out your details and we'll reach out within an hour."}</p>
                    </div>

                    <div className="space-y-4">
                      {/* Name */}
                      <div>
                        <label htmlFor="form-name" className="block text-xs font-semibold text-neutral-light mb-1.5 uppercase tracking-wide">Full Name *</label>
                        <input
                          id="form-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Fayis Finch"
                          className="w-full px-4 py-3 text-sm glass-input font-light"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="form-email" className="block text-xs font-semibold text-neutral-light mb-1.5 uppercase tracking-wide">Work Email *</label>
                        <input
                          id="form-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="fayis@vanta.com"
                          className="w-full px-4 py-3 text-sm glass-input font-light"
                        />
                      </div>

                      {/* Company Name */}
                      <div>
                        <label htmlFor="form-company" className="block text-xs font-semibold text-neutral-light mb-1.5 uppercase tracking-wide">Company Name</label>
                        <input
                          id="form-company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Vanta Labs Inc."
                          className="w-full px-4 py-3 text-sm glass-input font-light"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="form-message" className="block text-xs font-semibold text-neutral-light mb-1.5 uppercase tracking-wide">Message / Requirements</label>
                        <textarea
                          id="form-message"
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Looking to automate invoicing and sync ledger to database..."
                          className="w-full px-4 py-3 text-sm glass-input font-light resize-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-primary-600 to-accent-purple text-white font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(91,63,212,0.3)] hover:shadow-[0_0_30px_rgba(91,63,212,0.5)] transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw size={16} className="animate-spin" />
                          Scheduling Demo...
                        </>
                      ) : (
                        <>
                          <span>Submit Request</span>
                          <Send size={16} />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-10 space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent-green/20 text-accent-green border border-accent-green/30 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(52,211,153,0.2)]">
                      <CheckCircle2 size={36} />
                    </div>
                    <div>
                      <h3 className="font-headings text-2xl font-extrabold text-white mb-2">Request Submitted!</h3>
                      <p className="text-sm text-neutral-text font-light max-w-[280px] mx-auto leading-relaxed">
                        Thank you! An onboarding specialist will reach out to you via your work email in under 1 hour.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs text-primary-400 font-bold hover:text-white underline pt-4"
                    >
                      Submit another request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
