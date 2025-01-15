import React from 'react';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
const { cart, removeFromCart, clearCart, getCartTotal } = useCart();

return (
    <div className="cart-container">
    <h2>Carrito de Compras</h2>
    {cart.length === 0 ? (
        <p>El carrito está vacío</p>
    ) : (
        <>
        {cart.map(item => (
            <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
                <h3>{item.name}</h3>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: ${item.price * item.quantity}</p>
            </div>
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </div>
        ))}
        <div className="cart-summary">
            <p>Total: ${getCartTotal()}</p>
            <button onClick={clearCart}>Vaciar Carrito</button>
            <button className="checkout-btn">Finalizar Compra</button>
        </div>
        </>
    )}
    </div>
);
};

export default Cart; 