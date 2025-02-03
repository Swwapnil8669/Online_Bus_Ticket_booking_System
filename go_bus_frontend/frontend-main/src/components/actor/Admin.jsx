import { faBus, faCircleExclamation, faExclamation, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from '../../App';
import ApprovedOperators from './ApprovedOperators';
import PendingOperators from './PendingOperators';

/*
CODE EXPLANATION
 *  To navigate from one page to another while taking state to next page use below code:
        navigate("/admin",{state : {responseCustomer}}); 
    here responseCustomer is the object we want to send to the nextPage i.e /admin
 *      const location = useLocation();
        const [admin,setAdmin] = useState(location.state.responseCustomer);
    To use this state on admin page/ next page use below code:     
 */

function Admin() {
    const navigate = useNavigate();
    const location = useLocation();
    const [admin,setAdmin] = useState(location.state.responseCustomer);
    const [myContext, setMyContext] = useContext(UserContext);
    const [operatorList,setOperatorList] = useState([])
    
    //const data = navigate?.getState()?.state?.data;
    useEffect(()=>{       
        console.log("use effect called")
        setMyContext(admin);
        //var myContext = admin;
        //console.log(myContext)
        //setMyContext(myContext);
       
    axios
    .get(`http://localhost:8080/bus/admin`)
    .then((res)=> {

        var operatorListGet = res.data;
        console.log("list of bus Operators is : ",operatorListGet);
        setOperatorList(operatorListGet);

    })
    }, [])

  

   

  

  return (
    <div style={{display:'flex',  justifyContent: 'center', margin:"auto" }}>
        
     <div style={{display:"flex"}}>
        {admin.custEmail}
        {admin.custFirstName}
     </div>
        
        
        
        {/**style={{margin:"10px", }} */}
        {/*code to print operatorList*/}
        <div >
            <br />
            <table className='table table-responsive table-hover ' style={{margin: 'auto'}}>
            <thead class='thead-dark'>
            <tr>
               {/**<th scope="col">#</th> */}
                <th scope="col">
                    id
                </th>
                <th scope="col">
                    companyName
                </th>
                <th scope="col">
                    companyRegNo
                </th>
                <th scope="col">
                    operatorEmail
                </th>
                <th scope="col">
                    operatorPhone
                </th>
                <th scope="col">
                operatorUid
                </th>
                <th scope="col">
                <FontAwesomeIcon icon={faBus} fa-solid className="headerIcon" style={{margin:'2px', marginLeft:'25px',color:"cyan"}} ></FontAwesomeIcon>
                </th>
                <th scope="col">
                
                <FontAwesomeIcon icon={faTriangleExclamation} fade className="headerIcon" style={{margin:'2px', marginLeft:'25px',color:"red", height:"15px"}} ></FontAwesomeIcon>
                </th>
            </tr>

                {operatorList.map((operator,key)=>{
                    if(operator.approved==true){
                        return <ApprovedOperators operator={operator} key={key}></ApprovedOperators>
                    }else{
                        return <PendingOperators operator={operator} operatorList={operatorList}  setOperatorList = {setOperatorList}  key={key}></PendingOperators>
                    }
                   
                })}   
                </thead>
            </table>        
        </div>
    </div>
  )
}

export default Admin
