import { useContext, useState } from "react";
import FunctionContext from "../../context/FunctionContext";
import Seat from "./Seat";
import seat from "./Seats.module.css";
import { singleSeats, sharedSeats } from "./seatsData";

const Seats = ({
  deck,
  seatDetails,
  fair,
  setFair,
  setUpdatedSchduleState,
}) => {
  //busFare
  //adding new state to seatDetails
  //var v = seatDetails.map(obj => ({ ...obj, isSelected : false }))
  //var v;
  //console.log("from seats")
  //console.log(seatDetails.seats)
  const [seatDetailsArray, setSeatDetailsArray] = useState(seatDetails.seats);
  const [single, setSingle] = useState(singleSeats);
  const [shared, setShared] = useState(sharedSeats);
  const [seatSelectedCount, setSeatSelectedCount] = useState(0);
  const functionContext = useContext(FunctionContext);
  const handleShared = (id) => {
    setSeatSelectedCount(seatSelectedCount + 1);
    if (seatSelectedCount > 4) {
      functionContext.showToast("You can select max 5 seats");
      return;
    }
    const newArr = seatDetailsArray.map((e) => {
      if (e.seatNo === id) {
        if (e.booked) return { ...e };
        else {
          var v = true;
          if (e.isSelected) {
            let temp = fair;
            setFair(temp - seatDetails.busFare);
            v = false;
          } else {
            setFair(fair + seatDetails.busFare);
          }

          var newE = { ...e, isSelected: v };

          console.log("test true ", newE);

          return newE;
        }
      } else return { ...e };
    });
    setSeatDetailsArray(newArr);
    setUpdatedSchduleState({ ...seatDetails, seats: newArr });
  };

  // handleShared previous logic
  // console.log("id", id)

  // const newSeats = seatDetailsArray.map((item) =>{
  //   console.log("each item: ", item)
  //   if(item.isSelected == false && item.seatNo == id){
  //     if(item.booked){
  //       return item;
  //     }
  //     return {...item, isSelected: !isSelected}
  //   }
  //   // return item.seatNo == id ? { ...item, booked: !item.booked } : item
  // }
  // );
  // setSeatDetail([...newSeats]);

  return (
    <div className={`${seat.seatsCont}`}>
      <div className={seat.driver}>
        <div style={{ fontSize: "14px", fontWeight: "600" }}>{deck}</div>
        <div style={{ width: "22px" }}>
          <img
            style={{ width: "100%" }}
            src="https://drg5ie3bz46tr.cloudfront.net/travel/rtravel/assets/96e1b97c.svg"
            alt="driver"
          />
        </div>
      </div>
      {/* driver end here */}

      <div className={seat.sharedCont}>
        {seatDetailsArray.map((item) => {
          //console.log("in main return: " , item)
          return (
            <div onClick={() => handleShared(item.seatNo)}>
              <Seat {...item} />
            </div>
          );
        })}
        <br />
      </div>

      {/* <div className={`${seat.singleCont}`}>
        {single.map((item) => {
          return (
            <div onClick={() => handleSingle(item.num, item.price)}>
              <Seat {...item} />
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Seats;
