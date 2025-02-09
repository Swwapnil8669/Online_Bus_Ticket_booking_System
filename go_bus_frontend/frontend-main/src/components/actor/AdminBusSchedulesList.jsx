import { faBus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function AdminBusSchedulesList() {
    const location = useLocation();
    const[scheduleList, setScheduleList] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        const schedulesList = location.state.schedulesList;
        setScheduleList(schedulesList);
        console.log("---->", schedulesList)
    },[])
  const showBookings = (scheduleId)=>{
    const token = sessionStorage['token']
    axios.get(`http://localhost:8080/bus/operator/bookings/${scheduleId}`,scheduleId,{
        headers: {
            token 
            }
    })
    .then((res)=> {
        var bookings = res.data;
        return bookings
        
    }).then(data=>{
        let bookings = data;
        //console.log("response after gettig Buses from operatorId", bookings);
       navigate("/adminBusSchedulesBookingsList",{state:{bookings}})
    })
    .catch()    
  }

  return (
   <div  style={{display:'flex',  justifyContent: 'center', margin:"auto" }}>
   <div>
            <table className='table table-responsive' style={{margin:"10px"}}>
         <thead class="thead-dark">
            <tr>
            <th>
                scheduleId
                </th>
                <th>
                arrivalDate
                </th>
                <th>
                arrivalTime
                </th>
                <th>
                boardingPoint
                </th>
                <th>
                busFare
                </th>
                <th>
                departureDate
                </th>
                <th>
                departureTime
                </th>
                <th>
                destinationCity
                </th>
                <th>
                destinationPoint
                </th>
                <th>
                <FontAwesomeIcon icon={faBus} fa-solid className="headerIcon" style={{margin:'2px', marginLeft:'25px',color:"cyan"}} ></FontAwesomeIcon>
                </th>
                
                


            </tr>



        {scheduleList.map((sch)=>{
            return <>

                         <tr>
                            <td>
                               { sch.scheduleId}
                            </td>
                            <td>
                               { sch.arrivalDate}
                            </td>
                            <td>
                            {sch.arrivalTime}
                            </td>
                            <td>
                                {sch.boardingPoint}
                            </td>
                            <td>
                                {sch.busFare}
                            </td>
                            <td>
                                {sch.departureDate}
                            </td>
                            <td>
                                {sch.departureTime}
                            </td>
                            <td>
                                {sch.destinationCity}
                            </td>
                            <td>
                                {sch.destinationPoint}
                            </td>
                            <td>
                                <button className='btn btn-primary' onClick={()=>showBookings(sch.scheduleId) }>
                                    Bookings
                                </button>
                            </td>
                            {/* <td>
                                <button className='btn btn-danger'>
                                    Delete
                                </button> 
                            </td> */}
                        </tr>
            </>
        })}
        </thead>
        </table>
    </div>
    </div>
  )
}

export default AdminBusSchedulesList
