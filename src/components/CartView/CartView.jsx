import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { FaTrash } from 'react-icons/fa';

const CartView = () => {
const { cart, removeItem, clearCart, getTotalPrice } = useCart();

if (cart.length === 0) {
    return (
    <div className="cart-empty">
        <h2>Tu carrito está vacío</h2>
        <Link to="/" className="continue-button">
        Volver a la tienda
        </Link>
    </div>
    );
}

return (
<div className="cart-container">
    <h2>Tu Carrito</h2>
    <div className="cart-items">
        {cart.map(item => (
        <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
            <h3>{item.name}</h3>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio unitario: ${item.price}</p>
              <p>Subtotal: ${item.price * item.quantity}</p>
            </div>
            <button 
            className="remove-button"
            onClick={() => removeItem(item.id)}
            >
            <FaTrash />
            </button>
        </div>
        ))}
    </div>
    
    <div className="cart-summary">
        <h3>Total: ${getTotalPrice()}</h3>
        <div className="cart-buttons">
        <button 
            className="clear-cart-button"
            onClick={clearCart}
        >
            Vaciar Carrito
        </button>
        <button 
            className="checkout-button"
            onClick={() => alert('Próximamente: Checkout')}
        >
            Finalizar Compra
        </button>
        </div>
    </div>
    </div>
);
};

export default CartView; 