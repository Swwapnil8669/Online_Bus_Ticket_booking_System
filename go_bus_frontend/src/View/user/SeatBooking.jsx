import React, { useState } from "react";
import BusSearch from "./BusSearch";
import Filters from "./Filter";
import { Navbar } from "../nvabar";
import './BusBooking.css';
import SeatSelection from "./SeatSelection";
function SeatBooking() {
  const [buses, setBuses] = useState([
   
    {
      operator: "Operator B",
      departure: "10:00 AM",
      arrival: "6:00 PM",
      price: "$60",
      seats: Array(20).fill(false),
    },

  ]);
  return (
    <div>
      <div className="">
        <div className="">
          <Navbar />
        </div>
        <div >
          <BusSearch />
        </div>
      </div>
      <div class="row">
        <div class="col-6 col-md-2"style={{ marginTop: '-10px' }}>
          <Filters  />
        </div>
        <div class="col-12 col-md-10 mt-5">
          <div className="overflow-auto" style={{ maxHeight: '750px' }}>
            <table className="w-100">
              <thead>
                <tr>
                  <th>Operator</th>
                  <th>Departure</th>
                  <th>Total Duration</th>
                  <th>Arrival</th>
                  <th>Rating</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {buses.map((bus, index) => (
                  <tr key={index}>
                    <td>
                      {bus.operator}
                      <br />
                      {bus.type}
                    </td>
                    <td>{bus.departure}</td>
                    <td>{bus.duration}</td>
                    <td>{bus.arrival}</td>
                    <td>{bus.rating}</td>
                    <td>
                      ₹{bus.price}
                      <br />
                      {bus.seatsLeft} Seats Left
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
                <SeatSelection/>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeatBooking;
