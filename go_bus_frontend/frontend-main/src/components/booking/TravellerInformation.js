import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { UserContext } from "../../App";

const TravelInfoCont = styled.div`
  width: 100%;
  margin-top: 3%;
  border: 1px solid rgb(206, 202, 202);
  box-shadow: rgba(32, 33, 36, 0.18) 0px 1px 6px 0px;
  overflow: auto;
`;
const Checkbox = styled.input`
  height: 15px;
  width: 15px;
`;
const Para = styled.p`
  font-size: 15px;
  margin-left: 3%;
  font-family: "" Open Sans ", Arial, Helvetica, sans-serif";
  color: rgb(80, 80, 80);
  font-weight: 600;
  text-size-adjust: 100%;
`;
const Logindetails = styled.div`
  height: 70px;
  width: 95%;
  display: flex;
  margin-left: 3%;
  margin-top: 1%;
  /* display: flex; */
  /* flex-direction: column; */
  /* border: 1px solid rgb(206, 202, 202); */
`;
const Input = styled.input`
  height: 40px;
  width: 250px;
  border: 1px solid rgb(206, 202, 202);
  margin-left: 3%;
  margin-top: 1%;
`;
const InputAge = styled.input`
  height: 33px;
  width: 51.56px;
  background-color: #ffffff;
  padding: 1px 20px 1px 2px;
  margin-left: 3%;
  margin-top: 1%;
  border: 1px solid rgb(206, 202, 202);
`;
const Select = styled.select`
  height: 40px;
  width: 250px;
  border: 1px solid rgb(206, 202, 202);
  margin-left: 3%;
  margin-top: 1%;
  text-size-adjust: 100%;
`;
const ReviewTitleCont = styled.div`
  height: 45px;
  background-color: #e9edee;
  padding: 1px;
`;
const ReviewTitle = styled.div`
  color: #4a4a4a;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  margin-top: 10px;
  margin-left: 10px;
`;
const RadioButton = styled.input`
  z-index: 1;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-left: 10px;
  cursor: pointer;
  margin-top: 19px;
`;
const RadioDiv = styled.div`
  padding: 0 0.45em;
  font-size: 14px;
  margin-left: 10px;
  margin-top: 19px;
`;

const FullName = styled.input`

    outline: 0;
    border-width: 0 0 2px;
    border-color: blue
  input:focus {
    border-color: green;
    outline: 1px dotted #000
  }

`;

export const TravellerInformation = ({ setTravellerInfo, scheduleInfo }) => {
  const user = useContext(UserContext);
  //   const classes = useStyles();
  const passangers = scheduleInfo.seats.filter((e) => e.isSelected == true);
  console.log("from passangers");
  console.log(passangers);
  
  const [passengerState, setPassengerState] = useState([]);

  var passengersArray = [];
  var passengerObj = {
    Travellergender: null,
    fullName: null,
    seatNo: null,
  };

  useEffect(() => {
    for (var i = 0; i < passangers.length; i++) {
      passengersArray.push({...passengerObj, id : i});
    }
    setPassengerState(passengersArray);
    console.log("State of Passenger ", passengerState);
  }, []);
  return (
    <TravelInfoCont>
      <ReviewTitleCont>
        <ReviewTitle>02 Traveller Information</ReviewTitle>
      </ReviewTitleCont>
      {passangers.map((item, key) => (
        <Logindetails>
          {console.log("id of each trva: ", key)}
          <p style={{ textAlign: "left" }}>Travller</p>
          <div
            style={{ display: "flex", marginTop: "20px", marginLeft: "-70px" }}
          >
            <RadioButton
                    onChange={(event) => {
                                var tempPassengerState = passengerState;
                                tempPassengerState[key].Travellergender = event.target.value;
                                tempPassengerState[key].seatNo = item.seatNo;
                                setPassengerState(tempPassengerState);
                                console.log("after Changing Gender : ", tempPassengerState);
                                
                    }}
                    type="radio"
                    id={key}
                    name={"gender" + item.seatNo}
                    value="MALE"
            />
            <RadioDiv>Male</RadioDiv>
            <RadioButton
              onChange={(event) => {
                                var tempPassengerState = passengerState;
                                tempPassengerState[key].Travellergender = event.target.value;
                                tempPassengerState[key].seatNo = item.seatNo;
                                setPassengerState(tempPassengerState);
                                console.log("after Changing Gender : ", tempPassengerState);
              }}
              type="radio"
              name={"gender" + item.seatNo}
              value="FEMALE"
            />
            <RadioDiv>Female</RadioDiv>
          </div>
          <br />
          <div>
            {/* <div>aaaaa</div> */}
            <div
              style={{ display: "flex", marginTop: "27px", marginLeft: "20px" }}
            >
              <FullName
                onChange={(event) => {
                          var tempPassengerState = passengerState;
                          tempPassengerState[key].fullName = event.target.value;
                          tempPassengerState[key].seatNo = item.seatNo;
                          setPassengerState(tempPassengerState);
                          console.log("after changing Text: ", passengerState);
                }}
                id={key}
                placeholder="FullName"
                type="text"
                
              />
              {/*<TextField label="Age" className={classes.ageInput} required /> */}

              {/* <Input placeholder="Full Name"></Input> */}
              {/* <InputAge placeholder="Age"/> */}

              <p>Seat {item.seatNo}</p>
            </div>
          </div>
        </Logindetails>
      ))}

                                    {/* {
                                        "paymentStatus":true,
                                        "transactionId":123456,
                                        "travellers":[
                                            {
                                                "Travellergender":"MALE",
                                                "fullName":"Chota Bhai",
                                                "age":22,
                                                "seatNo":1
                                            },

                                            {
                                                "Travellergender":"FEMALE",
                                                "fullName":"Elder sister",
                                                "age":28,
                                                "seatNo":2
                                            },
                                            {
                                                "Travellergender":"OTHER",
                                                "fullName":"THEM THEM",
                                                "age":26,
                                                "seatNo":3
                                            }
                                        ]
                                    } */}

      <Button style={{margin:"20px"}} onClick={()=>{
                                                      var finalBookingObject = {
                                                        travellers:passengerState,
                                                      }


                                                      console.log("complete array-------", finalBookingObject)
                                                      setTravellerInfo(finalBookingObject)
                                                }} >
            Save Info</Button>
      <hr />
      <div style={{ textAlign: "left" }}>
        <Para>Contact Information</Para>
        <p style={{ marginLeft: "25px" }}>
          Your ticket and PNR Info will be sent to these.
        </p>
        <Logindetails style={{ marginLeft: "-5px" }}>
          <Input placeholder="Email ID" value={user[0].custEmail}></Input>
          <Input placeholder="Mobile No." value={user[0].custPhone}></Input>
        </Logindetails>
        {/* <br /> */}

        {/* <br /> */}
        <Para>
          <Checkbox type="checkbox"></Checkbox>I agree to all the{" "}
          <a
            href="https://paytm.com/about-us/our-policies/#tandc"
            style={{ color: "#00b9f5", textDecoration: "none" }}
          >
            terms and conditions
          </a>
        </Para>
        <br />
      </div>
    </TravelInfoCont>
  );
};