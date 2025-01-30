// import { Navbar } from "./View/nvabar";
import { OperatorDetails } from "./View/operator/operator_details";
import Login from "./View/user/Login";
import Register from "./View/user/Registration";
import { Routes, Route } from "react-router-dom";
import Home from "./View/Home/home";
import ForgotPassword from "./View/user/forgot_password";
import BusBooking from "./View/user/BusBooking";
import BusSearch from "./View/user/BusSearch";
import SeatBooking from "./View/user/SeatBooking";
import AddBus from "./View/Bus/AddBus";

import OperatorHome from "./View/operator/OperatorHome";




function App() {
  return (
    
    <Routes>
      <Route path="operator/Details" element ={<OperatorDetails/>}/>
      <Route path="OperatorHome" element={<OperatorHome/>}/>
      <Route path="login" element ={<Login/>}/>
      <Route path="register" element ={<Register/>}/>
      <Route path="/" element ={<Home/>}/>
      <Route path="forgot-password" element ={<ForgotPassword/>}/>
      <Route path="BusBooking" element={<BusBooking/>}/>
      <Route path="BusSearch" element={<BusSearch/>}/>
      <Route path="SeatBooking" element={<SeatBooking/>}/>
<Route path="addBus" element={<AddBus/>}/>
      </Routes>
    
  );
}

export default App;
