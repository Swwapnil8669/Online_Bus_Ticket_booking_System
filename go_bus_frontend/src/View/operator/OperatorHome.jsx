import React from 'react';
import './OperatorHome.css';  

function OperatorHome() {
  return (
    <div>
      
      <div className="operator-home">
      <img src= "./img/bus.jpg" alt="Bus" className="background-image" /> 
      <div className="overlay" style={{width:"100px", paddingLeft:"90%"}}>
      <a href="#" class="btn btn-secondary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Logout</a>
      </div>
      <div className="overlay"> 
        <img src="./img/GoBuslogo.png" alt="Logo" className="logo" />
        <div className='linkes'>
         <table>
          <tr>
            <td><a href=''></a>AddBus</td>
            <td><a href=''></a>BusShedule</td>
          </tr>
         </table>
        </div>
      </div>
      </div>
    </div>
  );
}

export default OperatorHome;