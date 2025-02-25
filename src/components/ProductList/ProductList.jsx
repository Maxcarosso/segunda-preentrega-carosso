import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const ProductList = ({ products }) => {
    const { addToCart } = useCart();

    const handleAddToCart = (product) => {
        addToCart(product, 1);
        // Opcional: Agregar notificación de éxito
        alert('Producto agregado al carrito');
    };

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
                    <p className="price">${product.price}</p>
                    <div className="product-buttons">
                        <Link to={`/item/${product.id}`} className="view-detail">
                            Ver detalle
                        </Link>
                        <button 
                            onClick={() => handleAddToCart(product)}
                            className="add-to-cart"
                        >
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList; 