import React, { useState } from 'react';
import './SeatSelection.css';

function SeatSelection() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const seatData = {
    lower: [
      { available: true, female: false }, { available: true, female: false }, { available: false, female: false },
      { available: true, female: false }, { available: true, female: false }, { available: false, female: false },
      { available: true, female: false }, { available: true, female: false }, { available: false, female: false },
      { available: true, female: false }, { available: true, female: false }, { available: false, female: false }
    ],
    upper: [
      { available: false, female: false }, { available: true, female: false }, { available: true, female: false },
      { available: true, female: false }, { available: true, female: false }, { available: false, female: true },
      { available: true, female: false }, { available: true, female: false }, { available: true, female: false },
      { available: true, female: false }, { available: true, female: false }, { available: false, female: false }
    ]
  };

  const handleSeatClick = (deckName, seatIndex) => {
    const seatKey = `${deckName}-${seatIndex}`;
    const isSelected = selectedSeats.includes(seatKey);

    if (seatData[deckName][seatIndex].available) {
      if (isSelected) {
        setSelectedSeats(selectedSeats.filter(seat => seat !== seatKey));
      } else {
        setSelectedSeats([...selectedSeats, seatKey]);
      }
    }
  };

  const renderSeats = (deckName, deckData) => (
    <div className="deck">
      {deckData.map((seat, index) => {
        const seatKey = `${deckName}-${index}`;
        const isSelected = selectedSeats.includes(seatKey);

        return (
          <div
            key={index}
            className={`seat ${seat.available ? 'available' : 'unavailable'} ${seat.female ? 'female' : ''} ${isSelected ? 'selected' : ''}`}
            onClick={() => handleSeatClick(deckName, index)}
          ></div>
        );
      })}
    </div>
  );

  return (
    <div className="container">

      <p>Click on an Available seat to proceed with your transaction.</p>

      <div className="legend">
        <div className="seat available"></div> Available
        <div className="seat unavailable"></div> Unavailable
        <div className="seat female"></div> Female
      </div>

      <div className="bus-layout">
        <h2>Lower Deck</h2>
        {renderSeats('lower', seatData.lower)}

        <h2>Upper Deck</h2>
        {renderSeats('upper', seatData.upper)}
      </div>

      <button className="proceed-button" disabled={selectedSeats.length === 0}>
        Proceed
      </button>
    </div>
  );
}

export default SeatSelection;