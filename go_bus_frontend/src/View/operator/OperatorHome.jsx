import React from 'react';
import './OperatorHome.css';  

function OperatorHome() {
  return (
    <div className="operator-home">
      <img src= "./img/bus.jpg" alt="Bus" className="background-image" /> 
      <div className="overlay"> 
        <img src="./img/GoBuslogo.png" alt="Logo" className="logo" />
        <button className="enquire-button">logout</button>
      </div>
    </div>
  );
}

export default OperatorHome;