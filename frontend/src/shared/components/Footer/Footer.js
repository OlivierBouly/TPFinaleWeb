import React from "react";
import "./Footer.css"

const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer className="footer">Coordonateur : Sylvain Labranche <br/>   Courriel : <a href="mailto: sylvain.labranche@cmontmorency.qc.ca">sylvain.labranche@cmontmorency.qc.ca</a><br/>Dernière modification : 2023-05-16</footer>;
  };
  
  export default Footer;