import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import "./login.css";
import{toast} from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const navigate = useNavigate();

  const onlogin = async () => {
    navigate("/");
    if (email.length == 0) {
      toast.error("please enter email");
    } else if (password.length == 0) {
      toast.error("please enter password");
      
    } else  {
        //login api call 
        
    }  
  };

  return (
    <div className="login-container">
  <div className="login-card">
    <h2 className="heading">Login</h2>
    <div className="row">
      <div className="col">
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
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
          <div>
            Don't have an account? <Link to="/register">Register here</Link>
          </div>
          <div>
            Forgot password? <Link to="/Forgot-Password">Forgot password?</Link>
          </div>
          <button onClick={onlogin} className="btn btn-primary mt-3 w-100">
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default Login;
