import axios from 'axios';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



function ApprovedOperators({operator, key}) {
    
    
    const navigate = useNavigate();
    const openOperatorBusList = () => {
        const token = sessionStorage['token']
//8080/bus/operator/{operatorId}
        axios.get(`http://localhost:8080/bus/operator/${operator.id}`,operator.id,{
            headers: {
                token
            }
        })
        .then((res)=> {
            var busL = res.data;
            console.log("response after gettig Buses from operatorId", busL);
            navigate("/adminBusList",{state:{busL}})

        })
        .catch()
    }

//delete Operator -> [Admin has this authority]
////http://localhost:8080/bus/admin/{operatorId}
    const deleteOperatorBusList = () => {
        const token = sessionStorage['token']
        axios
        .delete(`http://localhost:8080/bus/admin/${operator.id}`,operator.id,{
            headers: {
                token
            }
        })
        .then((response)=>{
            console.log("Operator with id : "+ operator.id +" is Deleted", response.data);
        })
        .catch((err) => {
            console.log("error in deleting Operator by Admin", err.response.data);
        })
    }

    return <>                
    <tr key = {key}>
        <td>
            {operator.id}
        </td>
        <td>
            {operator.companyName}
        </td>
        <td>
            {operator.companyRegNo}
        </td>
        <td>
            {operator.operatorEmail}
        </td>
        <td>
            {operator.operatorPhone}
        </td>
        <td>
        {operator.operatorUid}
        </td>
        <td>
            {/**type="button" className='btn btn-success' */}
            <Button variant='primary' onClick={openOperatorBusList}>
                Open
            </Button>
        </td>
        <td>
            
            <Button type="button" className='btn btn-danger'onClick={deleteOperatorBusList} >
                Delete
            </Button>
        </td>
        
    </tr>
</>
}

export default ApprovedOperators
