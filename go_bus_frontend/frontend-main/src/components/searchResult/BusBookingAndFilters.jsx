import React from "react";
import bbf from "./BusBookingAndFilters.module.css";
import LeftFilterSection from "./LeftFilterSection";

const BusBookingAndFilters = ({ onFilter, setFilter, filter }) => {
  return (
    <div className={bbf.wrapper}>
      <div className={bbf.cont}>
        <div className={bbf.border}>
          <LeftFilterSection
            onFilter={onFilter}
            setFilter={setFilter}
            filter={filter}
          />
        </div>
      </div>
    </div>
  );
};

export default BusBookingAndFilters;
