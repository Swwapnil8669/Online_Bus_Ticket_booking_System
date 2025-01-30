const BusAmenities = () => {
    return (
      <div className="mb-4 p-3 border rounded bg-light">
        <h2 className="mb-3">Bus Amenities</h2>
        {["Charging Port", "Sheets, Pillow, Blanket", "WiFi"].map((amenity, index) => (
          <div key={index} className="mb-3 d-flex justify-content-center">
            <label className="form-label">Have {amenity}?</label>
            <div className="form-check mx-3">
              <input type="radio" name={amenity} className="form-check-input " />
              <label className="form-check-label">Yes</label>
            </div>
            <div className="form-check">
              <input type="radio" name={amenity} className="form-check-input" />
              <label className="form-check-label">No</label>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
    export default BusAmenities;