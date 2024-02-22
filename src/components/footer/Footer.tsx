import React from 'react';
import './Footer.module.css'; 

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
      <p>
          <i > Telefono :</i>  440098
        </p>
        <p>
          <i > email :  </i>  zingueria@gmail.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;