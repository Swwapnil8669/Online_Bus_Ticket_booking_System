import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Container, Row, Col, Alert, Button } from "react-bootstrap";
function OperatorDashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const [operator, setOperator] = useState(location.state.responseOperator);
  const [busList, setBusList] = useState([]);
  const [scheduleList, setScheduleList] = useState([]);
  const[isApproved, setIsApproved] = useState(location.state.approved);

  ///bus/operator/schedule/{rtoRegNo}
  const handleSeeSchedules = (rtoRegNo) => {
    const token = sessionStorage['token']
    axios
      .get(`http://localhost:8080/bus/operator/schedule/${rtoRegNo}`, rtoRegNo,{
        headers: {
          token
        }
      })
      .then((res) => {
        var schedulesList = res.data;
        console.log(
          "response after gettig Buses from operatorId",
          schedulesList
        );
        navigate("/operatorBusSchedulesList", {
          state: { schedulesList, rtoRegNo },
        });
      })
      .catch();
  };
  const handleAddSchedule = (rtoRegNo) => {
    navigate("/addSchedule", { state: { rtoRegNo ,operator} });
  };

  const handleDeleteBus = (rtoRegNo) => {
    console.log("rto: ", rtoRegNo);
    //bus/operator/deleteBus/{busId}
    axios
      .delete(
        `http://localhost:8080/bus/operator/deleteBus/${rtoRegNo}`,
        rtoRegNo
      )
      .then((res) => {
        var didDelete = res.data;
        console.log(didDelete);
        getBusList();
      });
  };
  useEffect(() => {
    getBusList();
  }, []);
  const getBusList = () => {
    console.log("in use effect");
    axios
      .get(`http://localhost:8080/bus/operator/${operator.id}`)
      .then((res) => {
        var busListResponse = res.data;
        console.log("list of bus : ", busListResponse);
        setBusList(busListResponse);
      });
  };
  const handleAddBus = () => {
    console.log("hb called");
    navigate("/addBus", { state: { operatorId: operator } });
  };
  return (
    <>
    {isApproved ? 
    <>
       <div style={{display:"flex", marginLeft:"25%"}}>
       <h5>Welcome: {operator.companyName}   </h5>
       <br></br>
       <button style={{display:"block"}} class="btn btn-success" onClick={handleAddBus}>
             Add Bus
           </button>
        </div>
       <div style={{display:'flex',  justifyContent: 'center', margin:"auto" }}>
       
       
        <br />
        
         <div>
         <br />
           <table className="table table-responsive" style={{ margin: "auto" }}>
             <thead class="thead-dark">
               <tr>
                 <th scope="col">rtoRegNo</th>
                 <th scope="col">seatCapacity</th>
                 <th scope="col">aC</th>
                 <th scope="col">sleeper</th>
                 <th scope="col">See Schedules</th>
                 <th scope="col">Add Schedules</th>
                 <th scope="col">Delete Bus</th>
               </tr>
   
               {busList.map((bus) => {
                 return (
                   <>
                     <tr key={bus.rtoRegNo}>
                       <td>{bus.rtoRegNo}</td>
                       <td>{bus.seatCapacity}</td>
                       <td>{bus.ac ? "Available" : "NA"}</td>
                       <td>{bus.sleeper ? "Available" : "NA"}</td>
                       <td>
                         <button
                           className="btn btn-primary"
                           onClick={() => handleSeeSchedules(bus.rtoRegNo)}
                         >
                           See Schedules
                         </button>
                       </td>
                       <td>
                         <button
                           className="btn btn-warning"
                           onClick={() => handleAddSchedule(bus.rtoRegNo)}
                         >
                           Add Schedule
                         </button>
                       </td>
                       <td>
                         <button
                           className="btn btn-danger"
                           onClick={() => handleDeleteBus(bus.rtoRegNo)}
                         >
                           Delete Bus
                         </button>
                       </td>
                     </tr>
                   </>
                 );
               })}
             </thead>
           </table>
         </div>
         {/* bus list ends here */}
       </div>
    </>
    : <Container>
    <Row className="justify-content-md-center">
      <Col md={6}>
        <Alert variant="success">
          <Alert.Heading>Your Approval is still pending</Alert.Heading>
          
          <hr />
          <center>
            <Button
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Button>
          </center>
        </Alert>
      </Col>
    </Row>
  </Container>}
   
    </>
  );
}

export default OperatorDashboard;
