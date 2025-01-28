import React, { useState } from 'react';
import './BusBooking.css';

function Filters() {
    const [filterState, setFilterState] = useState({
        liveTracking: false,
        primoRuns: false,
        departureTime: { before6am: false, sixTo12pm: false, twelveTo6pm: false, after6pm: false },
        busTypes: { sleeper: false, ac: false, nonAc: false },
        seatAvailability: { singleSeats: false },
        arrivalTime: { before6am: false, sixTo12pm: false, twelveTo6pm: false, after6pm: false },
        boardingPoint: "", droppingPoint: "", operator: "",
    });

    const handleCheckboxChange = (group, filter) => {
        setFilterState(prevState => ({ ...prevState, [group]: { ...prevState[group], [filter]: !prevState[group][filter] } }));
    };

    const handleInputChange = (field, value) => {
        setFilterState(prevState => ({ ...prevState, [field]: value }));
    };

    return (
    
        <div className="filters-container">
            <h2>Filters</h2>
            <div className="filter-group">
                <h3>Live Tracking</h3>
                <label><input type="checkbox" checked={filterState.liveTracking} onChange={() => setFilterState(prev => ({ ...prev, liveTracking: !prev.liveTracking }))} />Live Tracking (9)</label>
                <label><input type="checkbox" checked={filterState.primoRuns} onChange={() => setFilterState(prev => ({ ...prev, primoRuns: !prev.primoRuns }))} />Primo Runs (5)</label>
            </div>
            <div className="filter-group">
                <h3>Departure Time</h3>
                {Object.entries(filterState.departureTime).map(([time, checked]) => (
                    <label key={time}>
                        <input type="checkbox" checked={checked} onChange={() => handleCheckboxChange('departureTime', time)} />
                        {time === "before6am" ? "Before 6 am" : time === "sixTo12pm" ? "6 am to 12 pm" : time === "twelveTo6pm" ? "12 pm to 6 pm" : "After 6 pm"} (0)
                    </label>))}
            </div>
            <div className="filter-group">
                <h3>Bus Types</h3>
                {Object.entries(filterState.busTypes).map(([type, checked]) => (
                    <label key={type}>
                        <input type="checkbox" checked={checked} onChange={() => handleCheckboxChange('busTypes', type)} />
                        {type === "sleeper" ? "SLEEPER" : type === "ac" ? "AC" : "NON AC"} (X)
                    </label>))}
            </div>
            <div className="filter-group">
                <h3>Seat Availability</h3>
                {Object.entries(filterState.seatAvailability).map(([availability, checked]) => (
                    <label key={availability}>
                        <input type="checkbox" checked={checked} onChange={() => handleCheckboxChange('seatAvailability', availability)} />
                        {availability === "singleSeats" ? "Single Seats" : null} (X)
                    </label>))}
            </div>
            <div className="filter-group">
                <h3>Arrival Time</h3>
                {Object.entries(filterState.arrivalTime).map(([time, checked]) => (
                    <label key={time}>
                        <input type="checkbox" checked={checked} onChange={() => handleCheckboxChange('arrivalTime', time)} />
                        {time === "before6am" ? "Before 6 am" : time === "sixTo12pm" ? "6 am to 12 pm" : time === "twelveTo6pm" ? "12 pm to 6 pm" : "After 6 pm"} (X)
                    </label>))}
            </div>
            <div className="filter-group">
                <h3>Boarding Point</h3>
                <input type="text" value={filterState.boardingPoint} onChange={e => handleInputChange("boardingPoint", e.target.value)} />
            </div>
            <div className="filter-group">
                <h3>Dropping Point</h3>
                <input type="text" value={filterState.droppingPoint} onChange={e => handleInputChange("droppingPoint", e.target.value)} />
            </div>
            <div className="filter-group">
                <h3>Operator</h3>
                <input type="text" value={filterState.operator} onChange={e => handleInputChange("operator", e.target.value)} />
            </div>
        </div>
        
    );
   
}

function BusBooking()
 {
    const [buses, setBuses] = useState([
      
    ]);
    return (
        
        <div className="bus-booking-container">
            <header>
                <div className="logo">Logo</div>
                <div>
                    <a href="#">Contact Us</a>
                    <a href="#">Login</a>
                </div>
            </header>
            
            <div className="bus-search-container">
      <div className="bus-search-form">
        <div className="input-group">
          <span role="img" aria-label="From" className="icon">🚌</span>
          <div className="input-field">
            <label htmlFor="from">From</label><br/>
            <input type="text" id="from" />
          </div>
        </div>
        <div className="swap-icon">
          <span role="img" aria-label="Swap">⇄</span>
        </div>
        <div className="input-group">
          <span role="img" aria-label="To" className="icon">🚌</span>
          <div className="input-field">
            <label htmlFor="to">To</label><br/>
            <input type="text" id="to" />
          </div>
        </div>
        <div className="input-group">
          <span role="img" aria-label="Date" className="icon">📅</span>
          <div className="input-field">
            <label htmlFor="date">Date</label><br/>
            <input type="date" id="date" />
          </div>
        </div>
        <button className="search-button">SEARCH BUSES</button>
      </div>
</div>
      <div className='bus-results-container'>
        <table>
            <thead>
                <tr>
                    <th>Operator</th>
                    <th>Departure</th>
                    <th>Total Duration</th>
                    <th>Arrival</th>
                    <th>Rating</th>
                    <th>Price</th>
                    <th>Select Seats</th>
                </tr>
            </thead>
            <tbody>
                {buses.map((bus, index) => (
                    <tr key={index}>
                        <td>
                            {bus.operator}<br />
                            {bus.type}
                        </td>
                        <td>{bus.departure}</td>
                        <td>{bus.duration}</td>
                        <td>{bus.arrival}</td>
                        <td>{bus.rating}</td>
                        <td>
                            ₹{bus.price}<br />
                            {bus.seatsLeft} Seats Left
                        </td>
                        <td>
                            <button>Select Seat</button><br />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>  
     <main>
            <aside className="filters">
                    <Filters />
            </aside>


            </main>
        
        </div>
    );
}

export default BusBooking;
