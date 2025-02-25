import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const { cart } = useCart();
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-title">
        <h1>Zapatillas Importadas</h1>
      </div>
      
      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Inicio
        </Link>
        <Link to="/category/nike" className={location.pathname === '/category/nike' ? 'active' : ''}>
          Nike
        </Link>
        <Link to="/category/adidas" className={location.pathname === '/category/adidas' ? 'active' : ''}>
          Adidas
        </Link>
        <Link to="/category/vans" className={location.pathname === '/category/vans' ? 'active' : ''}>
          Vans
        </Link>
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