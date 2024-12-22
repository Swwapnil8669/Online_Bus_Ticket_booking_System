import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./forgotPassword.css";
import { toast } from "react-toastify";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const onForgotPassword = async () => {
    navigate("/login");
    if (email.length === 0) {
      toast.error("Please enter your email");
    } else if (otp.length === 0) {
      toast.error("Please enter the OTP sent to your email");
    } else if (newPassword.length === 0) {
      toast.error("Please enter your new password");
    } else if (confirmPassword.length === 0) {
      toast.error("Please confirm your password");
    } else if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      // Handle OTP verification and password reset logic
      toast.success("Password reset successful");
       
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <h2 className="heading">Forgot Password</h2>
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
              <label className="form-label">OTP</label>
              <input
                onChange={(e) => setOtp(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Enter the OTP sent to your email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">New Password</label>
              <input
                onChange={(e) => setNewPassword(e.target.value)}
                type="password"
                className="form-control"
                placeholder="Enter your new password"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                className="form-control"
                placeholder="Confirm your new password"
              />
            </div>
            <div className="mb-3">
              <button
                onClick={onForgotPassword}
                className="btn btn-primary mt-3 w-100"
              >
                Reset Password
              </button>
            </div>
            <div className="mb-3">
              Remembered your password? <Link to="/login">Login here</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
