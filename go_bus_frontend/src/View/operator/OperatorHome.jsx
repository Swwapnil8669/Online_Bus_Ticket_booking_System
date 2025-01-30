import React from 'react';
import './OperatorHome.css';  

function OperatorHome() {
  return (
    <div>
      
      <div className="operator-home">
      <img src= "./img/bus.jpg" alt="Bus" className="background-image" /> 
      <div className="overlay" style={{width:"100px", paddingLeft:"90%"}}>
      <a href="#" class="btn btn-secondary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Logout</a>
      <ul style={{paddingRight:"20px"}}>
            <li><a href="" target='t1'>AddBus</a></li>
            <li><a href="" target='t1'>Bus Shedule</a></li>
          </ul>
      </div>
      <div className="overlay"> 
        <img src="./img/GoBuslogo.png" alt="Logo" className="logo" />
        <div id="d2" style={{backgroundColor:"white",height:"1050px"}}>
            <iframe id="t1" name='t1' height="100%" width="100%"></iframe>
        </div>
      </div>
      </div>
    </div>
  );
}

export default OperatorHome;