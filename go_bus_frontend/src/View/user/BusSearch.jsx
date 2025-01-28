// BusSearch.jsx
import React from 'react';
import './BusSearch.css'; // Import the CSS file

const BusSearch = () => {
  return (
    <div className="bus-search-container">
      <div className="bus-search-form">
        <div className="input-group">
          <span role="img" aria-label="From" className="icon">🚌</span>
          <div className="input-field">
            <label htmlFor="from">From</label><br/>
<<<<<<< HEAD
            <input type="text" id="from" value="" />
=======
            <input type="text" id="from" placeholder='Source'/>
>>>>>>> 5699ce5e298359a9cf619189e88a0598182dc00b
          </div>
        </div>
        <div className="swap-icon">
          <span role="img" aria-label="Swap">⇄</span>
        </div>
        <div className="input-group">
          <span role="img" aria-label="To" className="icon">🚌</span>
          <div className="input-field">
            <label htmlFor="to">To</label><br/>
<<<<<<< HEAD
            <input type="text" id="to" value=""/>
=======
            <input type="text" id="to"  placeholder='Destination'/>
>>>>>>> 5699ce5e298359a9cf619189e88a0598182dc00b
          </div>
        </div>
        <div className="input-group">
          <span role="img" aria-label="Date" className="icon">📅</span>
          <div className="input-field">
            <label htmlFor="date">Date</label><br/>
            <input type="date" id="date"  placeholder='Date'/>
          </div>
        </div>
        <button className="search-button">SEARCH BUSES</button>
      </div>
    </div>
  );
};

export default BusSearch;