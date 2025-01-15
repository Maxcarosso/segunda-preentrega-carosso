import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
const context = useContext(CartContext);
if (!context) {
    throw new Error('useCart debe ser usado dentro de un CartProvider');
}
return context;
};

export const CartProvider = ({ children }) => {
const [cart, setCart] = useState([]);

const addToCart = (product) => {
    setCart(prevCart => {
    const existingProduct = prevCart.find(item => item.id === product.id);
    if (existingProduct) {
        return prevCart.map(item =>
        item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
    }
    return [...prevCart, { ...product, quantity: 1 }];
    });
};

const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
};

const clearCart = () => {
    setCart([]);
};

const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
};

const value = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal
};

return (
    <CartContext.Provider value={value}>
    {children}
    </CartContext.Provider>
);
}; 