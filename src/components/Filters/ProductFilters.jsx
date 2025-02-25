import React from 'react';

const ProductFilters = ({ onFilterChange, onSortChange }) => {
    return (
        <div className="filters-container">
            <select onChange={(e) => onSortChange(e.target.value)}>
                <option value="">Ordenar por...</option>
                <option value="price-asc">Precio: Menor a Mayor</option>
                <option value="price-desc">Precio: Mayor a Menor</option>
                <option value="name">Nombre</option>
            </select>
            
            <div className="price-filter">
                <input 
                    type="range" 
                    min="0" 
                    max="200" 
                    onChange={(e) => onFilterChange(e.target.value)} 
                />
                <span>Precio máximo: ${value}</span>
            </div>
        </div>
    );
};

export default ProductFilters; 