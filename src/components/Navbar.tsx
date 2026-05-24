"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Dashboard", href: "#dashboard" },
    { name: "Pricing", href: "#pricing" },
    { name: "Reports", href: "#reports" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-4 glass-panel border-b border-dark-border/40"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-headings font-extrabold text-2xl tracking-tight">
            <span className="text-primary-400 group-hover:text-primary-200 transition-colors duration-300">En</span>
            <span className="text-white">Fraa</span>
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary-400 group-hover:bg-white transition-colors duration-300" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-neutral-text hover:text-white font-medium text-sm transition-colors duration-300 relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="text-neutral-text hover:text-white font-medium text-sm transition-colors duration-300"
          >
            Sign In
          </a>
          <a
            href="#contact"
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold rounded-lg group bg-gradient-to-br from-primary-400 to-accent-purple group-hover:from-primary-400 group-hover:to-accent-purple text-white focus:ring-2 focus:outline-none focus:ring-primary-600"
          >
            <span className="relative px-5 py-2 transition-all duration-300 bg-dark-bg rounded-[6px] group-hover:bg-transparent group-hover:text-white">
              Start Free
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-primary-400 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 glass-panel border-b border-dark-border py-6 px-6 md:hidden flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-neutral-text hover:text-white font-medium text-base transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="h-px bg-white/10 w-full" />
            <div className="flex flex-col gap-4">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-neutral-text hover:text-white text-center py-2 font-medium"
              >
                Sign In
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="bg-gradient-to-r from-primary-600 to-accent-purple text-white text-center py-3 rounded-lg font-semibold shadow-[0_0_20px_rgba(91,63,212,0.3)] hover:shadow-[0_0_30px_rgba(91,63,212,0.5)] transition-all"
              >
                Start Free
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
