'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Compass, Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 1.02, 0.43, 1.01] } },
  };

  return (
    <section className="relative min-h-screen flex items-center px-6 bg-[#000000] overflow-hidden z-10 pt-20">
      
      {/* 🌟 Luxury Background Golden Ambient Aura */}
      <motion.div
        className="absolute right-[-10%] top-1/4 w-[50vw] h-[50vw] bg-[#EBDAB0]/5 rounded-full filter blur-[150px] pointer-events-none"
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
      <div className="absolute left-[-5%] bottom-0 w-[30vw] h-[30vw] bg-[#EBDAB0]/3 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 py-12 md:py-20">
        
        {/* Left Side: Luxury Typography & Action Items */}
        <motion.div
          className="md:col-span-7 space-y-8 text-center md:text-left flex flex-col items-center md:items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Elite Dynamic Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111]/60 border border-[#222222]"
            variants={itemVariants}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#EBDAB0]" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#EBDAB0] font-semibold">
              Est. 2026 — Private Royal Reserve
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#F4EADE] leading-[1.15] md:leading-tight tracking-wide font-normal"
            variants={itemVariants}
          >
            Sip Serenity,
            <br />
            <span className="italic font-light text-[#EBDAB0]">Leaf by Leaf.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-sm sm:text-base text-stone-400 max-w-lg leading-relaxed font-light"
            variants={itemVariants}
          >
            Indulge in our artisan whole-leaf organic teas. Handpicked from historical estate gardens, blended beautifully with modern botanical wellness.
          </motion.p>

          {/* Luxury Action Deck Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 pt-2"
            variants={itemVariants}
          >
            {/* Primary Gold Trigger */}
            <Link href="#shop" className="group relative px-8 py-4 bg-[#EBDAB0] text-stone-950 text-xs uppercase tracking-widest font-bold rounded-full shadow-xl shadow-[#EBDAB0]/5 hover:bg-stone-900 hover:text-[#EBDAB0] border border-transparent hover:border-[#EBDAB0]/20 transition-all duration-300 text-center flex items-center justify-center gap-2 overflow-hidden">
              <motion.span whileTap={{ scale: 0.96 }} className="flex items-center gap-2">
                Explore Collection
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.span>
            </Link>

            {/* Secondary Outline Trigger */}
            <Link href="#timer" className="group px-8 py-4 bg-[#111111]/40 backdrop-blur-md text-stone-200 text-xs uppercase tracking-widest font-semibold rounded-full border border-[#222222] hover:border-[#EBDAB0]/30 transition-all duration-300 text-center flex items-center justify-center gap-2">
              <motion.span whileTap={{ scale: 0.96 }} className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#EBDAB0] group-hover:rotate-45 transition-transform duration-500" />
                Interactive Brew Guide
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side: Glassmorphic Product Deck Showcase */}
      <motion.div
      className="md:col-span-5 relative flex justify-center items-center w-full mt-8 md:mt-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
    >
      {/* ✨ Backlighting Layer: High-end specular gold glow directly behind the product showcases */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-tr from-[#EBDAB0]/10 to-transparent rounded-full filter blur-[80px] pointer-events-none" />

      {/* 🖼️ The Exhibition Showcase Card (Clean, Minimal, Substantial) */}
      <motion.div
        className="relative w-full max-w-[340px] aspect-[4/5] rounded-2xl bg-gradient-to-b from-[#0c0c0d] to-[#040404] border border-[#1d1d1f] flex flex-col justify-between p-6 overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] group"
        whileHover={{ y: -6 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Subtle Diagonal Gloss Sheet on Hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

        {/* Top Header Row of Card */}
        <div className="flex justify-between items-start relative z-10 w-full">
          <span className="text-[10px] font-semibold text-stone-500 tracking-[0.2em] uppercase">
            Vault No. 04
          </span>
          <span className="text-[9px] text-[#EBDAB0] border border-[#EBDAB0]/20 bg-[#EBDAB0]/5 px-2 py-0.5 rounded-sm uppercase tracking-widest font-medium">
            Exclusive
          </span>
        </div>

        {/* ☕ Product Image Frame Container (Bold, Confident Sizing) */}
        <div className="relative w-full h-44 flex items-center justify-center my-4 overflow-hidden">
          <img
            src="/Jasmine-Pearls.webp"
            alt="Imperial Jasmine Pearls Tea"
            className="max-w-[180px] max-h-full object-contain transform group-hover:scale-105 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]"
            onError={(e) => {
              // Graceful Minimal Fallback
              e.currentTarget.style.display = 'none';
              if (e.currentTarget.parentElement) {
                const fallback = document.createElement('div');
                fallback.className = 'text-[#EBDAB0] text-4xl font-serif select-none animate-pulse';
                fallback.innerText = '🌿';
                e.currentTarget.parentElement.appendChild(fallback);
              }
            }}
          />
        </div>

        {/* Bottom Metadata Typography Panel */}
        <div className="border-t border-[#16161a] pt-4 relative z-10 space-y-1">
          <p className="text-[10px] text-[#EBDAB0] tracking-[0.25em] uppercase font-bold">
            Yunnan Reserve
          </p>
          <h3 className="font-serif text-xl text-[#F4EADE] font-normal tracking-wide">
            Jasmine Pearls
          </h3>
          <div className="flex justify-between items-center pt-2">
            <span className="text-[11px] text-stone-500 font-light italic">
              Imperial Grade Whole Leaf
            </span>
            <span className="text-xs text-[#F4EADE] font-medium tracking-wide">
              ₹1,450
            </span>
          </div>
        </div>
      </motion.div>

      {/* Elegant Architectural Floating Counter-Badge */}
      <div className="absolute -bottom-4 -right-2 md:right-4 bg-[#0a0a0b] border border-[#1d1d1f] px-4 py-2.5 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-2.5 pointer-events-none z-20">
        <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
        <span className="text-[9px] uppercase tracking-[0.2em] text-stone-400 font-bold">
          100% Certified Organic
        </span>
      </div>
    </motion.div>
      </div>
    </section>
  );
}