import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const MyP = styled.p`
  color: #bf1650;
  &::before {
    display: inline;
    content: "⚠ ";
  }
`;

function AddBus() {
  const navigate = useNavigate();
  const location = useLocation();
  const operatorId = location.state?.operatorId?.id || null;

  // **State to store all form values**
  const [formData, setFormData] = useState({
    rtoRegNo: "",
    seatCapacity: "",
    isAc: false,            // Set default as false
    isSleeper: false,
    toilet: false,
    chargingPort: false,
    wifi: false,
    sheetsPillow: false,
    complimentaryFood: false
  });

  // **Handle input changes**
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,  // Correctly handling checkboxes
    }));
  };

  // **Handle form submission**
  const handleAddBusClick = (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!operatorId) {
      console.error("Operator ID is missing!");
      return;
    }

    console.log("Final Form Data Before API Call:", formData); // Debugging

    axios
      .post(`http://localhost:8080/bus/operator/addbus/${operatorId}`, formData)
      .then((response) => {
        console.log("Add Bus API Response:", response.data);
        navigate("/operatorDashboard", { state: { responseOperator: location.state.operatorId } });
      })
      .catch((error) => {
        console.error("Error adding bus:", error);
      });
  };

  return (
    <>
      <center>
        <h2>Add Bus</h2>
      </center>

      <center>
        <div
          style={{
            height: "100vh",
            padding: "40px",
            width: "80vw",
          }}
        >
          <Form style={{ padding: "60px", border: "2px solid black" }} onSubmit={handleAddBusClick}>
            <Row className="mb-4">
              <h6><u>Bus Details</u></h6>
              <Form.Group as={Col} controlId="rtoRegNo">
                <Form.Label>RTO Reg. No</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="rtoRegNo"
                  placeholder="Enter RTO Reg. No"
                  value={formData.rtoRegNo}
                  onChange={handleChange}
                />
                {!formData.rtoRegNo && <MyP role="alert">RTO Reg. No is required</MyP>}
              </Form.Group>

              <Form.Group as={Col} controlId="seatCapacity">
                <Form.Label>Seat Capacity</Form.Label>
                <Form.Control
                  required
                  type="number"
                  name="seatCapacity"
                  placeholder="Enter Seat Capacity"
                  value={formData.seatCapacity}
                  onChange={handleChange}
                />
                {!formData.seatCapacity && <MyP role="alert">Seat Capacity is required</MyP>}
              </Form.Group>
            </Row>
            <hr />

            <Row className="mb-4">
              <h6><u>Bus Type</u></h6>
              <Form.Group as={Col} controlId="isAc">
                <Form.Check
                  type="checkbox"
                  label="AC"
                  name="isAc"
                  checked={formData.isAc}  // Ensure checkbox reflects the state
                  onChange={handleChange}  // Corrected event handler
                />
              </Form.Group>

              <Form.Group as={Col} controlId="isSleeper">
                <Form.Check
                  type="checkbox"
                  label="Sleeper"
                  name="isSleeper"
                  checked={formData.isSleeper}  // Ensure checkbox reflects the state
                  onChange={handleChange}  // Corrected event handler
                />
              </Form.Group>
            </Row>

            <hr />
            <Row className="mb-4">
              <h6><u>Bus Amenities</u></h6>
              <Form.Group as={Col} controlId="toilet">
                <Form.Check
                  type="checkbox"
                  label="Toilet"
                  name="toilet"
                  checked={formData.toilet}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="chargingPort">
                <Form.Check
                  type="checkbox"
                  label="Charging Point"
                  name="chargingPort"
                  checked={formData.chargingPort}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="wifi">
                <Form.Check
                  type="checkbox"
                  label="WiFi"
                  name="wifi"
                  checked={formData.wifi}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="sheetsPillow">
                <Form.Check
                  type="checkbox"
                  label="Sheets & Pillow"
                  name="sheetsPillow"
                  checked={formData.sheetsPillow}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="complimentaryFood">
                <Form.Check
                  type="checkbox"
                  label="Complimentary Food"
                  name="complimentaryFood"
                  checked={formData.complimentaryFood}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>

            <center>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </center>
          </Form>
        </div>
      </center>
    </>
  );
}

export default AddBus;
