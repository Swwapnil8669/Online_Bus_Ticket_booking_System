import React, { useState } from "react";
import './Filter.css';
function Filters() {
    const [filterState, setFilterState] = useState({
      liveTracking: false,
      primoRuns: false,
      departureTime: {
        before6am: false,
        sixTo12pm: false,
        twelveTo6pm: false,
        after6pm: false,
      },
      busTypes: { sleeper: false, ac: false, nonAc: false },
      seatAvailability: { singleSeats: false },
      arrivalTime: {
        before6am: false,
        sixTo12pm: false,
        twelveTo6pm: false,
        after6pm: false,
      },
      boardingPoint: "",
      droppingPoint: "",
      operator: "",
    });
  
    const handleCheckboxChange = (group, filter) => {
      setFilterState((prevState) => ({
        ...prevState,
        [group]: { ...prevState[group], [filter]: !prevState[group][filter] },
      }));
    };
  
    const handleInputChange = (field, value) => {
      setFilterState((prevState) => ({ ...prevState, [field]: value }));
    };
  
    return (
      <div className="filters-container grid grid-cols-[auto,1fr] gap-4 text-sm mt-1" >
        <h2>Filters</h2>
        <div className="filter-group">
            
          <h3>Live Tracking</h3>
          <div>
          <label>
            <input
              type="checkbox"
              checked={filterState.liveTracking}
              onChange={() =>
                setFilterState((prev) => ({
                  ...prev,
                  liveTracking: !prev.liveTracking,
                }))
              }
            />
            Live Tracking (9)
          </label>
          </div>
          <label>
            <input
              type="checkbox"
              checked={filterState.primoRuns}
              onChange={() =>
                setFilterState((prev) => ({
                  ...prev,
                  primoRuns: !prev.primoRuns,
                }))
              }
            />
            Primo Runs (5)
          </label>
        </div>
        <div className="filter-group">
          <h3>Departure Time</h3>
          
          {Object.entries(filterState.departureTime).map(([time, checked]) => (
            <div>
            <label key={time}>
              <input
                type="checkbox"
                checked={checked}
                onChange={() => handleCheckboxChange("departureTime", time)}
              />
              
              {time === "before6am"
                ? "Before 6 am"
                : time === "sixTo12pm"
                ? "6 am to 12 pm"
                : time === "twelveTo6pm"
                ? "12 pm to 6 pm"
                : "After 6 pm"}{" "}
              (0)
              
            </label>
            </div>
          ))}
        </div>
        <div className="filter-group">
            <div>
          <h3>Bus Types</h3>
          <div>
          {Object.entries(filterState.busTypes).map(([type, checked]) => (
            <div>
            <label key={type} className="">
              <input
                type="checkbox"
                checked={checked}
                onChange={() => handleCheckboxChange("busTypes", type)}
              />
              {type === "sleeper" ? "SLEEPER" : type === "ac" ? "AC" : "NON AC"}{" "}
              (X)
            </label>
            </div>
          ))}
          </div>
          </div>
        </div>
        <div className="filter-group">
          <h3>Seat Availability</h3>
          {Object.entries(filterState.seatAvailability).map(
            ([availability, checked]) => (
              <label key={availability}>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() =>
                    handleCheckboxChange("seatAvailability", availability)
                  }
                />
                {availability === "singleSeats" ? "Single Seats" : null} (X)
              </label>
            )
          )}
        </div>
        <div className="">
          <h3>Arrival Time</h3>
          {Object.entries(filterState.arrivalTime).map(([time, checked]) => (
            <div>
            <label key={time}>
              <input
                type="checkbox"
                checked={checked}
                onChange={() => handleCheckboxChange("arrivalTime", time)}
              />
              
              {time === "before6am"
                ? "Before 6 am"
                : time === "sixTo12pm"
                ? "6 am to 12 pm"
                : time === "twelveTo6pm"
                ? "12 pm to 6 pm"
                : "After 6 pm"}{" "}
              (X)
              
            </label>
            </div>
          ))}
        </div>
        <div className="filter-group">
          <h3>Boarding Point</h3>
          <input
            type="text"
            value={filterState.boardingPoint}
            onChange={(e) => handleInputChange("boardingPoint", e.target.value)}
          />
        </div>
        <div className="filter-group">
          <h3>Dropping Point</h3>
          <input
            type="text"
            value={filterState.droppingPoint}
            onChange={(e) => handleInputChange("droppingPoint", e.target.value)}
          />
        </div>
        <div className="filter-group">
          <h3>Operator</h3>
          <input
            type="text"
            value={filterState.operator}
            onChange={(e) => handleInputChange("operator", e.target.value)}
          />
        </div>
      </div>
    );
  }
  export default Filters;