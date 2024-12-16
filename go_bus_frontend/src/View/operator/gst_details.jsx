export function GstDetails({ gstDetails, setGstDetails }) {
    const handleChange = (e) => {
      const { name, value } = e.target;
      setGstDetails({
        ...gstDetails,
        [name]: value,
      });
    };
  
    const handleRadioChange = (value) => {
      setGstDetails({
        ...gstDetails,
        hasGst: value, 
        gstNumber: value ? gstDetails.gstNumber : "", 
      });
    };
  
    return (
      <div className="d-flex flex-column justify-content-center">
        <div className="container">
          <h4 className="mt-5">GST Details:</h4>
  
          {/* Radio Buttons */}
          <div className="mb-4 text-center">
            <p>Do you have a GST number?</p>
            <div className="d-flex justify-content-center">
              <label className="me-3">
                <input
                  type="radio"
                  name="hasGst"
                  value="true"
                  className="me-1"
                  checked={gstDetails.hasGst === true}
                  onChange={() => handleRadioChange(true)}
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="hasGst"
                  value="false"
                  className="me-1"
                  checked={gstDetails.hasGst === false}
                  onChange={() => handleRadioChange(false)}
                />{" "}
                No
              </label>
            </div>
          </div>
  
          {/* GST Number Input */}
          <div className="row">
            <div className="col-3"></div>
            <div className="col">
              <label htmlFor="gstNumber" className="form-label">
                GST Number:
              </label>
              <input
                type="text"
                id="gstNumber"
                name="gstNumber"
                value={gstDetails.gstNumber}
                className="form-control border border-secondary"
                placeholder="Enter GST number"
                onChange={handleChange}
                disabled={!gstDetails.hasGst} // Disable input if no GST
              />
            </div>
            <div className="col-3"></div>
          </div>
        </div>
      </div>
    );
  }
  