import React from 'react';
import ProductList from '../components/ProductList/ProductList';
import { products } from '../data/products';
import './AllProducts.css';

const AllProducts = () => {
  return (
    <div className="all-products">
      <h2 className="page-title">Todos los Productos</h2>
      <ProductList products={products} />
    </div>
  );
};

export default AllProducts; 