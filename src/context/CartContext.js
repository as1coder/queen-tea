'use client';

import { createContext, useState, useCallback } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = useCallback((name, price, size = null) => {
    setCart((prevCart) => {
      const itemKey = size ? `${name}-${size}` : name;
      const existingItem = prevCart.find((item) => {
        const key = item.size ? `${item.name}-${item.size}` : item.name;
        return key === itemKey;
      });
      
      if (existingItem) {
        return prevCart.map((item) => {
          const key = item.size ? `${item.name}-${item.size}` : item.name;
          return key === itemKey ? { ...item, qty: item.qty + 1 } : item;
        });
      }
      return [...prevCart, { name, price, qty: 1, size }];
    });
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((name, size = null) => {
    setCart((prevCart) => {
      const itemKey = size ? `${name}-${size}` : name;
      return prevCart.filter((item) => {
        const key = item.size ? `${item.name}-${item.size}` : item.name;
        return key !== itemKey;
      });
    });
  }, []);

  const updateQuantity = useCallback((name, quantity) => {
    if (quantity <= 0) {
      removeFromCart(name);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.name === name ? { ...item, qty: quantity } : item
        )
      );
    }
  }, [removeFromCart]);

  const toggleCart = useCallback(() => {
    setIsCartOpen((prev) => !prev);
  }, []);

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
  const totalCost = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleCart,
        isCartOpen,
        totalItems,
        totalCost,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
