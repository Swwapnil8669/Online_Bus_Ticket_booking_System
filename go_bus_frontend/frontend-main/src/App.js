import Navbar from "./components/navbar/Navbar";
import { createContext, useState } from "react";
import Home from "./components/home/Home";
import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";
import SearchResult from "./components/searchResult/SearchResult";
import Modal from "./components/navbar/modal/Modal";
import Admin from "./components/actor/Admin";
import AdminBusList from "./components/actor/AdminBusList";
import AdminBusSchedulesList from "./components/actor/AdminBusSchedulesList";
import AdminBusSchedulesBookingsList from "./components/actor/AdminBusSchedulesBookingsList";

import ScheduleContext from "./components/context/ScheduleContext";

import Footer from "./components/footer/Footer";
import OperatorLoginCode from "./components/operator/OperatorLoginCode";
import OperatorDashboard from "./components/operator/OperatorDashboard";
import OperatorBusSchedulesList from "./components/operator/OperatorBusScheduleList";
import OperatorBusSchedulesBookingsList from "./components/operator/OperatorBusSchedulesBookingsList";
import AddSchedule from "./components/operator/AddSchedule";
import AddBus from "./components/operator/AddBus";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import PaymentPage from "./components/booking/PaymentPage";
import Bill from "./components/booking/Bill";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OperatorPostRegister from "./components/operator/OperatorPostRegister";
import FunctionContext from "./components/context/FunctionContext";
import CustomerBookings from "./components/customer/CustomerBookings";
export const UserContext = createContext(null);

function App() {
  //

  const [myContext, setMyContext] = useState({});
  const [busSearchResult, setBusSearchResult] = useState([]);

  const showToast = (msg) => {
    toast(msg);
  };
  const navigate = useNavigate();
  var res;
  var v;

  //url--
  // ---/bus/search/{sourceCity}/{destinationCity}/{departureDate}
  const handleSearch = (sourceCity, destinationCity, departureDate) => {
    //console.log(departureDate);
    axios
      .get(
        `http://localhost:8080/bus/search/${sourceCity}/${destinationCity}/${departureDate}`
      )
      .then((response) => {
        v = response.data;
        setBusSearchResult(v);
        navigate("/search");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  /*TO use useContext Hook inside functional component
    import React, {useContext} from 'react'
    import {UserContext} from './App'
    
    export default functionBlahBlah(){
      const contextName = useContext(UserContext)-
    }
  */
  return (
    <>
      {/* <Modal></Modal> */}
      <div style={{ minHeight: "100vh" }}>
        <ScheduleContext.Provider value={[busSearchResult, setBusSearchResult]}>
          <UserContext.Provider value={[myContext, setMyContext]}>
            <FunctionContext.Provider value={{ showToast }}>
              <Navbar showToast={showToast}></Navbar>
              <ToastContainer theme="dark" style={{ marginTop: "10px" }} />
              <Routes>
                {/* operator routes==== */}
                <Route
                  path="/operatorLogin"
                  element={<OperatorLoginCode></OperatorLoginCode>}
                ></Route>

                <Route
                  path="/operatorDashboard"
                  element={<OperatorDashboard></OperatorDashboard>}
                ></Route>

                <Route
                  path="/operatorBusSchedulesList"
                  element={
                    <OperatorBusSchedulesList></OperatorBusSchedulesList>
                  }
                ></Route>

                <Route
                  path="/operatorBusSchedulesBookingsList"
                  element={
                    <OperatorBusSchedulesBookingsList></OperatorBusSchedulesBookingsList>
                  }
                ></Route>

                <Route
                  path="/addSchedule"
                  element={<AddSchedule></AddSchedule>}
                ></Route>
                <Route path="/addBus" element={<AddBus></AddBus>}></Route>
                <Route
                  path="/operatorPostRegister"
                  element={<OperatorPostRegister></OperatorPostRegister>}
                ></Route>

                {/* operator routes end here==== */}
                {/* customer route starts here */}

                <Route
                  path="/customerBookings"
                  element={<CustomerBookings></CustomerBookings>}
                ></Route>
                {/* customer route ends here */}
                <Route
                  path="/"
                  element={<Home handleSearch={handleSearch}></Home>}
                />

                <Route
                  path="/search"
                  element={
                    <SearchResult
                      busSearchResult={busSearchResult}
                      test={"test"}
                    ></SearchResult>
                  }
                ></Route>

                <Route path="/login" element={<Modal></Modal>}></Route>

                <Route
                  path="/confirmBus"
                  element={<ProtectedRoute></ProtectedRoute>}
                >
                  {" "}
                </Route>

                <Route
                  path="/payment-page"
                  element={<PaymentPage></PaymentPage>}
                />
                <Route path="/bill" element={<Bill></Bill>} />

                <Route path="/admin" element={<Admin></Admin>}></Route>

                <Route
                  path="/adminBusList"
                  element={<AdminBusList></AdminBusList>}
                ></Route>

                <Route
                  path="/adminBusSchedulesList"
                  element={<AdminBusSchedulesList></AdminBusSchedulesList>}
                ></Route>

                <Route
                  path="/adminBusSchedulesBookingsList"
                  element={
                    <AdminBusSchedulesBookingsList></AdminBusSchedulesBookingsList>
                  }
                ></Route>
              </Routes>
            </FunctionContext.Provider>
          </UserContext.Provider>
        </ScheduleContext.Provider>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
