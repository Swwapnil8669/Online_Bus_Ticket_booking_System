import { useContext } from "react";
import { UserContext } from "../../App";
import { Outlet } from "react-router-dom";
import Modal from "../navbar/modal/Modal";
import { useLocation } from "react-router-dom";
import ConfirmBooking from "../booking/ConfirmBooking";




const ProtectedRoute = ()=>{

    
    const location = useLocation();
    console.log("--------------from protected route------------------")
    //location.state.seatAndScheduleDetails -> schedule onject

    console.log(location)

    const[myContext,setMyContext] = useContext(UserContext);

    if( !myContext.isAuth ){
    
        return(<Modal scheduleState = {location}></Modal>);

    }

    return <ConfirmBooking location = {location} ></ConfirmBooking>;
}


export default ProtectedRoute;