import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const onRegister = async () => {
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
      navigate("/login");
    }
  };

  return (
    <div className=" modal modal-sheet position-static d-block bg-body-secondary  py-md-5 "
    style={{  
      width: '100vw',  
      height: '100vh', // Make it full height as well if needed  
      background: 'linear-gradient(135deg, #e0f7fa, #b3e5fc)', // soft blue gradient  
    }} >

    <div className="container-fluid mt-5 "style={{ width: '50%' }}>
      <div className="modal-header p-4 pb-3  rounded-4" style={{ backgroundColor: '#004085', color: 'white',width:"50%" , margin: 'auto'}}>
        <h2 className="fw-bold mb-0">Register</h2>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <div className="col-md-6">
          <div className="card p-4 shadow-sm rounded-4">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                className="form-control border border-secondary"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control border border-secondary"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control border border-secondary"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="rePassword">Confirm Password</label>
              <input
                type="password"
                className="form-control border border-secondary"
                id="rePassword"
                name="rePassword"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
                placeholder="Re-enter your password"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                className="form-control border border-secondary"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
              />
            </div>
            <div className="form-group mt-3">
              <button onClick={onRegister} className="btn btn-primary w-100">
                Register
              </button>
            </div>
            <div className="form-group mt-2">
              Already have an account? <Link to="/login">Login here</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Register;
