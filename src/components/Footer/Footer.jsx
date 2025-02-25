import React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config/config';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Contacto</h3>
                    <p>Email: {config.contact.email}</p>
                    <p>Teléfono: {config.contact.phone}</p>
                    <p>Dirección: {config.contact.address}</p>
                </div>
                
                <div className="footer-section">
                    <h3>Enlaces rápidos</h3>
                    <Link to="/about">Sobre nosotros</Link>
                    <Link to="/contact">Contacto</Link>
                    <Link to="/terms">Términos y condiciones</Link>
                </div>
                
                <div className="footer-section">
                    <h3>Redes sociales</h3>
                    <div className="social-links">
                        {Object.entries(config.socialMedia).map(([name, url]) => (
                            <a key={name} href={url} target="_blank" rel="noopener noreferrer">
                                {name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; 2024 {config.appName}. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer; 