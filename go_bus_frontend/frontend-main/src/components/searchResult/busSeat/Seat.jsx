import seat from "./Seat.module.css";

// {
//   "seatNo": 20,
//   "travellerGender": "NOTASSIGNED",
//   "booked": false
// },
const Seat = ({ booked,travellerGender, isSelected }) => {
  return (
    <div
      className={seat.outter}
      style={{
        
        
   
        backgroundColor: isSelected ? "green" : booked ? travellerGender==="MALE" ? "blue" : "pink" : "white",
        // backgroundColor: booked ? "#20bf7a" : "white",
        borderColor: booked ? "#20bf7a" : "#979797",

      }}
    >
      <div className={`${seat.inner}`}></div>
    </div>
  );
};

export default Seat;
