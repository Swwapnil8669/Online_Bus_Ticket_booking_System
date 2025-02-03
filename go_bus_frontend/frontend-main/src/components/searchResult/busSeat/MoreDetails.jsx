import AvailableSeats from "./AvailableSeats";
import md from "./MoreDetails.module.css";
// import CloseIcon from "@material-ui/icons/Close";
// import { AvailableSeats } from "./sections/availableSeats/AvailableSeats";

const titles = [
  "Reviews",
  "Amenities",
  "Boarding & Dropping Point",
  "Cancellation Policy",
  "Available Seats",
];

const MoreDetails = ({ handleClose,seatAndScheduleDetails,setUpdatedSchduleState}) => {
  const handleTitle = (i) => {};

  return (
    <div className={`${md.wrapper}`}>
      <div className={`${md.sections}`}>
        <div className={`${md.titles}`}>
          {titles.map((item, i) => {
            return (
              <span
                className={`${md.title}`}
                onClick={() => {
                  handleTitle(i);
                }}
              >
                {item}
              </span>
            );
          })}
        </div>
        <div className={`${md.closeBtn}`}>
          <button
            onClick={() => {
              handleClose();
            }}
            style={{ fontSize: "18px", cursor: "pointer" }}
          >
            X
          </button>
        </div>
      </div>
      <div className={`${md.contentWrapper}`}>
        <AvailableSeats seatAndScheduleDetails = {seatAndScheduleDetails} 
        setUpdatedSchduleState = {setUpdatedSchduleState} departure={"departure"} arrival={"arrival"} />
      </div>
    </div>
  );
};

export default MoreDetails;
