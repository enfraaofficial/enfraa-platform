"use client";

import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  const links = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Security", href: "#" },
      { name: "Integrations", href: "#" }
    ],
    company: [
      { name: "About EnFraa", href: "#" },
      { name: "Kerala Startup Carnival", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press Kit", href: "#" }
    ],
    legal: [
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "SLA Policy", href: "#" },
      { name: "Security Ledger", href: "#" }
    ]
  };

  return (
    <footer className="bg-dark-deep border-t border-white/5 relative z-20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-2">
              <span className="font-headings font-extrabold text-2xl tracking-tight">
                <span className="text-primary-400">En</span>
                <span className="text-white">Fraa</span>
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
            </a>
            <p className="text-xs text-neutral-text font-light leading-relaxed max-w-sm">
              The next-generation smart billing and finance workflow engine built for hyper-growth startups and global operations. Simplify business, empower growth.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.instagram.com/enfraa.official/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Link" className="text-neutral-text hover:text-white transition-colors">
                <svg className="w-[18px] h-[18px] stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://github.com/enfraaofficial" target="_blank" rel="noopener noreferrer" aria-label="GitHub Link" className="text-neutral-text hover:text-white transition-colors">
                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn Link" className="text-neutral-text hover:text-white transition-colors">
                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Product</h4>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-neutral-text hover:text-white text-xs font-light transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-neutral-text hover:text-white text-xs font-light transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 3 */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-neutral-text hover:text-white text-xs font-light transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2 text-xs text-neutral-text">
                <Mail size={14} className="text-primary-400 shrink-0" />
                <a href="mailto:enfraaofficial@gmail.com" className="hover:text-white transition-colors">enfraaofficial@gmail.com</a>
              </li>
              <li className="flex items-start gap-2 text-xs text-neutral-text">
                <MapPin size={14} className="text-primary-400 shrink-0 mt-0.5" />
                <span>Manjeri, Malappuram, Kerala, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Gradient divider line */}
        <div className="h-px bg-gradient-to-r from-primary-600 via-accent-purple to-investor-gold opacity-50 w-full mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-neutral-text">
          <p>© {new Date().getFullYear()} EnFraa. All rights reserved. Built in Kerala, scaling globally.</p>
          <p className="flex items-center gap-1">
            <span>Powered by Next.js 15 & Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
