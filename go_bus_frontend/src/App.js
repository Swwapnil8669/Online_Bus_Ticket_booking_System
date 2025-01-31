// import { Navbar } from "./View/nvabar";
import { OperatorDetails } from "./View/operator/operator_details";
import Login from "./View/user/Login";
import Register from "./View/user/Registration";
import { Routes, Route } from "react-router-dom";
import Home from "./View/Home/home";
import ForgotPassword from "./View/user/forgot_password";
import BusBooking from "./View/user/BusBooking";
import SeatBooking from "./View/user/SeatBooking";
import AddBus from "./View/Bus/AddBus";

import OperatorHome from "./View/operator/OperatorHome";
import OperatorBuses from './View/Bus/OperatorBuses';
import PassengerDetails from "./View/PassengerDetails/PassengerDetails";
import Payment from "./View/Payment/Payment";




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
      <Route path="SeatBooking" element={<SeatBooking/>}/>
      <Route path="addBus" element={<AddBus/>}/>
      <Route path="yourBuses" element={<OperatorBuses/>}/>
      <Route path="PassengerDetails" element={<PassengerDetails/>}/>
      <Route path="Payment"element={<Payment/>}/>
      </Routes>
    
  );
}

export default App;
