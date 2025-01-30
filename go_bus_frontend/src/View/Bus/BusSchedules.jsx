const BusSchedules = () => {
  return (
    <div className="mb-4 p-3 border rounded bg-light">
      <h2 className="mb-3">Bus Schedules</h2>
      <div className="mb-3 d-flex justify-content-center">
        <label className="form-label mt-2">Departure Time</label>
        <input type="time" className="form-control" style={{width:"50%"}}/>
      </div>
      <div className="mb-3 d-flex justify-content-center">
        <label className="form-label mt-2">Arrival Time</label>
        <input type="time" className="form-control" style={{width:"50%"}}/>
      </div>
      <div className="mb-3 d-flex justify-content-center">
        <label className="form-label">Fare</label>
        <input type="number" className="form-control" style={{width:"50%"}}/>
      </div>
      <div className="mb-3 d-flex justify-content-center">
        <label className="form-label">Start Location</label>
        <input type="text" className="form-control" style={{width:"50%"}}/>
      </div>
      <div className="mb-3 d-flex justify-content-center">
        <label className="form-label">End Location</label>
        <input type="text" className="form-control" style={{width:"50%"}}/>
      </div>
    </div>
  );
};
export default BusSchedules;