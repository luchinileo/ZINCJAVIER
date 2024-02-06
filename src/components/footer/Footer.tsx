import React from 'react';
import './Footer.module.css'; 

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; 2024 Tu Empresa - Todos los derechos reservados</p>
        <p>Contacto: info@tuempresa.com</p>
      </div>
    </footer>
  );
};

export default Footer;