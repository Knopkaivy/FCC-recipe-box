import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__copyright">&copy; {new Date().getFullYear()}</div>
    </div>
  );
};

export default Footer;
