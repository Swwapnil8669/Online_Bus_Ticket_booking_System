import crd from "./BookingCard.module.css";
// import Button from "@material-ui/core/Button";
// import DotIcon from "@material-ui/icons/FiberManualRecord";
import { useState } from "react";
import MoreDetails from "./busSeat/MoreDetails";
import { FaArrowRight } from "react-icons/fa";
// import { MoreDetails } from "./moreDetails/MoreDetails";

const amenities1 = {
  toilet: process.env.PUBLIC_URL + "/amenities/toilet.png",
  chargingPort: process.env.PUBLIC_URL + "/amenities/chargingPort.png",
  wifi: process.env.PUBLIC_URL + "/amenities/wifi.png",
  sheetsPillow: process.env.PUBLIC_URL + "/amenities/sheetsPillow.png",
  complimentaryFood:
    process.env.PUBLIC_URL + "/amenities/complimentaryFood.png",
};

function countSeat(arr) {
  let count = 0;
  arr.forEach((e) => {
    if (!e.booked) count++;
  });
  return count;
}

//component start here
const BookingCard = ({ sch }) => {
  var availableSeat = countSeat(sch.seats);
  
  var v = sch.seats.map(obj => ({ ...obj, isSelected : false }))
  var update = {...sch,seats : v}; 
  const [updatedSchduleState,setUpdatedSchduleState] = useState(update);
  
  function toTitleCase(str) {
    return str.replace(/\b\w+/g, function (word) {
      return (
        word.charAt(0).toLocaleUpperCase() + word.slice(1).toLocaleLowerCase()
      );
    });
  }


  var sourceCity = toTitleCase(sch.sourceCity);
  var destinationCity = toTitleCase(sch.destinationCity);
  
  var path = `process.env.PUBLIC_URL + "/amenities/toilet.png"`;
  // console.log("bus sch object: ", sch);
  const [toggleDetails, setToggleDetails] = useState(true);
  const handleDetails = (i) => {};
  const handleClose = () => {
    setToggleDetails(true);
  };

  const handleToggle = () => {
    setToggleDetails(!toggleDetails);
  };
  var departureTime = sch.departureTime;
  var arrivalTime = sch.arrivalTime;
  var busFare = sch.busFare;
  var amenities = sch.busAmenities;
  var trueAmenities = [];
  for (const amenity in amenities) {
    if (amenities[amenity] == true) {
      trueAmenities.push(amenity);
    }
  }
  
  return (
    <div className={crd.card}>
      {/* bus info */}
      <div className={crd.busInfo}>
        <div className={`${crd.textLeft}`}>
          <h5 className={`${crd.overflow} ${crd.headding}`}>
            {sch.companyName}
          </h5>
          <u>
            <h5
              style={{ color: "black", fontWeight: "bold" }}
              className={`${crd.overflow} ${crd.subHeadding}`}
            >
              {sch.ac ? "AC | " : " "}
              {sch.sleeper ? "Sleeper" : " "}
            </h5>
          </u>
        </div>
        <div className={`${crd.textCenter}`}>
          <h5 className={`${crd.headding}`}>{departureTime}</h5>
          <h5 className={`${crd.subHeadding}`}>{sourceCity}</h5>
        </div>
        <div>
          <h5 className={`${crd.headding}`}>
          <FaArrowRight />
            {/* <img
              style={{ width: "14px" }}
              src="https://drg5ie3bz46tr.cloudfront.net/travel/rtravel/assets/c6138785.png"
              alt="arrow left"
            /> */}
          </h5>
          {/* <h5 className={`${crd.subHeadding}`}>
            {routeDetails["duration"]}&nbsp;hrs
          </h5> */}
        </div>
        <div>
          <h5 className={`${crd.headding}`}>{arrivalTime}</h5>
          <h5 className={`${crd.subHeadding}`}>{destinationCity}</h5>
        </div>
        <div>
          <h5 className={`${crd.subHeadding}`}>starting</h5>
          <h5 style={{ fontSize: "18px", fontWeight: "400" }}>₹ {busFare}</h5>
        </div>
        <div>
          <div onClick={handleToggle}>
            {/* <Button variant="contained" color="primary">
              Select Seats
            </Button> */}
            <button>Select seats</button>
          </div>

          <h5 className={`${crd.noOfSeats}`}>
            {availableSeat} Seats Available
          </h5>
        </div>
      </div>

      {/* amenities  */}
      <div className={`${crd.AmWrapper}`}>
        <div
          onClick={() => {
            handleDetails(1);
          }}
          className={`${crd.AmCont}`}
        >
          {trueAmenities.map((item, i) => {
            var link = amenities1[item];
          
            return i <= 4 ? (
              <img
                style={{ width: "20px", height: "20px", marginRight: "18px" }}
                src={link}
                alt="facilities"
              />
            ) : null;
          })}
        </div>
      </div>

      {/* other details  */}

      <div className={`${crd.odWrapper}`}>
        {toggleDetails ? (
          <div className={`${crd.odCont}`}>
            {/* <DotIcon
              className={crd.odDot}
              style={{ fontSize: "5px", fontWeight: "600" }}
            /> */}
          </div>
        ) : (
          <MoreDetails

            seatAndScheduleDetails = {updatedSchduleState}
            setUpdatedSchduleState = {setUpdatedSchduleState}
            // departure={departure}
            // arrival={arrival}
            handleClose={handleClose}
          />
        )}
      </div>
    </div>
  );
};

export { BookingCard };
