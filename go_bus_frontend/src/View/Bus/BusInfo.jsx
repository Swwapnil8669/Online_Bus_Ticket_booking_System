const BusInfo = () => {
    return (
      <div className="mb-4 p-3 border rounded bg-light">
        <h2 className="mb-3">Bus Information</h2>
        <div className="mb-3 d-flex justify-content-center">
          <label className="form-label">Bus Name</label>
          <input type="text" className="form-control" style={{width:"50%"}}/>
        </div>
        <div className="mb-3 d-flex justify-content-center  ">
          <label className="form-label">Bus Number</label>
          <input type="text" className="form-control" style={{width:"50%"}}/>
        </div>
        <div className="mb-3 d-flex justify-content-center">
          <label className="form-label">Bus Type</label>
          <div className="form-check mx-3">
            <input type="radio" name="busType" className="form-check-input" />
            <label className="form-check-label">AC</label>
          </div>
          <div className="form-check">
            <input type="radio" name="busType" className="form-check-input" />
            <label className="form-check-label">Sleeper</label>
          </div>
        </div>
        <div className="mb-3 d-flex justify-content-center">
          <label className="form-label">Capacity</label>
          <input type="number" className="form-control" style={{width:"50%"}} />
        </div>
      </div>
    );
  };
    export default BusInfo;