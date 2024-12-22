// import { Navbar } from "./View/nvabar";
import { OperatorDetails } from "./View/operator/operator_details";
import Login from "./View/user/Login";
import Register from "./View/user/Registration";
import { Routes, Route } from "react-router-dom";
import Home from "./View/Home/home";
import ForgotPassword from "./View/user/forgot_password";

function App() {
  return (
    <Routes>
      <Route path="operator/Details" element ={<OperatorDetails/>}/>
      <Route path="login" element ={<Login/>}/>
      <Route path="register" element ={<Register/>}/>
      <Route path="/" element ={<Home/>}/>
      <Route path="forgot-password" element ={<ForgotPassword/>}/>

    </Routes>
     
    
  );
}

export default App;
