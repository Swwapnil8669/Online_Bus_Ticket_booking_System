import React from "react";
import { Container, Row, Col, Alert, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const OperatorPostRegister = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Alert variant="success">
            <Alert.Heading>Thank you for registering!</Alert.Heading>
            <p>
              Your details have been submitted successfully and are now being
              reviewed by our admin team.
            </p>
            <hr />
            <center>
              <Button
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </Button>
            </center>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default OperatorPostRegister;
