import React from "react";
import logo from '../Assets/foto_simp.jpg';

function LogoInferiore() {
  return (
     <div 
      className="text-center my-4" 
      style={{ maxWidth: "100%" }}
    >
      <img 
        src={logo} 
        alt="Logo" 
        className="img-fluid" 
        style={{ 
          maxWidth: "200px",    // larghezza massima del logo
          height: "auto"        // mantiene le proporzioni
        }} 
      />
    </div>
  );
}

export default LogoInferiore;
