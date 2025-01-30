// import { Navbar } from "./View/nvabar";
import { OperatorDetails } from "./View/operator/operator_details";
import Login from "./View/user/Login";
import Register from "./View/user/Registration";
import { Routes, Route } from "react-router-dom";
import Home from "./View/Home/home";
import ForgotPassword from "./View/user/forgot_password";
import BusBooking from "./View/user/BusBooking";
import BusSearch from "./View/user/BusSearch";
import SeatSelection from "./View/user/SeatSelection";



function App() {
  return (
    
    <Routes>
      <Route path="operator/Details" element ={<OperatorDetails/>}/>
      <Route path="login" element ={<Login/>}/>
      <Route path="register" element ={<Register/>}/>
      <Route path="/" element ={<Home/>}/>
      <Route path="forgot-password" element ={<ForgotPassword/>}/>
      <Route path="BusBooking" element={<BusBooking/>}/>
      <Route path="BusSearch" element={<BusSearch/>}/>
      <Route path="SeatSelection" element={<SeatSelection/>}/>

      </Routes>
    
  );
}

export default App;
