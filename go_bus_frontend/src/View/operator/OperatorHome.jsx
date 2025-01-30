import React from 'react';
import './OperatorHome.css';
import logo from 'public/img/GoBuslogo.png'; 
import busImage from 'public/img/bus.jpg'; 

function OperatorHome() {
  return (
    <div className="operator-home">
      <img src={busImage} alt="Bus" className="background-image" /> 
      <div className="overlay"> 
        <img src={logo} alt="Logo" className="logo" />
        <button className="enquire-button">logout</button>
      </div>
    </div>
  );
}

export default OperatorHome;