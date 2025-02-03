import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Container, Row, Col, Alert, Button } from "react-bootstrap";
import { UserContext } from "../../App";
import axios from "axios";

function CustomerBookings() {
  const navigate = useNavigate();
  const location = useLocation();
  const [bookingsList, setBookingsList] = useState([]);
  const [myContext, setMyContext] = useContext(UserContext);
  useEffect(() => {
    const bookingsList = location.state.bookingsListState;
    setBookingsList(bookingsList);
    console.log("---->again?", bookingsList);
  }, []);
  console.log("date: ", new Date());
  const handleCancel = (bookingId) => {
    alert(
      "Your booking has been cancelled, the refund amount will be debited to your accout within 24 hours"
    );
    // /bus/customer/cancle/{bookingId}
    axios
      .get(`http://localhost:8080/bus/customer/cancle/${bookingId}`, bookingId)
      .then((res) => {
        console.log("response after deleting booking id", res, res.data);
        var filteredBookingList = bookingsList.map((b) => {
          if (b.bookingId == bookingId) {
            b.status = "cancelled";
          }
          return b;
        });
        setBookingsList(filteredBookingList);
      })
      .catch();
  };

  function isFuture(dateString, timeString) {
    // Parse the date and time strings into Date objects
    const [year, month, day] = dateString.split("-");
    const [hour, minute, second] = timeString.split(":");
    const targetDate = new Date(year, month - 1, day, hour, minute, second);

    // Get the current system time as a Date object
    const currentDate = new Date();

    // Compare the target date and the current date
    return targetDate > currentDate;
  }
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <Alert variant="success">
              <Alert.Heading>
                Showing bookings for: {myContext.custFirstName}
              </Alert.Heading>
              <p>Email: {myContext.custEmail}</p>
              <p>Phone: {myContext.custPhone}</p>
              {/* <hr /> */}
            </Alert>
          </Col>
        </Row>
      </Container>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "auto" }}
      >
        {bookingsList.length != 0 ? (
          <div>
            <table
              className="table table-responsive table-hover "
              style={{ margin: "auto" }}
            >
              <thead className="thead-dark">
                <tr>
                  <th>bookingId</th>
                  <th>status</th>
                  <th>dateOfBooking</th>
                  <th>timeOfBooking</th>

                  <th>Source city</th>
                  <th>Destination city</th>
                  <th>Departure date</th>
                  <th>Departure time</th>

                  <th>totalAmount</th>

                  <th>transactioId</th>

                  <th>travellers[seatNo]</th>
                  <th>Cancel Booking</th>
                </tr>
                {bookingsList.map((booking) => {
                  console.log("in map each: ", booking);
                  return (
                    <>
                      <tr>
                        <td>{booking.bookingId}</td>
                        <td>
                          {booking.status != null ? (
                            <span style={{ color: "red" }}>
                              <b>Cancelled</b>
                            </span>
                          ) : isFuture(
                              booking.departureDate,
                              booking.departureTime
                            ) ? (
                            <span style={{ color: "green" }}>
                              <b>Active</b>
                            </span>
                          ) : (
                            <span style={{ color: "green" }}>
                              <b>Done</b>
                            </span>
                          )}
                        </td>
                        <td>{booking.dateOfBooking}</td>
                        <td>{booking.timeOfBooking}</td>

                        <td>{booking.sourceCity}</td>
                        <td>{booking.destinationCity}</td>
                        <td>{booking.departureDate}</td>
                        <td>{booking.departureTime}</td>

                        <td>{booking.totalAmount}</td>
                        <td>{booking.transactioId}</td>
                        <td>
                          {booking.travellers.map((traveller) => {
                            return (
                              <p>{`${traveller.fullName} [SeatNo: ${traveller.seatNo}] `}</p>
                            );
                          })}
                        </td>
                        <td>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              margin: "auto",
                            }}
                          >
                            <Button
                              disabled={
                                booking.status !== null ||
                                !isFuture(
                                  booking.departureDate,
                                  booking.departureTime
                                )
                              }
                              onClick={() => handleCancel(booking.bookingId)}
                              style={{ marginTop: "20px" }}
                              className="btn btn-danger"
                            >
                              Cancel
                            </Button>
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </thead>
            </table>
          </div>
        ) : (
          <h2>No booking done yet...</h2>
        )}
      </div>
    </>
  );
}

export default CustomerBookings;
