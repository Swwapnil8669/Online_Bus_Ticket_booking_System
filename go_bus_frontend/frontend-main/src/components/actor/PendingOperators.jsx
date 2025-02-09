import axios from 'axios';
import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function PendingOperators({operator, key , setOperatorList, operatorList}) {

    const navigate  = useNavigate();
    
    const AllowOperator = () =>  {
        // 8080/bus/admin/approve/{operatorId}
        const token = sessionStorage['token']
        axios
        .get(`http://localhost:8080/bus/admin/approve/${operator.id}`,operator.id,{
            headers: {
                token
            }
        })
        .then((response) => {
            console.log(response.data);
           // var resData = response.data;
            //rerender the page
            let oid = response.data;

            let list = operatorList.map(e=>{
                if(e.id == oid.id ){
                    e.approved = true;
                }
                return e;
            });

            setOperatorList(list);
        })
        .catch((err) => {
            console.log("Error in  Pending Operators Axios", err);
        })

    }

    //http://localhost:8080/bus/admin/{operatorId}
    const RejectOperator = () => {
        const token = sessionStorage['token']
        axios
        .delete(`http://localhost:8080/bus/admin/${operator.id}`,operator.id,{
            headers: {
                token
            }
        })
        .then((response)=>{
            console.log("Operator with id : "+ operator.id +" is Rejected", response.data);

        })
        .catch()

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
            <Button className='btn btn-warning' onClick={AllowOperator} >
                Approve
            </Button>
        </td>
        <td>   
            <Button className='btn btn-danger' onClick={RejectOperator}>
                Reject
            </Button>
        </td>
        
    </tr>
</>
}

export default PendingOperators
