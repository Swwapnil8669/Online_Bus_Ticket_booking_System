export function PersonalDetails({ personalDetails, setPersonalDetails }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({
      ...personalDetails,
      [name]: value,
    });
  };

  return (
    <div className="">
      <h4 className="">Personal Details:</h4>

      <div className="d-flex justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="d-flex flex-column">
                <div className="form-group">
                  <label htmlFor="travelName">Travel Name</label>
                  <input
                    type="text"
                    className="form-control border border-secondary"
                    id="travelName"
                    name="travelName"
                    value={personalDetails.travelName}
                    placeholder="Enter travel name"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    className="form-control border border-secondary"
                    id="city"
                    name="city"
                    value={personalDetails.city}
                    onChange={handleChange}
                    placeholder="Enter city"
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    className="form-control border border-secondary"
                    id="state"
                    name="state"
                    value={personalDetails.state}
                    onChange={handleChange}
                    placeholder="Enter state"
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="pincode">Pincode</label>
                  <input
                    type="text"
                    className="form-control border border-secondary"
                    id="pincode"
                    name="pincode"
                    value={personalDetails.pincode}
                    onChange={handleChange}
                    placeholder="Enter pincode"
                  />
                </div>
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label htmlFor="ownerName">Owner Name</label>
                <input
                  type="text"
                  className="form-control border border-secondary"
                  id="ownerName"
                  name="ownerName"
                  value={personalDetails.ownerName}
                  onChange={handleChange}
                  placeholder="Enter owner name"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="district">District</label>
                <input
                  type="text"
                  className="form-control border border-secondary"
                  id="district"
                  name="district"
                  value={personalDetails.district}
                  onChange={handleChange}
                  placeholder="Enter district"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  className="form-control border border-secondary"
                  id="country"
                  name="country"
                  value={personalDetails.country}
                  onChange={handleChange}
                  placeholder="Enter country"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="panNo">PAN No.</label>
                <input
                  type="text"
                  className="form-control border border-secondary"
                  id="panNo"
                  name="panNo"
                  value={personalDetails.panNo}
                  onChange={handleChange}
                  placeholder="Enter PAN number"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
