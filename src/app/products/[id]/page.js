'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useCart } from '@/hooks/useCart';
import { getProductById } from '@/data/products';
import { ShoppingBag, ArrowLeft, Star, Minus, Plus, Check, ShieldCheck } from 'lucide-react';
import { useParams } from 'next/navigation';

export default function ProductDetail() {
  const params = useParams();
  const product = getProductById(params.id);
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#000000] flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-2xl font-serif text-[#F4EADE]">Reserve Selection Not Found</p>
          <Link href="/#shop" className="text-[#EBDAB0] hover:underline text-sm uppercase tracking-widest block">
            ← Return To Vault
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    const price = selectedSize?.price || product.price;
    for (let i = 0; i < quantity; i++) {
      addToCart(product.title, price, selectedSize?.size);
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const displayPrice = selectedSize?.price || product.price;

  return (
    <div className="min-h-screen bg-[#000000] py-12 md:py-24 text-stone-100 selection:bg-[#EBDAB0]/20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Minimalist Return Navigator */}
        <Link href="/#shop" className="inline-block mb-8 md:mb-16">
          <motion.button
            className="flex items-center gap-2 text-stone-400 hover:text-[#EBDAB0] transition-colors"
            whileHover={{ x: -4 }}
          >
            <ArrowLeft className="w-4 h-4 stroke-[1.5]" />
            <span className="text-xs uppercase tracking-[0.2em] font-medium">Back to Collection</span>
          </motion.button>
        </Link>

        {/* Core Deck Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* 🖼️ Premium Product Frame Display */}
          <motion.div
            className="bg-[#111111]/40 border border-[#1d1d1f] rounded-3xl p-8 md:p-12 flex items-center justify-center h-[350px] md:h-[480px] relative overflow-hidden shadow-2xl backdrop-blur-xl"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.21, 1.02, 0.43, 1.01] }}
          >
            {/* Subtle Royal Aura Backdrop Circle */}
            <div className="absolute w-72 h-72 bg-[#EBDAB0]/3 filter blur-[80px] rounded-full pointer-events-none" />
            
            <Image
              src={product.image}
              alt={product.title}
              width={450}
              height={450}
              className="object-contain w-full h-full transform hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />
          </motion.div>

          {/* ☕ Rich Specifications Column */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Organic Capsule Tag */}
            {product.badge && (
              <div className="inline-block">
                <span className="bg-[#111111] border border-[#222222] text-[#EBDAB0] text-[10px] font-bold tracking-[0.25em] px-4 py-2 rounded-full uppercase">
                  ✦ {product.badge}
                </span>
              </div>
            )}

            {/* Title Block Architecture */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-serif text-[#F4EADE] tracking-wide font-normal">
                {product.title}
              </h1>
              <p className="text-sm text-[#EBDAB0] tracking-[0.2em] uppercase font-bold">
                {product.origin}
              </p>
            </div>

            {/* Rating Metric Matrix */}
            <div className="flex items-center gap-4 border-b border-[#111111] pb-6">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating) ? 'fill-[#EBDAB0] text-[#EBDAB0]' : 'text-stone-800'
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs text-stone-500 uppercase tracking-widest">
                {product.rating} ({product.reviews} Verified Reviews)
              </p>
            </div>

            {/* Price Segment Module */}
            <div className="space-y-1">
              <p className="text-[10px] text-stone-500 uppercase tracking-[0.2em]">Investment / Price</p>
              <p className="text-4xl font-serif text-[#F4EADE]">
                ₹{displayPrice.toLocaleString('en-IN')}
              </p>
            </div>

            {/* Size Configuration Matrix */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-3">
                <p className="text-[10px] text-stone-400 uppercase tracking-[0.2em] font-semibold">
                  Select Volume Size
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {product.sizes.map((size) => (
                    <motion.button
                      key={size.size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3.5 px-4 rounded-xl border font-medium text-xs tracking-wider uppercase transition-all ${
                        selectedSize?.size === size.size
                          ? 'border-[#EBDAB0] bg-[#111111] text-[#EBDAB0]'
                          : 'border-[#111111] bg-[#050505] text-stone-400 hover:border-stone-800'
                      }`}
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      {size.size}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Controller Segment */}
            <div className="space-y-3">
              <p className="text-[10px] text-stone-400 uppercase tracking-[0.2em] font-semibold">
                Serving Batches
              </p>
              <div className="flex items-center bg-[#050505] border border-[#111111] rounded-xl w-fit overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3.5 text-stone-500 hover:text-[#EBDAB0] transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-6 text-sm font-semibold text-stone-200 select-none min-w-[48px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3.5 text-stone-500 hover:text-[#EBDAB0] transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Primary Action Dispatcher Trigger */}
            <div className="space-y-4 pt-2">
              <motion.button
                onClick={handleAddToCart}
                className={`w-full py-4.5 rounded-full font-bold tracking-[0.2em] text-xs uppercase flex items-center justify-center gap-2 border transition-all duration-300 ${
                  addedToCart
                    ? 'bg-emerald-950 border-emerald-800 text-emerald-400 shadow-xl shadow-emerald-950/20'
                    : 'bg-[#EBDAB0] border-transparent text-stone-950 hover:bg-[#000000] hover:text-[#EBDAB0] hover:border-[#EBDAB0]/30 shadow-xl shadow-[#EBDAB0]/5'
                }`}
                whileTap={{ scale: 0.98 }}
              >
                {addedToCart ? (
                  <>
                    <Check className="w-4 h-4 stroke-[2.5]" />
                    Allocated to Bag
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 stroke-[2]" />
                    Acquire Selection
                  </>
                )}
              </motion.button>

              {/* Status Stock Signal Indicator */}
              <div className="flex items-center gap-2 px-1">
                <span className={`h-1.5 w-1.5 rounded-full ${product.inStock ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`} />
                <p className="text-[11px] uppercase tracking-widest text-stone-500 font-medium">
                  {product.inStock ? 'Curated Stock Available' : 'Allocation Exhausted'}
                </p>
              </div>
            </div>

          </motion.div>
        </div>

        {/* 📖 Deep Editorial Metadata Breakdown */}
        <motion.div
          className="mt-20 md:mt-32 pt-12 md:pt-16 border-t border-[#111111]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-serif text-[#F4EADE] tracking-wide">
                Botanical Profile & <br />Brewing Philosophy
              </h2>
            </div>
            <div className="md:col-span-2 space-y-6">
              <p className="text-stone-400 text-base leading-relaxed font-light">
                {product.fullDescription || "Every harvest cycle represents a distinct ecological footprint. Hand-processed under strictly regulated internal temperatures, this reserve item carries highly intricate compound aromatic nodes that release gracefully over continuous steeps."}
              </p>
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-stone-500 border border-[#111111] bg-[#050505] px-4 py-2 rounded-xl">
                <ShieldCheck className="w-3.5 h-3.5 text-[#EBDAB0]" /> 100% Traceable Single Estate Origin Guarantee
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dynamic Return Anchor Block */}
        <motion.div
          className="mt-20 pt-16 border-t border-[#111111] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="/#shop">
            <motion.button
              className="px-10 py-4 bg-[#111111] border border-[#222222] text-stone-300 rounded-full text-xs uppercase tracking-widest font-semibold hover:border-[#EBDAB0]/40 hover:text-white transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Return To Complete Reserve View
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </div>
  );
}