import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { useCart } from '../../context/CartContext';

const ItemDetail = ({ product }) => {
const [quantityAdded, setQuantityAdded] = useState(0);
const { addItem, isInCart, getItemQuantity } = useCart();

const handleOnAdd = (count) => {
    setQuantityAdded(count);
    addItem(product, count);
};

const currentQuantity = getItemQuantity(product.id);

return (
    <div className="item-detail">
    <div className="item-image">
        <img src={product.image} alt={product.name} />
    </div>
    <div className="item-info">
        <h2>{product.name}</h2>
        <p className="description">{product.description}</p>
        <p className="price">${product.price}</p>
        <p className="stock">Stock disponible: {product.stock}</p>
        
        {/* Mostrar el contador o el botón de terminar compra según el estado */}
        {quantityAdded === 0 ? (
        <ItemCount 
            initial={1} 
            stock={product.stock - currentQuantity} 
            onAdd={handleOnAdd} 
        />
        ) : (
        <div className="finish-shopping">
            <p className="added-message">
                ¡Agregaste {quantityAdded} {quantityAdded === 1 ? 'unidad' : 'unidades'}!
            </p>
            <Link to="/cart" className="finish-button">
            Terminar compra
            </Link>
            <Link to="/" className="continue-button">
            Seguir comprando
            </Link>
        </div>
        )}
    </div>
    </div>
);
};

export default ItemDetail; 