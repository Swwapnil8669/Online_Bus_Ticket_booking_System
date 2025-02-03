import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import styled from "styled-components";

const MyP = styled.p`
  color: #bf1650;
  &::before {
    display: inline;
    content: "⚠ ";
  }
`;

function AddSchedule() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const [rtoRegNo, setRtoRegNo] = useState(location.state.rtoRegNo);

  const handleAddSchedule = (data) => {
    console.log("schedule obj", data);

    axios
      .post(`http://localhost:8080/bus/operator/addSchedule/${rtoRegNo}`, data)
      .then((response) => {
        console.log("add bus schedule post response: ", response.data);
        let responseOperator = location.state.operator;
        navigate("/operatorDashboard", { state: { responseOperator } });
      });
  };

  return (
    <>
      <center>
        <h2>Add Schedule</h2>
      </center>
      <div style={{ height: "100vh", padding: "40px" }}>
        <Form onSubmit={handleSubmit(handleAddSchedule)}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="sourceCity">
              <Form.Label>Source City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter source city"
                {...register("sourceCity", { required: true })}
                aria-invalid={errors.sourceCity ? "true" : "false"}
              />
              {errors.sourceCity?.type === 'required' && <MyP role="alert">Source city is required</MyP>}
            </Form.Group>

            <Form.Group as={Col} controlId="destinationCity">
              <Form.Label>Destination City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter destination city"
                {...register("destinationCity", { required: true })}
                aria-invalid={errors.destinationCity ? "true" : "false"}
              />
              {errors.destinationCity?.type === 'required' && <MyP role="alert">Destination city is required</MyP>}
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="boardingPoint">
              <Form.Label>Boarding Point</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter boarding point"
                {...register("boardingPoint", { required: true })}
                aria-invalid={errors.boardingPoint ? "true" : "false"}
              />
              {errors.boardingPoint?.type === 'required' && <MyP role="alert">Boarding point is required</MyP>}
            </Form.Group>

            <Form.Group as={Col} controlId="destinationPoint">
              <Form.Label>Destination Point</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter destination point"
                {...register("destinationPoint", { required: true })}
                aria-invalid={errors.destinationPoint ? "true" : "false"}
              />
              {errors.destinationPoint?.type === 'required' && <MyP role="alert">Destination point is required</MyP>}
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="departureDate">
              <Form.Label>Departure Date</Form.Label>
              <Form.Control
                type="date"
                {...register("departureDate", { required: true })}
                aria-invalid={errors.departureDate ? "true" : "false"}
              />
              {errors.departureDate?.type === 'required' && <MyP role="alert">Departure date is required</MyP>}
            </Form.Group>

            <Form.Group as={Col} controlId="arrivalDate">
              <Form.Label>Arrival Date</Form.Label>
              <Form.Control
                type="date"
                {...register("arrivalDate", { required: true })}
                aria-invalid={errors.arrivalDate ? "true" : "false"}
              />
              {errors.arrivalDate?.type === 'required' && <MyP role="alert">Arrival date is required</MyP>}
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="departureTime">
              <Form.Label>Departure Time</Form.Label>
              <Form.Control
                type="time"
                {...register("departureTime", { required: true })}
                aria-invalid={errors.departureTime ? "true" : "false"}
              />
              {errors.departureTime?.type === 'required' && <MyP role="alert">Departure time is required</MyP>}
            </Form.Group>

            <Form.Group as={Col} controlId="arrivalTime">
              <Form.Label>Arrival Time</Form.Label>
              <Form.Control
                type="time"
                {...register("arrivalTime", { required: true })}
                aria-invalid={errors.arrivalTime ? "true" : "false"}
              />
              {errors.arrivalTime?.type === 'required' && <MyP role="alert">Arrival time is required</MyP>}
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="busFare">
              <Form.Label>Bus Fare</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter bus fare"
                {...register("busFare", { required: true })}
                aria-invalid={errors.busFare ? "true" : "false"}
              />
              {errors.busFare?.type === 'required' && <MyP role="alert">Bus fare is required</MyP>}
            </Form.Group>
          </Row>

          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddSchedule;
