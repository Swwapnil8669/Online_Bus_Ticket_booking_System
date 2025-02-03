import { faBus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'





function AdminBusList() {

    const location = useLocation();
    const [busList,setBusList] = useState([]);
    console.log("Inside Bus List Page", location.state);
    const navigate = useNavigate();
    
    
    useEffect(()=>{
        const busL = location.state.busL;
        setBusList(busL);
    },[])
  
    const openBusSchedules = (rtoRegNo) => {
        console.log(rtoRegNo)
       // 8080/bus/operator/schedule/{rtoRegNo}
        axios.get(`http://localhost:8080/bus/operator/schedule/${rtoRegNo}`,rtoRegNo)
        .then((res)=> {
            var schedulesList = res.data;
            console.log("response after gettig Buses from operatorId", schedulesList);
           navigate("/adminBusSchedulesList",{state:{schedulesList}})
            
        })
        .catch()



    }

  return (
    <div style={{display:'flex',  justifyContent: 'center', margin:"auto" }}>
    <div >
         <table className='table table-responsive ' style={{margin:"10px"}}>
         <thead class="thead-dark">
            <tr>
                <th>
                    rtoRegNo
                </th>
                <th>
                   seatCapacity
                </th>
                <th>
                    aC
                </th>
                <th>
                    sleeper
                </th>
                <th>
                <FontAwesomeIcon icon={faBus} fa-solid className="headerIcon" style={{margin:'2px', marginLeft:'25px',color:"cyan"}} ></FontAwesomeIcon>
                </th>
                
                


            </tr>



        {busList.map((bus)=>{
            return <>

                         <tr key={bus.rtoRegNo}>
                            <td>
                               { bus.rtoRegNo}
                            </td>
                            <td>
                            {bus.seatCapacity}
                            </td>
                            <td>
                                {bus.ac ? "Available" : "NA"}
                            </td>
                            <td>
                                {bus.sleeper ? "Available" : "NA"}
                            </td>
                            <td>
                                <button className='btn btn-primary' onClick={()=>openBusSchedules(bus.rtoRegNo)}>
                                    Schedules
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

export default AdminBusList
