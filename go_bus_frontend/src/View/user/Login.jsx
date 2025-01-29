import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onLogin = async () => {
    if (email.length === 0) {
      toast.error("Please enter email");
    } else if (password.length === 0) {
      toast.error("Please enter password");
    } else {
      navigate("/");
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
      <div className="modal-header p-4 pb-3 border-bottom-0 rounded-4 " style={{ backgroundColor: '#004085', color: 'white', width: '50%', margin: 'auto' }}>
        <h2 className="fw-bold mb-0 ">Login</h2>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <div className="col-md-6">
          <div className="card p-4 shadow-sm rounded-4">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
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
              <div>
                Don't have an account? <Link to="/register">Register here</Link>
              </div>
              <div>
                Forgot password? <Link to="/Forgot-Password">Forgot password?</Link>
              </div>
              <button onClick={onLogin} className="btn btn-primary mt-3 w-100">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
