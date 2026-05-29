'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Leaf } from 'lucide-react';
import LeafCanvas from '@/components/LeafCanvas';

export default function Footer() {
  const [email, setEmail] = useState('');

  const socialLinks = [
    { 
      icon: (
        <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      ), 
      href: '#', 
      label: 'Instagram' 
    },
    { 
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      ), 
      href: '#', 
      label: 'Pinterest' 
    },
    { 
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
        </svg>
      ), 
      href: '#', 
      label: 'Facebook' 
    },
  ];

  const shopLinks = [
    { label: 'Green Teas', href: '#' },
    { label: 'Oolong Collection', href: '#' },
    { label: 'Herbal & Botanicals', href: '#' },
  ];

  const inquiryLinks = [
    { label: 'Wholesale Partnerships', href: '#' },
    { label: 'Shipping & Returns', href: '#' },
    { label: 'Sustainability Commitments', href: '#' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <footer id="about" className="bg-stone-950 py-20 px-6 relative z-10 text-stone-300 overflow-hidden border-t border-stone-900">
      
      {/* 🍃 Canvas Background */}
      <LeafCanvas />

      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#EBDAB0]/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Brand Column */}
        <motion.div className="space-y-4" variants={itemVariants}>
          <div className="flex items-center space-x-2.5">
            <span className="text-2xl font-serif text-[#F4EADE] italic font-semibold tracking-wide">
              queenTea
            </span>
            <Leaf className="w-3.5 h-3.5 text-[#EBDAB0] fill-[#EBDAB0]/10" />
          </div>
          <p className="text-stone-400 text-xs font-light leading-relaxed max-w-xs">
            Premium whole-leaf blends crafted to transform everyday moments into
            calm sensory experiences. Experience royalty in every single sip.
          </p>
          
          <div className="flex space-x-3 pt-3">
            {socialLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                aria-label={link.label}
                className="w-9 h-9 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-[#EBDAB0] hover:border-[#EBDAB0]/30 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Shop Info Links */}
        <motion.div className="space-y-4 text-xs tracking-wider" variants={itemVariants}>
          <h4 className="font-semibold text-[#F4EADE] uppercase tracking-[0.2em] text-[10px]">Reserve Blends</h4>
          <ul className="space-y-3 text-stone-400 font-light text-xs">
            {shopLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-[#EBDAB0] transition-colors duration-200 block">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Customer Care */}
        <motion.div className="space-y-4 text-xs tracking-wider" variants={itemVariants}>
          <h4 className="font-semibold text-[#F4EADE] uppercase tracking-[0.2em] text-[10px]">Inquiries</h4>
          <ul className="space-y-3 text-stone-400 font-light text-xs">
            {inquiryLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-[#EBDAB0] transition-colors duration-200 block">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Newsletter Column */}
        <motion.div className="space-y-4" variants={itemVariants}>
          <h4 className="font-serif text-lg text-[#F4EADE] font-light tracking-wide">Sip Weekly</h4>
          <p className="text-xs text-stone-400 font-light leading-relaxed">
            Join the leaf circle for exclusive recipes, private reserves, and curated sensory updates.
          </p>
          <div className="relative flex items-center mt-3 group">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-stone-900 border border-stone-800 rounded-xl pl-4 pr-12 py-3.5 text-xs text-stone-200 placeholder-stone-600 focus:outline-none focus:border-[#EBDAB0]/30 focus:bg-stone-950 transition-all duration-300"
            />
            <motion.button
              onClick={() => email && setEmail('')}
              className="absolute right-2 p-2 rounded-lg bg-stone-950 border border-stone-800 text-stone-400 hover:text-[#EBDAB0] hover:border-[#EBDAB0]/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* Footer Bottom */}
      <motion.div
        className="max-w-7xl mx-auto mt-20 pt-8 border-t border-stone-900 flex flex-col sm:flex-row gap-4 justify-between items-center text-[10px] text-stone-500 uppercase tracking-[0.2em] font-medium relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span>&copy; {new Date().getFullYear()} queenTea Co. All Rights Reserved.</span>
        <span className="text-[#EBDAB0]/40">Ethically Grown, Curated Mindfully.</span>
      </motion.div>
    </footer>
  );
}