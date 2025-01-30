import React from 'react';
import './OperatorHome.css';  
import { OperatorNavbar } from './../Navbar/OperatorNavbar';
import { Link } from 'react-router-dom';
import Footer from './../Home/Fotter';

function OperatorHome() {
  return (
    <div>
    <div
      className="bg"
      style={{
        backgroundImage: "url('/img/bus.jpg')",
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ><div className='p-4'>
      <OperatorNavbar />
      </div>
      <div className="content">
        <h1 className="heading">Welcome Operator</h1>
        <p className="para">Manage your buses here</p>

        <div className='mt-4' >
          <Link to="/yourBuses">
          <button style={{color:"black", backgroundColor:"skyblue", width:"30%"}} className="btn">Your Buses</button>
          </Link>
        </div>
        <div className='mt-4' >
          <Link to="/addbus">
          <button style={{color:"black", backgroundColor:"skyblue", width:"30%"}} className="btn">Add Bus</button>
          </Link>
        </div>
      </div>
      <div className='fixed-bottom' style={{width:"100%"}} >
    <Footer/>
    </div>
    </div >
    
    </div>
  );
}

export default OperatorHome;
