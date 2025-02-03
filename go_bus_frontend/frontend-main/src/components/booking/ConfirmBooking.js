import { useLocation } from "react-router-dom";

import React, { useState } from "react";
import {ReviewItinerary} from './ReviewItinerary';
import { TravellerInformation } from "./TravellerInformation";
import {FareDetails} from './FareDetails';



function ConfirmBooking( {location} ){
    const[travellerInfo, setTravellerInfo] = useState([]);

    console.log("from confirmbooking trvinfo======")
    console.log(travellerInfo)
    
    return (
		<div style={{display:"flex",flexDirection:"row"}}>
            <div style={{width:"75%",padding:"2%"}}>
            <ReviewItinerary scheduleInfo = {location.state.va}/>
            
             <TravellerInformation setTravellerInfo={setTravellerInfo} scheduleInfo = {location.state.va}/> 
            </div>
            <div  style={{width:"25%",padding:"2%"}}>

            <FareDetails travellerInfo={travellerInfo} setTravellerInfo={setTravellerInfo} scheduleInfo = {location.state.va}/>
            </div> 
		</div>
	);
}

export default ConfirmBooking;




{/* <div>
          
          <h1>helllo</h1>
          {
              scheduleState.state.seatAndScheduleDetails.seats.map(e=>{    
                  console.log("in map: ", e)           
                  if(e.isSelected){
                      console.log("in map: ", e)           
                      return <h1>{e.seatNo}</h1>
                  }
              })
          }
          </div> */}


