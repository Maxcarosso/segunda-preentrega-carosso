import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
const { getTotalQuantity } = useCart();
const location = useLocation();
const totalItems = getTotalQuantity();

const categories = [
    { id: 'all', name: 'Todos los Productos', path: '/' },
    { id: 'nike', name: 'Nike', path: '/category/nike' },
    { id: 'adidas', name: 'Adidas', path: '/category/adidas' },
    { id: 'vans', name: 'Vans', path: '/category/vans' },
];

  return (
    <nav className="navbar">
    <div className="navbar-title">
        <h1>Zapatillas Importadas</h1>
    </div>
    
    <div className="nav-links">
        {categories.map(category => (
        <Link
            key={category.id}
            to={category.path}
            className={location.pathname === category.path ? 'active' : ''}
        >
            {category.name}
        </Link>
        ))}
    </div>

    <div className="cart-icon">
        <Link to="/cart">
        <FaShoppingCart />
        {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </Link>
    </div>
    </nav>
  );
};

export default Navbar; 