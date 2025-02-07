import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { products } from '../../data/products';

const ItemDetailContainer = () => {
const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(true);
const { itemId } = useParams();

useEffect(() => {
    setLoading(true);
    
    const getProduct = new Promise((resolve) => {
    setTimeout(() => {
        const foundProduct = products.find(p => p.id === parseInt(itemId));
        resolve(foundProduct);
    }, 1000);
    });

    getProduct
    .then(response => {
        setProduct(response);
    })
    .catch(error => {
        console.error("Error:", error);
    })
    .finally(() => {
        setLoading(false);
    });
}, [itemId]);

if (loading) {
    return <div className="loading">Cargando producto...</div>;
}

if (!product) {
    return <div className="error">Producto no encontrado</div>;
}

return (
    <div className="item-detail-container">
    <ItemDetail product={product} />
    </div>
);
};

export default ItemDetailContainer; 