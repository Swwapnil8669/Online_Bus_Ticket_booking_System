import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function OperatorBusSchedulesBookingsList() {
  const location = useLocation();
  const [bookingsList, setBookingsList] = useState([]);
  useEffect(() => {
    const bookingsList = location.state.bookings;
    setBookingsList(bookingsList);

    console.log("in operatorBusSchedulesBookingsList---->", bookingsList);
  }, []);

  return (
    <div style={{ height: "100vh", width: "95vw" }}>
      <center>
        <h2>Bookings List</h2>
      </center>
      {bookingsList.length == 0 ? (
        <center>
          <h2>No bookings done yet...</h2>
        </center>
      ) : (
        <table
          className="table table-responsive table-bordered"
          style={{ margin: "10px" }}
        >
          <thead className="thead-dark">
            <tr>
              <th>bookingId</th>
              <th>dateOfBooking</th>
              <th>custEmail</th>
              <th>custFirstName</th>
              <th>custGender</th>
              <th>custLastName</th>
              <th>custPhone</th>
              <th>age</th>
              <th>paymentStatus</th>
              <th>status</th>
              <th>timeOfBooking</th>
              <th>totalAmount</th>

              <th>transactioId</th>

              <th>travellers</th>
            </tr>

            {bookingsList.map((booking) => {
              return (
                <>
                  <tr>
                    <td>{booking.bookingId}</td>
                    <td>{booking.dateOfBooking}</td>
                    <td>{booking.id.custEmail}</td>
                    <td>{booking.id.custFirstName}</td>
                    <td>{booking.id.custGender}</td>
                    <td>{booking.id.custLastName}</td>
                    <td>{booking.id.custPhone}</td>
                    <td>{booking.id.dob}</td>
                    <td>{booking.paymentStatus ? "Paid" : "Not Paid"}</td>
                    <td>{booking.status}</td>
                    <td>{booking.timeOfBooking}</td>
                    <td>{booking.totalAmount}</td>
                    <td>{booking.transactioId}</td>
                    <td>{booking.travellers}</td>

                    {/* <td>
                                <button className='btn btn-danger'>
                                    Delete
                                </button> 
                            </td> */}
                  </tr>
                </>
              );
            })}
          </thead>
        </table>
      )}
    </div>
  );
}

export default OperatorBusSchedulesBookingsList;
