import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

import { Button } from "react-bootstrap";
function OperatorLoginCode() {
  const navigate = useNavigate();
  const handleSignIn = () => {
    const operatorEmail = document.getElementById("email").value;
    const operatorPassword = document.getElementById("password").value;

    console.log(operatorEmail + " " + operatorPassword);
    const operatorCredentials = {
      operatorEmail: operatorEmail,
      operatorPassword: operatorPassword,
    };

    axios
      .post(`http://localhost:8080/bus/operator/login`, operatorCredentials)
      .then((response) => {
        console.log("in handle op signin");
        console.log(response);
        var responseOperator = response.data;
        console.log("res op:", responseOperator);
          navigate("/operatorDashboard", { state: { responseOperator, approved:responseOperator.approved } });
        
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  return (
    <MDBContainer style={{ padding: "10px" }} fluid className="p-1 my-6">
      <center>
        <h2>Operator login</h2>
      </center>
      <hr></hr>
      <MDBRow>
        <MDBCol col="1" md="5">
          <img
            style={{ height: "90%" }}
            src="https://img.freepik.com/free-vector/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-people-entering-login-password-safety-measures_335657-1592.jpg?w=740&t=st=1677745625~exp=1677746225~hmac=129800fe55bd1c084790ecaacab90950d45341c5f3a901018f9310178f1f96a3"
            class="img-fluid"
            alt="Phone image"
          />
        </MDBCol>

        <MDBCol col="4" md="6">
          <MDBInput
            wrapperClass="mb-4"
            label="Email address"
            id="email"
            type="email"
            size="lg"
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="password"
            type="password"
            size="lg"
          />

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
            />
            <a href="!#">Forgot password?</a>
          </div>

          <Button onClick={handleSignIn} className="mb-4 w-100" size="lg">
            Sign in
          </Button>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default OperatorLoginCode;
