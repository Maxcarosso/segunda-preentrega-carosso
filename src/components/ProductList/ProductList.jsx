import React from 'react';
import { useCart } from '../../context/CartContext';

const ProductList = ({ products }) => {
const { addToCart } = useCart();

return (
    <div className="products-container">
    {products.map(product => (
        <div key={product.id} className="product-card">
        <img 
            src={product.image} 
            alt={product.name} 
            loading="lazy" 
            onError={(e) => {
                e.target.src = '/images/placeholder.jpg' // imagen por defecto
            }} 
        />
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <button onClick={() => addToCart(product)}>
            Agregar al carrito
        </button>
        </div>
    ))}
    </div>
);
};

export default ProductList; 