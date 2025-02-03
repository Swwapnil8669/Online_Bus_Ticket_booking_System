import { useState } from "react";
import Seats from "./Seats";
import seat from "./AvailableSeats.module.css";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";

const AvailableSeats = ({ seatAndScheduleDetails, setUpdatedSchduleState }) => {
  //   const history = useHistory();
  const [totalFair, setTotalFair] = useState(0.0);
  const navigate = useNavigate();
  console.log("from available seat");
  var va = seatAndScheduleDetails;

  // schedule s object
  console.log(seatAndScheduleDetails);

  // var va = seatAndScheduleDetails;

  //  const handleSeatDetails = () => {};

  return (
    <div className={`${seat.cont}`}>
      <div style={{ marginLeft: "20px" }}>
        {/* <div>10 Seats Available</div> */}
        <span style={{ fontSize: "12px", color: "#9b9b9b" }}>
          Click on Seat to select/ deselect
        </span>
      </div>
      <div className={`${seat.seatSelection}`}>
        <div className={`${seat.selectseatCont}`}>
          <Seats
            seatDetails={seatAndScheduleDetails}
            setUpdatedSchduleState={setUpdatedSchduleState}
            fair={totalFair}
            setFair={setTotalFair}
          />
        </div>

        {/*side div bording and destination */}
        <div className={`${seat.seatFormCont}`}>
          <div className={`${seat.formCont}`}>
            <form className={`${seat.seatForm}`}>
              <span style={{ color: "gray" }}>Bording point</span>
              <input
                style={{ marginBottom: "10px" }}
                value={seatAndScheduleDetails.boardingPoint}
                id="standard-basic"
                label="Boarding Point"
              />
              <span style={{ color: "gray" }}>destination point</span>
              <input
                style={{ marginBottom: "10px" }}
                value={seatAndScheduleDetails.destinationPoint}
                id="standard-basic"
                label="Dropping Point"
              />
              <button
                style={{ marginTop: "10px" }}
                variant="contained"
                color="primary"
                onClick={() => navigate("/confirmBus", { state: { va } })}
              >
                Continue
              </button>
              <br />
              <h3>Total Fare : {totalFair} /-</h3>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableSeats;
