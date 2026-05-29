'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/hooks/useCart';
import { ShoppingBag, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import LeafCanvas from '@/components/LeafCanvas'; // Aapka canvas file path check kar lena

function ProductCard({ id, badge, title, origin, description, image, sizes = [], delay }) {
  const { addToCart } = useCart();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Default size state (Pehla size, e.g., 50g automatic select hoga)
  const [selectedSize, setSelectedSize] = useState(sizes[0]?.size || 'Standard');
  const [currentPrice, setCurrentPrice] = useState(sizes[0]?.price || 0);

  const handleSizeChange = (e) => {
    const sizeObj = sizes.find((s) => s.size === e.target.value);
    if (sizeObj) {
      setSelectedSize(sizeObj.size);
      setCurrentPrice(sizeObj.price);
    }
  };

  return (
    <motion.div
      ref={ref}
      className="bg-[#111111]/70 backdrop-blur-md rounded-[2rem] p-6 border border-[#EBDAB0]/10 hover:border-[#EBDAB0]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-black/80 group flex flex-col justify-between h-full relative"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: [0.21, 1.02, 0.43, 1.01], delay }}
    >
      {/* Premium Gold Badge */}
      {badge && (
        <div className="absolute top-8 right-8 z-20">
          <span className="bg-stone-950/80 backdrop-blur-md text-[#EBDAB0] border border-[#EBDAB0]/20 text-[9px] font-semibold tracking-[0.2em] px-3 py-1 rounded-full uppercase">
            {badge}
          </span>
        </div>
      )}

      <Link href={`/products/${id}`} className="block group/link">
        {/* Visual Container (Product Image) */}
        <div className="relative bg-gradient-to-b from-stone-900/60 to-stone-950/80 rounded-2xl h-64 overflow-hidden flex items-center justify-center mb-6 border border-stone-800/40 group-hover:border-[#EBDAB0]/20 transition-all duration-500 cursor-pointer">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover scale-95 group-hover:scale-100 group-hover:rotate-1 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={delay === 0}
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
        </div>

        {/* Product Info */}
        <div className="space-y-2.5 px-1">
          <div className="flex justify-between items-start gap-4">
            <h3 className="text-xl md:text-2xl font-serif text-[#F4EADE] font-medium group-hover/link:text-[#EBDAB0] transition-colors duration-300 line-clamp-1">
              {title}
            </h3>
            <span className="text-xl text-[#EBDAB0] font-serif font-light whitespace-nowrap">
              ₹{currentPrice}
            </span>
          </div>
          
          <p className="text-[10px] tracking-[0.2em] text-[#EBDAB0]/50 font-semibold uppercase">
            Origin: {origin}
          </p>
          
          <p className="text-xs text-stone-400 font-light line-clamp-2 leading-relaxed pt-1">
            {description}
          </p>
        </div>
      </Link>

      {/* Dropdown Selector & CTA Button */}
      <div className="px-1 pt-6 mt-auto space-y-4">
        {sizes.length > 0 && (
          <div className="relative flex items-center">
            <span className="absolute left-3 text-[10px] uppercase tracking-wider text-[#F4EADE]/40 pointer-events-none">
              Size:
            </span>
            <select
              value={selectedSize}
              onChange={handleSizeChange}
              className="w-full pl-14 pr-10 py-2.5 bg-stone-950/90 text-xs text-[#F4EADE]/80 rounded-xl border border-stone-800/80 focus:border-[#EBDAB0]/30 focus:outline-none appearance-none cursor-pointer tracking-wide transition-all"
            >
              {sizes.map((s) => (
                <option key={s.size} value={s.size} className="bg-stone-950 text-stone-300">
                  {s.size} — ₹{s.price}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-stone-500 absolute right-3 pointer-events-none" />
          </div>
        )}

        <motion.button
          onClick={() => addToCart({ id, title, price: currentPrice, size: selectedSize, image })}
          className="w-full py-4 bg-stone-950 text-[#EBDAB0] text-xs uppercase tracking-[0.2em] font-semibold rounded-xl border border-[#EBDAB0]/20 hover:bg-[#EBDAB0] hover:text-black hover:border-transparent hover:shadow-xl hover:shadow-[#EBDAB0]/5 transition-all duration-300 flex items-center justify-center gap-2.5 focus:outline-none"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
        >
          <ShoppingBag className="w-3.5 h-3.5 transition-transform group-hover:scale-110 duration-300" />
          Add To Bag
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function Shop() {
  return (
    <section id="shop" className="py-20 md:py-32 px-4 md:px-8 relative min-h-screen bg-[#0c0c0c] overflow-hidden">
      
      {/* 🍃 AAPKA LIVE CANVAS ANIMATION YAHAN BACKGROUND MEIN CHALEGA */}
      <LeafCanvas />

      {/* Main UI Content Container (Z-10 isko canvas ke upar layer karega) */}
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 md:mb-24">
          <motion.span
            className="text-xs uppercase tracking-[0.4em] text-[#EBDAB0] font-medium block"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Curated Reserve
          </motion.span>
          
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#F4EADE] font-light tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Shop the Harvest
          </motion.h2>
          
          <motion.div
            className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#EBDAB0]/40 to-transparent mx-auto pt-2"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <ProductCard key={product.id} {...product} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}