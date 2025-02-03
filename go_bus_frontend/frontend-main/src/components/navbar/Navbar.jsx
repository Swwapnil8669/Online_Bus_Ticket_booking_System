import { faBed, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import { useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import FunctionContext from "../context/FunctionContext";

function Header({ showToast }) {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };
  const [myContext, setMyContext] = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(myContext.isAuth);
  const [bookingsListState, setBookingsListState] = useState([]);
  const functionContext = useContext(FunctionContext);
  console.table("myContext: ", myContext, "isLoggedIn: ", isLoggedIn);
  // const [modalOpen, setModalOpen] = useState(false);
  const handleLogout = () => {
    myContext.isAuth = false;
    setMyContext(myContext);
    navigate("/");
    showToast("You have been logged out");
  };

  // const handleShowBookings = () => {
  //   // /bus/customer/{customerId}
  //   axios
  //     .get(`http://localhost:8080/bus/customer/${myContext.id}`)
  //     .then((res) => {
  //       var bookingsList = res.data;
  //       return bookingsList;
  //     })
  //     .then((data) => {
  //       setBookingsListState(data);
  //       console.log("00000000000000: ", bookingsListState);
  //       navigate("/customerBookings", { state: { bookingsListState } });
  //     })
  //     .catch(() => {
  //       functionContext.showToast("Something went wrong!!!");
  //     });
  // };

  const handleShowBookings = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/bus/customer/${myContext.id}`
      );
      const bookingsList = await response.data;
      setBookingsListState(bookingsList);
      console.log("00000000000000: ", bookingsListState);
      navigate("/customerBookings", { state: { bookingsListState } });
    } catch (error) {
      functionContext.showToast("Something went wrong!!!");
    }
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "80px" }}>
        <Container>
          <Navbar.Brand
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            BusKaro.com
          </Navbar.Brand>

          <Nav className="ml-auto">
            {myContext.isAuth ? (
              <div
                onClick={handleMenuToggle}
                className="nameAndIconDiv"
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    margin: "10px",
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  {myContext.custFirstName}
                </span>
                <FontAwesomeIcon
                  icon={faUser}
                  className="headerIcon"
                  beat
                  style={{
                    height: "20px",
                    marginRight: "5px",
                    marginRight: "10px",
                  }}
                />
                <Dropdown
                  show={showMenu}
                  style={{ position: "absolute", top: "100%", left: "auto" }}
                >
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={handleShowBookings}>
                      Show bookings
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <br></br>
              </div>
            ) : (
              <div
                className="nameAndIconDiv"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <br></br>
              </div>
            )}

            {!myContext.isAuth ? (
              <Button
                className="openModalBtn"
                onClick={() => {
                  navigate("/login");
                }}
              >
                SignUp/Login
              </Button>
            ) : (
              <Button onClick={handleLogout}>Logout</Button>
            )}
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Header;
