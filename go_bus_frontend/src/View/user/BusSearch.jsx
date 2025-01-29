// BusSearch.jsx
import React from 'react';
import './BusSearch.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const BusSearch = () => {
  const navigate = useNavigate();

  const onSearch= async () => {
    navigate("./BusBooking");
  };

  return (
    <div className="bus-search-container">
      <div className="bus-search-form">
        <div className="input-group">
          <span role="img" aria-label="From" className="icon">🚌</span>
          <div className="input-field">
            <label htmlFor="from">From</label><br/>
            <input type="text" id="from" value="" />

            <input type="text" id="from" placeholder='Source'/>
          </div>
        </div>
        <div className="swap-icon">
          <span role="img" aria-label="Swap">⇄</span>
        </div>
        <div className="input-group">
          <span role="img" aria-label="To" className="icon">🚌</span>
          <div className="input-field">
            <label htmlFor="to">To</label><br/>
            <input type="text" id="to" value=""/>
            <input type="text" id="to"  placeholder='Destination'/>
          </div>
        </div>
        <div className="input-group">
          <span role="img" aria-label="Date" className="icon">📅</span>
          <div className="input-field">
            <label htmlFor="date">Date</label><br/>
            <input type="date" id="date"  placeholder='Date'/>
          </div>
        </div>
        <button className="search-button" onClick={onSearch}>SEARCH BUSES</button>
      </div>
    </div>
  );
};

export default BusSearch;