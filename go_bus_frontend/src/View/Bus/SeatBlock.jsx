import { AirlineSeatReclineExtra } from "@mui/icons-material";
import { useState } from "react";

const SeatBlock = () => {
  return (
    <div>
      <div>
        <div>Lower Deck</div>
        <div className="card" style={{ width: "500px" }}>
          <div class="row justify-content-md-center">
            <div class="col col-lg-2"><AirlineSeatReclineExtra /></div>
            <div class="col-md-auto"><AirlineSeatReclineExtra /></div>
            <div class="col col-lg-2">3 of 3</div>
          </div>
          <div className="card-body">
            <AirlineSeatReclineExtra />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SeatBlock;
