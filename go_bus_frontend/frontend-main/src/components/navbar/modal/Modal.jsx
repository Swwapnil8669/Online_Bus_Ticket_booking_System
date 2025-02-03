import LoginCode from "./LoginCode";
import "./Modal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus, faHome, faHouse } from "@fortawesome/free-solid-svg-icons";

function Modal({ scheduleState }) {
  const navigate = useNavigate();

  return (
    <div className="modalBackground">
      <div
        className="modalContainer"
        style={{
          width: "80%",
          maxWidth: "600px",
          maxHeight: "95%",
          // margin: "0 auto",
          padding: "1.5rem",
          borderRadius: "5px",
          backgroundColor: "white",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.25)",
          overflowY: "scroll",
        }}
      >
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            <FontAwesomeIcon
              icon={faHome}
              className="headerIcon"
              style={{
                margin: "2px",
                marginLeft: "25px",
                color: "#0e56bc",
                height: "30px",
              }}
            ></FontAwesomeIcon>
          </button>
        </div>
        <LoginCode scheduleState={scheduleState}></LoginCode>
      </div>
    </div>
  );
}

export default Modal;
