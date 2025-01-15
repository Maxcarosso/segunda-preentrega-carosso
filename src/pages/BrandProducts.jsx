import React from 'react';
import ProductList from '../components/ProductList/ProductList';
import { products } from '../data/products';

const BrandProducts = ({ brand }) => {
const filteredProducts = products.filter(
    product => product.brand.toLowerCase() === brand.toLowerCase()
);

return (
    <div>
    <h2>{brand.toUpperCase()}</h2>
    <ProductList products={filteredProducts} />
    </div>
);
};

export default BrandProducts; 