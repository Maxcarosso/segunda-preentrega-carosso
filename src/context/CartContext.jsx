import React, { createContext, useState, useContext, useEffect } from 'react';

// Creamos el contexto
const CartContext = createContext({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  isInCart: () => {},
  getTotalQuantity: () => {},
  getTotalPrice: () => {},
});

// Hook personalizado para usar el contexto
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de un CartProvider');
  }
  return context;
};

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Agregar item al carrito
  const addToCart = (item, quantity = 1) => {
    if (!isInCart(item.id)) {
      setCart(prev => [...prev, { ...item, quantity }]);
    } else {
      // Si el item ya existe, actualiza la cantidad
      setCart(prev => prev.map(cartItem => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + quantity };
        }
        return cartItem;
      }));
    }
  };

  // Remover item del carrito
  const removeItem = (itemId) => {
    setCart(prev => prev.filter(item => item.id !== itemId));
  };

  // Limpiar todo el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Verificar si un item está en el carrito
  const isInCart = (itemId) => {
    return cart.some(item => item.id === itemId);
  };

  // Obtener cantidad total de items en el carrito
  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Obtener precio total del carrito
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Obtener cantidad de un item específico
  const getItemQuantity = (itemId) => {
    const item = cart.find(item => item.id === itemId);
    return item?.quantity || 0;
  };

  const contextValue = {
    cart,
    addToCart,
    removeItem,
    clearCart,
    isInCart,
    getTotalQuantity,
    getTotalPrice,
    getItemQuantity
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}; 