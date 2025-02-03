import React, { useRef, useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const Bill = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "bill invoice",
    onAfterPrint: () => console.log("printed"),
  });
  const location = useLocation();
  const [bookingInfo, setBookingInfo] = useState(location.state.res);
  console.log("bill loc res: ", location.state.res);
  return (
    <>
      <Container ref={componentRef} className="my-4">
        <Row className="mb-4">
          <Col>
            <h3>Booking Details</h3>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="mb-3">
            <h5>Source City:</h5>
            <p>{bookingInfo.sourceCity}</p>
          </Col>
          <Col xs={12} md={6} className="mb-3">
            <h5>Destination City:</h5>
            <p>{bookingInfo.destinationCity}</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="mb-3">
            <h5>Operator Phone:</h5>
            <p>{bookingInfo.operatorPhone}</p>
          </Col>
          <Col xs={12} md={6} className="mb-3">
            <h5>Company Name:</h5>
            <p>{bookingInfo.companyName}</p>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <h5>Travellers:</h5>
            <Table bordered>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Seat no</th>
                  {/* <th>Gender</th> */}
                </tr>
              </thead>
              <tbody>
                {bookingInfo.travellers.map((traveller, index) => (
                  <tr key={index}>
                    <td>{traveller.fullName}</td>
                    {/* <td>{traveller.gend}</td> */}
                    <td>{traveller.seatNo}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="mb-3">
            <h5>Booking ID:</h5>
            <p>{bookingInfo.bookingId}</p>
          </Col>
          <Col xs={12} md={6} className="mb-3">
            <h5>Arrival Time:</h5>
            <p>{bookingInfo.arrivalTime}</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="mb-3">
            <h5>Departure Time:</h5>
            <p>{bookingInfo.departureTime}</p>
          </Col>
          <Col xs={12} md={6} className="mb-3">
            <h5>Boarding Point:</h5>
            <p>{bookingInfo.boardingPoint}</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="mb-3">
            <h5>Destination Point:</h5>
            <p>{bookingInfo.destinationPoint}</p>
          </Col>
          <Col xs={12} md={6} className="mb-3">
            <h5>Total Fare:</h5>
            <p>{bookingInfo.totallFair}</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="mb-3">
            <h5>Departure Date:</h5>
            <p>{bookingInfo.departureDate}</p>
          </Col>
          <Col xs={12} md={6} className="mb-3">
            <h5>Arrival Date:</h5>
            <p>{bookingInfo.arrivalDate}</p>
          </Col>
        </Row>
      </Container>
      <Button onClick={handlePrint}>Print Invoice</Button>
    </>
  );
};

export default Bill;
