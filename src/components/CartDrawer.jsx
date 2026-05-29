'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/hooks/useCart';
import { X, Trash2, ShoppingBag, Plus, Minus } from 'lucide-react';

export default function CartDrawer() {
  const { cart, removeFromCart, toggleCart, isCartOpen, totalCost, updateQuantity } = useCart();

  const total = totalCost || 0;
  const whatsappMessage = `Hello, I would like to place an order:\n\n${cart
    .map(
      (item) =>
        `- ${item.qty || item.quantity}x ${item.name} (${item.size || 'Standard'}) — ₹${(item.price * (item.qty || item.quantity)).toFixed(2)}`
    )
    .join('\n')}\n\n*Total: ₹${total.toFixed(2)}*\n\nYour order will be confirmed directly here.`;

  return (
    <>
      {/* Smooth Backdrop Overlay */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            onClick={toggleCart}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>

      {/* Modern Slide-out Drawer Panel - Responsive */}
      <motion.div
        className="fixed top-0 right-0 h-full w-full max-w-sm md:max-w-md bg-[#111111] text-[#F4EADE] shadow-2xl z-50 border-l border-[#EBDAB0]/10 flex flex-col"
        initial={{ x: '100%' }}
        animate={isCartOpen ? { x: 0 } : { x: '100%' }}
        transition={{ duration: 0.4, ease: [0.21, 1.02, 0.43, 1.01] }}
      >
        {/* Panel Header */}
        <div className="p-4 md:p-6 border-b border-[#EBDAB0]/10 flex justify-between items-center bg-black/40">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#EBDAB0] stroke-[1.8]" />
            <h3 className="text-lg md:text-xl font-semibold tracking-wide text-[#F4EADE]">
              Shopping Bag
            </h3>
          </div>
          
          <motion.button
            onClick={toggleCart}
            className="p-1.5 rounded-lg bg-stone-900 border border-[#EBDAB0]/10 text-stone-400 hover:text-[#EBDAB0] hover:border-[#EBDAB0]/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <X className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Dynamic Items List Container */}
        <div className="p-4 md:p-6 flex-1 overflow-y-auto space-y-3 md:space-y-4 bg-transparent">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-48 text-center space-y-3">
              <span className="text-3xl filter opacity-40 select-none">🍃</span>
              <p className="text-[#F4EADE]/40 text-xs font-light tracking-wide">
                Your luxury bag is currently empty.
              </p>
            </div>
          ) : (
            <div className="space-y-3 md:space-y-4">
              <AnimatePresence mode="popLayout">
                {cart.map((item, index) => {
                  const itemQty = item.qty || item.quantity || 1;
                  return (
                    <motion.div
                      key={item.name + (item.size || '')}
                      className="flex items-center justify-between bg-black/20 border border-[#EBDAB0]/10 p-3 md:p-4 rounded-xl md:rounded-2xl shadow-sm"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                      transition={{ delay: index * 0.05, ease: 'easeOut' }}
                      layout
                    >
                      <div className="space-y-1.5 flex-1 pr-3 md:pr-4 min-w-0">
                        <h4 className="text-xs md:text-sm font-medium text-[#F4EADE] break-words">
                          {item.name} {item.size && <span className="text-[10px] md:text-xs text-[#EBDAB0]/60">({item.size})</span>}
                        </h4>
                        <p className="text-[10px] md:text-xs text-[#EBDAB0] font-medium tracking-wide">
                          ₹{item.price} <span className="text-[#F4EADE]/40 font-light lowercase">each</span>
                        </p>
                        
                        {/* Quantity Controls (Plus/Minus) */}
                        <div className="flex items-center gap-2 pt-1">
                          <div className="flex items-center border border-[#EBDAB0]/10 bg-black/40 rounded-lg overflow-hidden">
                            <button
                              onClick={() => {
                                if (itemQty > 1) {
                                  updateQuantity(item.name, itemQty - 1);
                                } else {
                                  removeFromCart(item.name, item.size);
                                }
                              }}
                              className="p-1 px-1.5 text-stone-400 hover:text-[#EBDAB0] hover:bg-white/5 transition"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-[10px] md:text-xs font-medium px-1.5 text-[#F4EADE]">
                              {itemQty}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.name, itemQty + 1)}
                              className="p-1 px-1.5 text-stone-400 hover:text-[#EBDAB0] hover:bg-white/5 transition"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Delete Button */}
                      <motion.button
                        onClick={() => removeFromCart(item.name, item.size)}
                        className="p-2 text-stone-500 hover:text-rose-400 hover:bg-rose-950/20 rounded-lg transition-all duration-300 flex-shrink-0"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Trash2 className="w-4 h-4 stroke-[1.8]" />
                      </motion.button>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Sticky Footer / Order Summary Card Style */}
        <div className="p-4 md:p-6 border-t border-[#EBDAB0]/10 bg-[#111111] space-y-4 md:space-y-5">
          <p className="uppercase tracking-[0.3em] text-[9px] md:text-[10px] text-[#EBDAB0]/40">
            Order Summary
          </p>

          <div className="space-y-2 md:space-y-3 border-b border-[#EBDAB0]/10 pb-3 md:pb-4 text-xs md:text-sm">
            <div className="flex justify-between">
              <span className="text-[#F4EADE]/60">Subtotal</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#F4EADE]/60">Shipping</span>
              <span className="text-[#EBDAB0]">Free</span>
            </div>
          </div>
          
          {/* TOTAL */}
          <div className="flex justify-between items-center py-2">
            <span className="text-[#F4EADE]/60 text-xs md:text-sm">Total</span>
            <div className="overflow-hidden">
              <motion.span
                key={total}
                className="text-2xl md:text-3xl text-[#EBDAB0] block font-semibold"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                ₹{total.toFixed(2)}
              </motion.span>
            </div>
          </div>
          
          {/* WHATSAPP BUTTON */}
          <motion.a
            href={
              cart.length > 0 
                ? `https://wa.me/918421405548?text=${encodeURIComponent(whatsappMessage)}` 
                : '#'
            }
            target={cart.length > 0 ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className={`w-full bg-[#EBDAB0] text-black py-3 md:py-4 rounded-full flex items-center justify-center font-semibold tracking-wider text-[10px] md:text-xs uppercase hover:opacity-90 transition text-center ${cart.length === 0 ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            Proceed to WhatsApp
          </motion.a>

          {/* NOTE */}
          <p className="text-[9px] md:text-[11px] text-[#F4EADE]/40 text-center leading-relaxed">
            Your order will be confirmed directly on WhatsApp.
          </p>
        </div>
      </motion.div>
    </>
  );
}