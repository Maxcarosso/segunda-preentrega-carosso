import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList/ProductList';
import { products } from '../data/products';

const CategoryProducts = () => {
const { categoryId } = useParams();
const [filteredProducts, setFilteredProducts] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
    setLoading(true);
    // Simulamos una llamada a API con setTimeout
    setTimeout(() => {
    const filtered = products.filter(
        product => product.brand.toLowerCase() === categoryId.toLowerCase()
    );
    setFilteredProducts(filtered);
    setLoading(false);
    }, 500);
  }, [categoryId]); // Se ejecuta cada vez que cambia la categoría

if (loading) {
    return <div className="loading">Cargando productos...</div>;
}

return (
    <div className="category-products">
    <h2 className="category-title">
        {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}
    </h2>
    {filteredProducts.length === 0 ? (
        <p>No hay productos en esta categoría</p>
    ) : (
        <ProductList products={filteredProducts} />
    )}
    </div>
);
};

export default CategoryProducts; 