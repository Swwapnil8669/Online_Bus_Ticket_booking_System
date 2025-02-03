import React, { useState } from "react";
import FunctionContext from "../../context/FunctionContext";
// import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { useForm } from "react-hook-form";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import axios from "axios";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { Navigate, useNavigate } from "react-router-dom";
// import { Switch } from "@material-ui/core";
// import Switch from "./Switch";
import { UserContext } from "../../../App";

import { useContext } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const MyP = styled.p`
  color: #bf1650;

  &::before {
    display: inline;
    content: "⚠ ";
  }
`;

//-------------------------------------------------------------------

function LoginCode({ scheduleState }) {
  const [myContext, setMyContext] = useContext(UserContext);
  const functionContext = useContext(FunctionContext);
  const [justifyActive, setJustifyActive] = useState("tab1");
  const [toggleState, setToggleState] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm();

  const handleToggle = () => {
    setToggleState(!toggleState);
    if (justifyActive == "tab3") {
      handleJustifyClick("tab2");
    } else {
      handleJustifyClick("tab3");
    }
  };

  const handleOperatorRegister = (data) => {
    //------------console.log(data)--------------
    // companyName: "rajshri tour and travller "
    // companyRegNo: "1234AMOLK45"
    // operatorEmail: "rajshri198@gmail.com"
    // operatorPassword: "Pass@123"
    // operatorPhone: "8805671916"
    // operatorUid: "UID12345678"
    //-------------------------------------------

    axios
      .post(`http://localhost:8080/bus/operator/addOperator`, data)
      .then((response) => console.log("reposne after post req: ", response));

    navigate("/operatorPostRegister");
  };

  const handleCustomerRegister = (data) => {
    //---------console.log(data)---------
    // dob:"2023-03-30"
    // custEmail:"cakshay001@gmail.com"
    // custFirstName:"amol"
    // custGender:"MALE"
    // custLastName:"bagul"
    // custPassword:"Amol@1998"
    // custPhone:"09999999999"
    //-------------------------------------

    axios
      .post(`http://localhost:8080/bus/customer/addCustomer`, data)
      .then((response) => {
        console.log("from cust axios response   ", response);

        setJustifyActive("tab1");
      });
  };

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  //LOGIN
  //Code to handle Custommer/admin SignIn
  const handleSignIn = () => {
    const custEmail = document.getElementById("form1").value;
    const custPassword = document.getElementById("form2").value;

    console.log(custEmail + " " + custPassword);

    const customerCredentials = {
      custEmail: custEmail,
      custPassword: custPassword,
    };

    //-----response.data-----
    // admin : true
    // custEmail : "admin@gmail.com"
    // custFirstName : "admin"
    // custGender : "MALE"
    // custLastName : "la"
    // custPhone : "9876543210"
    // dob :"1990-01-01"
    // id : 1011
    //-----------------------

    axios
      .post(
        `http://localhost:8080/bus/customer/authenticate`,
        customerCredentials
      )
      .then((response) => {
        console.log(response.data);
        var responseCustomer = response.data;

        //
        responseCustomer.isAuth = true;
        setMyContext(responseCustomer);

        if (responseCustomer.admin == true) {
          navigate("/admin", { state: { responseCustomer } });
          console.log("adminnnn");
          functionContext.showToast("Logged in successfully as Admin!!!");
        } else {
          console.log("inside login code");
          // console.log("form login page" + scheduleState.pathname )
          functionContext.showToast("Logged in successfully as a Customer!!!");

          if (scheduleState != undefined) {
            if (scheduleState.pathname === "/confirmBus") {
              //seatAndScheduleDetails

              console.log("inside login code if statement");
              console.log(scheduleState);
              let va = scheduleState.state.va;
              console.log(va);

              // shedule ka object

              navigate("/confirmBus", { state: { va } });
            }
          } else navigate("/");
        }
      })
      .catch((err) => {
        console.log("In catch block of login", err.response.data);
        //err.respose.data -> "Invalid Credential"

        setMyContext({ ...myContext, isAuth: false });

        functionContext.showToast(
          "Log in unsuccessfull, please check your credentials"
        );
        console.log(err);
      });
  };

  return (
    <MDBContainer className="p-0 my-0 d-flex flex-column w-50">
      <MDBTabs
        pills
        justify
        className="mb-2 d-flex flex-row justify-content-between"
      >
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab1")}
            active={justifyActive === "tab1"}
          >
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab2")}
            active={justifyActive === "tab2"}
          >
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === "tab1"}>
          <MDBInput
            wrapperClass="mb-2"
            label="Email address"
            id="form1"
            type="email"
          />
          <MDBInput
            wrapperClass="mb-2"
            label="Password"
            id="form2"
            type="password"
          />

          <div className="d-flex justify-content-center mx-4 mb-2">
            <a href="!#">Forgot password?</a>
          </div>

          <Button className="mb-0 w-100" onClick={handleSignIn}>
            Sign in
          </Button>
          <p className="text-center">
            Not a member? <a href="#!">Register</a>
          </p>
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === "tab3"}>
          {/* <Switch
            checked={toggleState}
            onChange={handleToggle}
            name="toggle"
            color="primary"
          /> */}
          <BootstrapSwitchButton
            checked={false}
            onlabel="Customer Registration"
            onstyle="danger"
            offlabel="Operator Registration"
            offstyle="success"
            style="w-100 mx-3"
            onChange={handleToggle}
          />

          {/* {operator register form  start here} */}

          <center>
            <h4>Operator Register</h4>
          </center>
          <form onSubmit={handleSubmit(handleOperatorRegister)}>
            <MDBInput
              wrapperClass="mb-2"
              label="Company Name"
              id="companyName"
              type="text"
              {...register("companyName", { required: true })}
              aria-invalid={errors.companyName ? "true" : "false"}
            />
            {errors.companyName?.type === "required" && (
              <MyP role="alert">Company Name is required</MyP>
            )}
            <MDBInput
              wrapperClass="mb-2"
              label="Company Reg No"
              id="companyRegNo"
              type="text"
              {...register("companyRegNo", { required: true })}
              aria-invalid={errors.companyRegNo ? "true" : "false"}
            />
            {errors.companyRegNo?.type === "required" && (
              <MyP role="alert">company Reg No is required</MyP>
            )}
            <MDBInput
              wrapperClass="mb-2"
              label="operator email"
              id="operatorEmail"
              type="email"
              {...register("operatorEmail", { required: true })}
              aria-invalid={errors.operatorEmail ? "true" : "false"}
            />
            {errors.operatorEmail?.type === "required" && (
              <MyP role="alert">Enter valid email</MyP>
            )}

            <MDBInput
              wrapperClass="mb-2"
              label="Password"
              id="operatorPassword"
              type="password"
              {...register("operatorPassword", {
                required: true,
                max: 16,
                min: 8,
                pattern:
                  /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/i,
              })}
              aria-invalid={errors.operatorPassword ? "true" : "false"}
            />
            {errors.operatorPassword?.type === "required" ||
              (errors.operatorPassword?.type === "pattern" && (
                <MyP role="alert">
                  Invalid Password. valid exapmle:{" "}
                  <span style={{ color: "green" }}>Pass@12345</span>{" "}
                </MyP>
              ))}

            <MDBInput
              wrapperClass="mb-2"
              label="Phone"
              id="operatorPhone"
              type="text"
              {...register("operatorPhone", {
                required: true,
                pattern: /^(\+91|\+91\-|0)?[789]\d{9}$/i,
              })}
              aria-invalid={errors.operatorPhone ? "true" : "false"}
            />
            {errors.operatorPhone?.type === "required" ||
              (errors.operatorPhone?.type === "pattern" && (
                <MyP role="alert"> Enter valid Phone No</MyP>
              ))}
            <MDBInput
              wrapperClass="mb-2"
              label="Operator UID"
              id="operatorUid"
              type="text"
              {...register("operatorUid", { required: true })}
              aria-invalid={errors.operatorUid ? "true" : "false"}
            />
            {errors.operatorUid?.type === "required" && (
              <MyP role="alert">operator Uid is required</MyP>
            )}

            <Button type="submit" className="mb-2 w-100">
              Sign up
            </Button>
          </form>
        </MDBTabsPane>

        {/* {operator register form ends here } */}

        {/* =================== */}
        <MDBTabsPane show={justifyActive === "tab2"}>
          {/* <Switch
            checked={toggleState}
            onChange={handleToggle}
            name="toggle"
            color="primary"
          /> */}

          <BootstrapSwitchButton
            checked={false}
            onlabel="Operator Registration"
            onstyle="success"
            offlabel="Customer Registration"
            offstyle="danger"
            style="w-100 mx-3"
            onChange={handleToggle}
          />

          {/* {Customer register form start here } */}

          <center>
            <h4>Customer Register</h4>
          </center>
          <form onSubmit={handleSubmit2(handleCustomerRegister)}>
            <MDBInput
              wrapperClass="mb-1"
              label="First Name"
              id="custFirstName"
              type="text"
              {...register2("custFirstName", { required: true })}
              aria-invalid={errors2.custFirstName ? "true" : "false"}
            />
            {errors2.custFirstName?.type === "required" && (
              <MyP role="alert">first Name is required</MyP>
            )}
            <MDBInput
              wrapperClass="mb-1"
              label="Last Name"
              id="custLastName"
              type="text"
              {...register2("custLastName", { required: true })}
              aria-invalid={errors2.custLastName ? "true" : "false"}
            />
            {errors2.custLastName?.type === "required" && (
              <MyP role="alert">last Name is required</MyP>
            )}
            <MDBInput
              wrapperClass="mb-1"
              label="Email"
              id="custEmail"
              type="email"
              {...register2("custEmail", { required: true })}
              aria-invalid={errors2.custEmail ? "true" : "false"}
            />
            {errors2.custEmail?.type === "required" && (
              <MyP role="alert">invalid email</MyP>
            )}
            <MDBInput
              wrapperClass="mb-1"
              label="Password"
              id="custPassword"
              type="password"
              {...register2("custPassword", {
                required: true,
                max: 16,
                min: 8,
                pattern:
                  /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/i,
              })}
              aria-invalid={errors2.custPassword ? "true" : "false"}
            />
            {errors2.custPassword?.type === "required" ||
              (errors2.custPassword?.type === "pattern" && (
                <MyP role="alert">
                  Invalid Password. valid exapmle:{" "}
                  <span style={{ color: "green" }}>Pass@12345</span>
                </MyP>
              ))}

            <MDBInput
              wrapperClass="mb-1"
              label="Phone"
              id="custPhone"
              type="number"
              {...register2("custPhone", {
                required: true,
                pattern: /^(\+91|\+91\-|0)?[789]\d{9}$/i,
              })}
              aria-invalid={errors2.custPhone ? "true" : "false"}
            />
            {errors2.custPhone?.type === "required" ||
              (errors2.custPhone?.type === "pattern" && (
                <MyP role="alert">invalid phone no</MyP>
              ))}

            <label htmlFor="custGender" className="grey-text"></label>
            <select
              id="custGender"
              className="browser-default custom-select"
              {...register2("custGender", { required: true })}
              aria-invalid={errors2.custGender ? "true" : "false"}
            >
              <option value="" disabled selected>
                Select your gender
              </option>
              <option value="MALE">MALE</option>
              <option value="FEMALE">FEMALE</option>
              <option value="PASSWORD">OTHER</option>
            </select>
            {errors2.custGender?.type === "required" && (
              <MyP role="alert">gender is required</MyP>
            )}
            <MDBInput
              style={{ marginTop: "20px" }}
              wrapperClass="mb-2"
              label="date of Birth"
              id="dob"
              type="date"
              {...register2("dob", { required: true })}
              aria-invalid={errors2.dob ? "true" : "false"}
            />
            {errors2.dob?.type === "required" && (
              <MyP role="alert">DOB is required</MyP>
            )}

            <Button type="submit" className="mb-2 w-100">
              Sign up
            </Button>
          </form>

          {/* {Customer register form end here } */}
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
}

export default LoginCode;
