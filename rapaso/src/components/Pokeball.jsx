import React from "react";
import "../Pokeball.css"; // Archivo de estilos para la animación

const PokeballAnimation = () => {
  return (
    <div className="pokeball-animation-container">
    
      <div className="pokeball-animation">
            <div className="pokeball-button">
                    <div className="pokeball-top"></div>
                    <div className="pokeball-top-button"></div>
                    <div className="pokeball-bottom"></div>
            </div>
            
        
      </div>
    </div>
  );
};

export default PokeballAnimation;







/*import React, { useState } from 'react';
import '../Pokeball.css'; // Importa el archivo de estilos CSS para la Pokeball

const Pokeball = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  // Maneja el evento de clic en la Pokeball
  const handleClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 2000); // Cambia la duración de la animación si es necesario
    }
  };

  return (
    <div className={`pokeball ${isAnimating ? 'animate' : ''}`} onClick={handleClick}>
      <div className="pokeball-top"></div>
      <div className="pokeball-bottom"></div>
      <div className="pokeball-line"></div>
    </div>
  );
};

export default Pokeball;*/
