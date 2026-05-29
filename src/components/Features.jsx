'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Leaf, HeartHandshake, Sparkles, Crown, HelpCircle } from 'lucide-react';

// Icon mapping design palette
const iconMap = {
  'leaf': Leaf,
  'hand-holding-heart': HeartHandshake,
  'sparkles': Sparkles,
  'crown': Crown,
};

function FeatureCard({ icon, title, description, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const IconComponent = iconMap[icon] || HelpCircle;

  return (
    <motion.div
      ref={ref}
      className="group w-full"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: [0.21, 1.02, 0.43, 1.01], delay }}
    >
      {/* 💎 Jet Black Glassmorphic Grid Element */}
      <div className="relative p-6 md:p-8 rounded-2xl h-full min-h-[350px] flex flex-col justify-between bg-[#111111]/40 border border-[#1d1d1f]/70 hover:border-[#EBDAB0]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-black backdrop-blur-xl overflow-hidden">
        
        <div>
          {/* Subtle Internal Aura Glow */}
          <motion.div
            className="absolute -top-24 -right-24 w-48 h-48 bg-[#EBDAB0]/3 rounded-full filter blur-3xl pointer-events-none"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6,
              ease: 'easeInOut',
              repeat: Infinity,
              delay: delay * 2,
            }}
          />

          {/* Luxury Solid Icon Container Box */}
          <motion.div
            className="relative z-10 w-12 h-12 rounded-xl bg-[#111111] border border-[#222222] flex items-center justify-center text-[#EBDAB0] mb-6 shadow-xl group-hover:border-[#EBDAB0]/40 transition-all duration-300"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            <IconComponent className="w-5 h-5 stroke-[1.5]" />
          </motion.div>

          {/* Feature Card Text Description */}
          <div className="relative z-10 space-y-3">
            <h3 className="font-serif text-xl text-[#F4EADE] font-normal tracking-wide group-hover:text-[#EBDAB0] transition-colors duration-300">
              {title}
            </h3>
            <p className="text-stone-400 font-light text-xs md:text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Premium Underline Slide Slider */}
        <motion.div
          className="absolute bottom-0 left-0 h-[1.5px] bg-[#EBDAB0]"
          initial={{ width: 0 }}
          animate={isInView ? { width: '100%' } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay + 0.1, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  );
}

export default function Features() {
  const features = [
    {
      icon: 'leaf',
      title: 'Ethically Sourced Heritage',
      description:
        'Every leaf tells a story. Curated from generations-old estates across Asia, our teas embody centuries of tea-making mastery. Each variety is carefully selected to bring you authentic, traceable wellness.',
    },
    {
      icon: 'hand-holding-heart',
      title: 'Mindfully Sustainable',
      description:
        'We believe in harmony with nature. Our eco-conscious practices ensure that every cup nourishes both your spirit and the earth. From biodegradable packaging to carbon-neutral delivery, sustainability flows through everything we do.',
    },
    {
      icon: 'sparkles',
      title: 'Ceremonial Freshness',
      description:
        'Forget shelf-sitting tea. Each blend is hand-crafted and packaged at peak freshness, preserving the delicate essence and premium quality. Experience the difference that true craftsmanship brings to every brew.',
    },
    {
      icon: 'crown',
      title: 'Royal Wellness Ritual',
      description:
        "Tea is more than a beverage—it's a moment of grace. Infused with botanical wisdom and natural elegance, our blends transform your daily routine into a luxurious self-care sanctuary.",
    },
  ];

  return (
    <section id="philosophy" className="py-24 md:py-32 px-6 relative z-10 bg-[#000000] overflow-hidden border-t border-[#111111]">
      
      {/* Absolute Dark Gold Aura Layer Backdrops */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#EBDAB0]/3 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#EBDAB0]/2 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Typography Center Header */}
        <div className="text-center space-y-4 mb-20 md:mb-28">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111] border border-[#222222]"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#EBDAB0]" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#EBDAB0] font-semibold">
              Why Choose queenTea
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F4EADE] font-normal tracking-wide leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Elevate Your Daily Ritual
          </motion.h2>

          <motion.p
            className="text-stone-400 font-light text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover the essence of premium tea craftsmanship. We blend ancient wisdom with modern wellness to create moments of pure serenity.
          </motion.p>

          {/* Minimalist Central Alignment Rule */}
          <motion.div
            className="flex items-center justify-center gap-4 pt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="h-[1px] w-10 bg-[#111111]" />
            <span className="text-stone-600 font-serif italic text-xs tracking-wider">Est. 2026</span>
            <div className="h-[1px] w-10 bg-[#111111]" />
          </motion.div>
        </div>

        {/* Features Flexible Clean Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}