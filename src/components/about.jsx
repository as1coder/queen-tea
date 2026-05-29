'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { ShieldCheck, Flame, Sun } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.21, 1.02, 0.43, 1.01] } 
    }
  };

  return (
    <section id="about" className="py-24 md:py-36 px-6 relative z-10 bg-[#000000] overflow-hidden border-t border-[#111111]">
      
      {/* 🌟 Soft Ambient Luxury Glow behind image */}
      <div className="absolute right-[10%] bottom-1/4 w-[400px] h-[400px] bg-[#EBDAB0]/3 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* 📋 Left Side: Editorial Story & Philosophy */}
        <motion.div 
          ref={ref}
          className="md:col-span-7 space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Subtitle Tag */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2">
            <span className="h-[1px] w-6 bg-[#EBDAB0]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#EBDAB0] font-bold">
              Our Legacy & Cultivation
            </span>
          </motion.div>

          {/* Editorial Headline */}
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F4EADE] font-normal leading-tight tracking-wide"
          >
            Born from Earth, <br />
            <span className="italic font-light text-[#EBDAB0]">Poured with Grace.</span>
          </motion.h2>

          {/* Deep Paragraphs */}
          <motion.div variants={itemVariants} className="space-y-6 text-stone-400 font-light text-sm sm:text-base leading-relaxed max-w-xl">
            <p>
              At <span className="text-[#F4EADE] font-normal">queenTea</span>, we do not view tea as a mere commodity or a rushed morning routine. To us, it is a living art form—a quiet sanctuary discovered in the midst of a chaotic world. 
            </p>
            <p>
              Our journey began with a single mission: to bypass mass-production commercial channels and trace our roots back to single-estate micro-gardens. By collaborating directly with heritage growers across untouched mountainous reserves, we bring you unblended, authentic leaves that hold the true essence of the soil they grew in.
            </p>
          </motion.div>

          {/* Three Micro pillars for trust */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 pt-4 border-t border-[#111111]"
          >
            <div className="space-y-1.5">
              <Sun className="w-4 h-4 text-[#EBDAB0] stroke-[1.5]" />
              <h4 className="text-xs font-semibold text-[#F4EADE] uppercase tracking-wider">High Altitude</h4>
              <p className="text-[11px] text-stone-500 font-light">Grown above 4,000ft for complex flavor nodes.</p>
            </div>
            <div className="space-y-1.5">
              <Flame className="w-4 h-4 text-[#EBDAB0] stroke-[1.5]" />
              <h4 className="text-xs font-semibold text-[#F4EADE] uppercase tracking-wider">Micro Batch</h4>
              <p className="text-[11px] text-stone-500 font-light">Artisanal fire-roasted to absolute perfection.</p>
            </div>
            <div className="space-y-1.5">
              <ShieldCheck className="w-4 h-4 text-[#EBDAB0] stroke-[1.5]" />
              <h4 className="text-xs font-semibold text-[#F4EADE] uppercase tracking-wider">Pure Grade</h4>
              <p className="text-[11px] text-stone-500 font-light">Zero artificial oils, only organic botanicals.</p>
            </div>
          </motion.div>
        </motion.div>


        {/* 🖼️ Right Side: Premium Asymmetrical Image Frame Showcase */}
        <motion.div 
          className="md:col-span-5 relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 1.02, 0.43, 1.01] }}
          viewport={{ once: true }}
        >
          {/* Main Visual Display Border Box */}
          <div className="relative aspect-[4/5] w-full rounded-2xl bg-[#111111]/40 border border-[#222222]/60 overflow-hidden shadow-2xl backdrop-blur-xl group">
            <Image
              src="/cup-of-tea.webp" 
              alt="Artisan handling whole tea leaves" 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale hover:grayscale-0"
              onError={() => {
                // Image missing - fallback placeholder shown via CSS
              }}
            />
            
            {/* Elegant overlay gradient sheet inside image */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-60" />
            
            {/* Bottom Floating Badge inside Card */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#000000]/80 border border-[#111111] backdrop-blur-md">
              <p className="font-serif italic text-sm text-[#F4EADE]">"The ritual of tea is a conversation between nature and the soul."</p>
              <p className="text-[9px] text-[#EBDAB0] uppercase tracking-widest font-bold mt-1.5">— Master Tea Sommelier</p>
            </div>
          </div>

          {/* Extra floating subtle geometric line behind the card for depth */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-[#EBDAB0]/20 rounded-tl-2xl pointer-events-none -z-10" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-[#EBDAB0]/20 rounded-br-2xl pointer-events-none -z-10" />
        </motion.div>

      </div>
    </section>
  );
}