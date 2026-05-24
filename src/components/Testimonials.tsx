"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "EnFraa completely automated our SaaS invoicing lifecycle. We saved over 15 hours of manual operations and accounting ledger syncs in our first month alone.",
      name: "Fayis Finch",
      role: "CEO & Co-founder, VantaLabs",
      avatar: "FF",
      rating: 5
    },
    {
      quote: "Our billing reconciliation rate reached 99.8% after migrating to EnFraa. The automated payment recovery alerts saved over $8,400 in potentially lost subscriptions.",
      name: "Sarah Jenkins",
      role: "VP of Finance, Quantum Systems",
      avatar: "SJ",
      rating: 5
    },
    {
      quote: "The visual workflow automations are incredible. A payment in EnFraa instantly syncs to our database, updates Salesforce, and notifies the account manager in Slack.",
      name: "Nithin Mohan",
      role: "Co-founder, ApexTech",
      avatar: "NM",
      rating: 5
    },
    {
      quote: "Offering our enterprise clients a fully white-labeled billing portal reduced invoice support queries by 45%. It makes our billing look extremely premium.",
      name: "Ananya K.",
      role: "Operations Director, Retool Corp",
      avatar: "AK",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 bg-dark-bg relative z-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-primary-400">TESTIMONIALS</span>
            <h2 className="font-headings text-3xl sm:text-4xl font-extrabold text-gradient-purple leading-tight">
              What Founders Say About EnFraa
            </h2>
            <p className="text-neutral-text font-light leading-relaxed">
              We help founders automate manual financial pipelines so they can focus on shipping product and driving growth.
            </p>
            {/* Slider controls */}
            <div className="flex gap-4 pt-4">
              <button 
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-primary-400 transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={18} />
              </button>
              <button 
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-primary-400 transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Right Slides */}
          <div className="lg:col-span-7 relative h-[320px] sm:h-[280px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="w-full glass-card p-8 rounded-2xl border border-white/5 shadow-xl flex flex-col justify-between h-full absolute"
              >
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-accent-yellow text-accent-yellow" />
                    ))}
                  </div>
                  {/* Quote */}
                  <p className="text-neutral-light text-base sm:text-lg font-light leading-relaxed relative">
                    <Quote className="absolute -top-3 -left-3 text-white/5 w-10 h-10 -z-10" />
                    “{testimonials[currentIndex].quote}”
                  </p>
                </div>

                {/* Profile info */}
                <div className="flex items-center gap-4 mt-6 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-primary-600/20 text-primary-200 font-bold flex items-center justify-center text-sm">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-headings">{testimonials[currentIndex].name}</h4>
                    <span className="text-xs text-neutral-text">{testimonials[currentIndex].role}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
