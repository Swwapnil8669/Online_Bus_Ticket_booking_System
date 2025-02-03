import React, { useState } from "react";
import { Button } from "react-bootstrap";
import styles from "./leftFilter.module.css";

function valuetext(value) {
  return `${value}Rs`;
}

function LeftFilterSection({ setFilter, filter, onFilter }) {
  const [value, setValue] = useState([300, 3000]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeAc = () => {
    setFilter({ ...filter, isAc: !filter.isAc });
  };
  const handleChangeSleeper = () => {
    setFilter({ ...filter, isSleeper: !filter.isSleeper });
  };

  return (
    <div style={{ width: "200px" }}>
      <h3 style={{ textAlign: "left", marginLeft: "10px", marginTop: "15px" }}>
        Refine Results
      </h3>
      <hr />
      <p style={{ textAlign: "left", marginLeft: "10px" }}>Bus type</p>
      <div style={{ textAlign: "left", marginLeft: "10px", margin: "5px" }}>
        <input id="ac" type="checkbox" onChange={handleChangeAc} />
        <span style={{ marginLeft: "20px" }}>Ac</span>
      </div>
      <div style={{ textAlign: "left", marginLeft: "10px", margin: "5px" }}>
        <input type="checkbox" onChange={handleChangeSleeper} />
        <span style={{ marginLeft: "20px" }}>Sleeper</span>
      </div>
      <div style={{ margin: "10px 0 0px 0px" }}>
        <Button onClick={onFilter}>Filter</Button>
      </div>
      <br></br>
    </div>
  );
}

export default LeftFilterSection;
