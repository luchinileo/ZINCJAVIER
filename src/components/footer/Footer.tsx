import React from 'react';
import './Footer.module.css'; 

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
      <p>
          <i className="material-icons"> Telefono :</i>  440098
        </p>
        <p>
          <i className="material-icons"> email :  </i>  zingueria@gmail.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;