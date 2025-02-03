import { useContext, useState } from "react";
import styles from "./Payment.module.css";
// import { input } from "@material-ui/core";
// import { Button } from "@material-ui/core";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import TravellerInfoContext from "../context/TravellerInfoContext";
import axios from "axios";

// ===================================

function PaymentPage() {
  const [credit, setCredit] = useState(false);
  const [debit, setDebit] = useState(false);
  const [UPI, setUpi] = useState(false);
  const [UpiId, setUpiId] = useState(true);

  const location = useLocation();
  console.log("-----payment page location-----: ", location);

  const handle = (e) => {
    const val = e.target.value;
    if (val === "credit") {
      setCredit(true);
      setDebit(false);
      setUpi(false);
    } else if (val === "debit") {
      setCredit(false);
      setDebit(true);
      setUpi(false);
    } else if (val === "upi") {
      setCredit(false);
      setDebit(false);
      setUpi(true);
    }
  };
  const navigate = useNavigate();

  const makePayment = async (token) => {
    navigate.push("/success");
  };

  return (
    <div style={{ paddingBottom: "180px" }}>
      <div className={styles.iconDiv}>
        <img
          src="https://staticpg.paytm.in/pgp/web/assets/logo.png"
          width="100%"
          height="50%"
          alt="icon"
        />
      </div>
      <div className={styles.firstDiv}>
        <div className={styles.goBack}>
          {/* <Link>Go back</Link> */}
          Go back
        </div>
        <hr style={{ borderBottom: ".4px light grey" }} />
        <div
          style={{
            display: "flex",
            marginLeft: "20px",
            justifyContent: "space-between",
            marginRight: "20px",
          }}
        >
          <div>
            <h3 style={{ fontSize: "18px", marginBottom: "-10px" }}>
              Paytm Bus tickets Order
            </h3>
          </div>
          <div>
            <p style={{ marginBottom: "-10px" }}>Amount to be paid</p>
            <h3>Rs {location.state.totalFare}</h3>
          </div>
        </div>
      </div>
      <div
        className={styles.firstDiv}
        style={{ paddingTop: "30px", borderRadius: "0" }}
      >
        <p>Enter card no.</p>
        <input type="text" />
        <p>Enter CVV</p>
        <input type="text" />

        <p>Enter OTP</p>
        <input type="text" />
        <br></br>
        <br></br>
        <Button
          onClick={() => {
            console.log("traveller info: ", location.state.travellerInfo);
            // /bus/book/{id}/{scheduleId}

            let obj = location.state.travellerInfo;

            let arr = obj.travellers.filter((e) => e.seatNo != null);

            obj.travellers = arr;

            console.log("objjjj and arr", obj, arr);

            axios
              .post(
                `http://localhost:8080/bus/book/${location.state.id}/${location.state.schedule.scheduleId}`,
                obj
              )
              .then((response) => {
                console.log("reposne after post req: ", response);

                var res = response.data;
                navigate("/bill", { state: { res } });
              });
          }}
        >
          Proceed
        </Button>
      </div>

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
      {/* ======================================================================= */}
    </div>
  );
}

export default PaymentPage;
