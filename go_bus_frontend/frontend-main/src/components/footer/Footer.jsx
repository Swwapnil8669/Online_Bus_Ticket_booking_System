import React from "react";
import { useNavigate } from "react-router-dom";

import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
        <section className="">
          <MDBRow>
            <MDBCol lg="12" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Login as an operator:</h5>

              <ul className="list-unstyled mb-0">
                <li style={{ cursor: "pointer" }}>
                  <a
                    onClick={() => {
                      navigate("/operatorLogin");
                    }}
                    className="text-white"
                  >
                    <u>Operator Login</u>
                  </a>
                </li>
              </ul>
              <br></br>
            </MDBCol>
            <br></br>
            <hr></hr>
          </MDBRow>
        </section>
        <section className="mb-4">
          <Button
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </Button>

          <Button
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="twitter" />
          </Button>

          <Button
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="google" />
          </Button>

          <Button
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </Button>

          <Button
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </Button>

          <Button
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </Button>
        </section>

        <section className="mb-4">
          <p>Connect with us on social media</p>
        </section>
      </MDBContainer>
    </MDBFooter>
  );
}
