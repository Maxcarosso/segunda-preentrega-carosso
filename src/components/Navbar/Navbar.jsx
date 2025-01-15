import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
const { cart } = useCart();

return (
    <nav className="navbar">
    <div className="navbar-title">
        <h1>Zapatillas Importadas</h1>
    </div>
    
    <div className="nav-links">
        <Link to="/">Todos los Productos</Link>
        <Link to="/nike">Nike</Link>
        <Link to="/adidas">Adidas</Link>
        <Link to="/vans">Vans</Link>
    </div>

    <div className="cart-icon">
        <Link to="/cart">
        <FaShoppingCart />
        {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </Link>
    </div>
    </nav>
);
};

export default Navbar; 