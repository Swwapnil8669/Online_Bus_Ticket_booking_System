import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function OperatorBusSchedulesList() {
  const location = useLocation();
  const [scheduleList, setScheduleList] = useState([]);
  const [rtoRegNo, setRtoRegNo] = useState(location.state.rtoRegNo);
  const navigate = useNavigate();
  useEffect(() => {
    const schedulesList = location.state.schedulesList;
    setScheduleList(schedulesList);
    console.log("---->", schedulesList);
    console.log("rto reg no:: ", rtoRegNo);
  }, []);
  const showBookings = (scheduleId) => {
    axios
      .get(
        `http://localhost:8080/bus/operator/bookings/${scheduleId}`,
        scheduleId
      )
      .then((res) => {
        var bookings = res.data;
        console.log("response after gettig booking from schId", bookings);
        navigate("/operatorBusSchedulesBookingsList", { state: { bookings } });
      })
      .catch();
  };
  const getScheduleList = (rtoRegNo) => {
    const token = sessionStorage['token']
    axios
      .get(`http://localhost:8080/bus/operator/schedule/${rtoRegNo}`, rtoRegNo,{
        headers: {
     token
        }
      })
      .then((res) => {
        var schedulesList = res.data;
        setScheduleList(schedulesList);
        setScheduleList(schedulesList);
      });
  };
  const deleteSchedule = (scheduleId) => {
    console.log("schedule id:", scheduleId);
    //bus/operator//deleteSchedule/{scheduleId}
    const token = sessionStorage['token']
    axios
      .delete(
        `http://localhost:8080/bus/operator/deleteSchedule/${scheduleId}`,
        scheduleId,{
          headers: {
            token
          }
        }
      )
      .then((res) => {
        var didDelete = res.data;
        console.log(didDelete);

        getScheduleList(rtoRegNo);
      });
  };
  return (
    <div style={{ height: "100vh", width: "90vw" }}>
      <center>
        <h2>Schedule List</h2>
      </center>
      <table className="table table-responsive" style={{ margin: "10px" }}>
        <thead class="thead-dark">
          <tr>
            <th>scheduleId</th>
            <th>arrivalDate</th>
            <th>arrivalTime</th>
            <th>boardingPoint</th>
            <th>busFare</th>
            <th>departureDate</th>
            <th>departureTime</th>
            <th>sourceCity</th>
            <th>destinationCity</th>
            <th>destinationPoint</th>
            <th></th>
          </tr>

          {scheduleList.map((sch) => {
            return (
              <>
                <tr>
                  <td>{sch.scheduleId}</td>
                  <td>{sch.arrivalDate}</td>
                  <td>{sch.arrivalTime}</td>
                  <td>{sch.boardingPoint}</td>
                  <td>{sch.busFare}</td>
                  <td>{sch.departureDate}</td>
                  <td>{sch.departureTime}</td>
                  <td>{sch.sourceCity}</td>
                  <td>{sch.destinationCity}</td>
                  <td>{sch.destinationPoint}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => showBookings(sch.scheduleId)}
                    >
                      Bookings
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteSchedule(sch.scheduleId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </thead>
      </table>
    </div>
  );
}

export default OperatorBusSchedulesList;
