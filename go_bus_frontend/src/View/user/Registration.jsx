import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import { toast } from "react-toastify";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const onRegister = async () => {
    navigate("/login");
    if (name.length === 0) {
      toast.error("Please enter your name");
    } else if (email.length === 0) {
      toast.error("Please enter your email");
    } else if (password.length === 0) {
      toast.error("Please enter a password");
    } else if (rePassword !== password) {
      toast.error("Passwords do not match");
    } else if (phone.length === 0) {
      toast.error("Please enter your phone number");
    } else {
       
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="heading">Register</h2>
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Enter your full name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                onChange={(e) => setRePassword(e.target.value)}
                type="password"
                className="form-control"
                placeholder="Re-enter your password"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="mb-3">
              <button onClick={onRegister} className="btn btn-primary mt-3 w-100">
                Register
              </button>
            </div>
            <div>
              Already have an account? <Link to="/login">Login here</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
