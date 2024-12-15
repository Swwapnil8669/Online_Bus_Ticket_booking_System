// import { Navbar } from "./View/nvabar";
import { OperatorDetails } from "./View/operator/operator_details";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="operator/Details" element ={<OperatorDetails/>}/>
    </Routes>
     
    
  );
}

export default App;
