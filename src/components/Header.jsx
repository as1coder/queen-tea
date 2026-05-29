'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/hooks/useCart';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, Leaf } from 'lucide-react';

export default function Header() {
  const { toggleCart, totalItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'shop', label: 'Shop' },
    { id: 'timer', label: 'Brew Guide' },
    { id: 'about', label: 'Our Philosophy' },
  ];

  return (
    <>
      {/* 👑 Ultra-Luxury Absolute Black Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#000000]/60 backdrop-blur-xl border-b border-[#111111] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Brand Logo Layout */}
          <Link href="#" className="flex items-center space-x-2 group select-none">
            <motion.span
              className="text-2xl md:text-3xl text-[#F4EADE] font-serif italic font-semibold tracking-wide transition-colors duration-300 group-hover:text-[#EBDAB0]"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              queenTea
            </motion.span>
            {/* Golden Breathing Dot */}
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-[#EBDAB0] mt-2"
              animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-10 text-xs font-medium uppercase tracking-[0.25em] text-stone-400">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={`#${link.id}`}
                className="relative hover:text-[#EBDAB0] transition-colors duration-300 pb-1 group"
              >
                {link.label}
                {/* Premium Golden Slider Underline */}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#EBDAB0] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Actions Controls (Cart & Mobile Burger) */}
          <div className="flex items-center space-x-2">
            {/* Shopping Cart Button */}
            <motion.button
              onClick={toggleCart}
              className="relative p-2.5 text-stone-200 hover:text-[#EBDAB0] transition-colors duration-300 focus:outline-none rounded-xl hover:bg-[#111111]/80"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
              
              {/* Counter Badge */}
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    className="absolute -top-0.5 -right-0.5 bg-[#EBDAB0] text-[#000000] text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 600, damping: 20 }}
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu Action Trigger */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 md:hidden text-stone-400 hover:text-[#EBDAB0] transition-colors focus:outline-none rounded-xl hover:bg-[#111111]/80"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle Mobile Menu"
            >
              <Menu className="w-5 h-5 stroke-[2]" />
            </motion.button>
          </div>
        </div>
      </header>

      {/* 📱 Fullscreen Responsive Mobile Navigation Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Darker Tint Backdrop Overlay */}
            <motion.div
              className="fixed inset-0 bg-[#000000]/80 backdrop-blur-md z-50 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Pitch Black Sidebar */}
            <motion.div
              className="fixed top-0 right-0 h-full w-72 bg-[#000000] border-l border-[#111111] shadow-2xl p-6 z-50 md:hidden flex flex-col justify-between"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="space-y-8">
                {/* Header inside Panel */}
                <div className="flex items-center justify-between border-b border-[#111111] pb-5">
                  <div className="flex items-center space-x-2">
                    <span className="font-serif italic text-xl text-[#F4EADE] font-semibold">queenTea</span>
                    <Leaf className="w-3.5 h-3.5 text-[#EBDAB0]" />
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-stone-400 hover:text-[#EBDAB0] rounded-xl transition-colors"
                  >
                    <X className="w-5 h-5 stroke-[2]" />
                  </button>
                </div>

                {/* Main Link Options Stack */}
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.id}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        href={`#${link.id}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-sm font-medium uppercase tracking-[0.2em] text-stone-300 hover:text-[#EBDAB0] block py-2.5 border-b border-[#111111]/40 transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Minimal Panel Footer */}
              <div className="text-[9px] text-stone-600 uppercase tracking-widest border-t border-[#111111] pt-4">
                © {new Date().getFullYear()} Premium Reserves.
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}