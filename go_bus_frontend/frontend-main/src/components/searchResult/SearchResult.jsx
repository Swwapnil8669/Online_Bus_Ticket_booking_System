import React, { useContext, useState } from "react";
import BookingCardWrapper from "./BookingCardWrapper";
import BusBookingAndFilters from "./BusBookingAndFilters";
import ScheduleContext from "../context/ScheduleContext";

function SearchResult() {
  const [schedule, setSchedule] = useContext(ScheduleContext);
  const [filteredSchedule, setFilteredSchedule] = useState();
  const [isFiltered, setIsFiltered] = useState(false);
  const [filter, setFilter] = useState({ isAc: false, isSleeper: false });

  const onFilter = () => {
    var tempSchedule = [];
    schedule.map((s) => {
      if (s.ac == filter.isAc && s.sleeper == filter.isSleeper) {
        tempSchedule.push(s);
      } else if (filter.isAc == false && filter.isSleeper == false) {
        tempSchedule.push(s);
      }
    });
    setIsFiltered(true);
    setFilteredSchedule(tempSchedule);
    // setSchedule(tempSchedule);
  };

  return (
    <>
      {/*side bar here */}
      <div style={{ height: "100vh" }}>
        <div
          style={{
            float: "left",
            display: "inlineBlock",
            width: "28%",
            border: "2px solid black",
          }}
        >
          <BusBookingAndFilters
            onFilter={onFilter}
            setFilter={setFilter}
            filter={filter}
          />
        </div>

        {/*here */}
        <div
          style={{
            float: "right",
            display: "inlineBlock",
            width: "69%",
            border: "2px solid black",
          }}
        >
          {!isFiltered ? (
            <BookingCardWrapper schedule={schedule}></BookingCardWrapper>
          ) : (
            <BookingCardWrapper
              schedule={filteredSchedule}
            ></BookingCardWrapper>
          )}
                  
        </div>
      </div>
    </>
  );
}

export default SearchResult;
