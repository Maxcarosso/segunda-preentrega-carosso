import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { useCart } from '../../context/CartContext';

const ItemDetail = ({ product }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useCart();

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        addItem(product, quantity);
        // Agregar console.log para debugging
        console.log('Producto agregado:', product, 'Cantidad:', quantity);
    };

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
                
                {quantityAdded === 0 ? (
                    <ItemCount 
                        initial={1} 
                        stock={product.stock} 
                        onAdd={handleOnAdd} 
                    />
                ) : (
                    <div className="finish-shopping">
                        <p className="success-message">
                            ¡Agregaste {quantityAdded} {quantityAdded === 1 ? 'unidad' : 'unidades'} al carrito!
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