import React, { useState } from "react";
import { PersonalDetails } from "./personal_details";
import { BankDetails } from "./bank_details";
import { GstDetails } from "./gst_details";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function OperatorDetails() {
  const [step, setStep] = useState(0);

  const [personalDetails, setPersonalDetails] = useState({
    travelName: "",
    city: "",
    state: "",
    pincode: "",
    ownerName: "",
    district: "",
    country: "",
    panNo: "",
  });

  const [bankDetails, setBankDetails] = useState({
    beneficiaryName: "",
    bankName: "",
    accountNo: "",
    ifscCode: "",
    accountType: "",
  });

  const [gstDetails, setGstDetails] = useState({
    hasGst: "true",
    gstNumber: "",
  });

  const validateStep = () => {
    if (step === 0) {
      // Validate personal details sequentially
      for (const key of Object.keys(personalDetails)) {
        if (!personalDetails[key]) {
          toast.error(`Please fill in the ${key.replace(/([A-Z])/g, ' $1')}`, {
            position: "top-right",
            autoClose: 5000,
          });
          return false; // Stop validation on the first error
        }
      }
    } else if (step === 1) {
      // Validate bank details sequentially
      for (const key of Object.keys(bankDetails)) {
        if (!bankDetails[key]) {
          toast.error(`Please fill in the ${key.replace(/([A-Z])/g, ' $1')}`, {
            position: "top-right",
            autoClose: 5000,
          });
          return false; // Stop validation on the first error
        }
      }
    } else if (step === 2) {
      // Validate GST details
      if (gstDetails.hasGst === "true" && !gstDetails.gstNumber) {
        toast.error("Please enter the GST number", {
          position: "top-right",
          autoClose: 5000,
        });
        return false; // Stop validation
      }
    }
    return true; // All validations passed
  };
  

  const nextStep = () => {
    if (validateStep()) {
      if (step < 2) {
        setStep(step + 1);
      }
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    if (validateStep()) {
     
    const data = {
      personalDetails,
      bankDetails,
      gstDetails,
    };
    console.log("Data to submit:", data);
  }

    
  };

  return (
    <div
      className=" modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5"
      style={{  
        width: '100vw',  
        height: '100vh', // Make it full height as well if needed  
        background: 'linear-gradient(135deg, #e0f7fa, #b3e5fc)', // soft blue gradient  
      }} 
    >
      <ToastContainer />
      <h1 className="d-flex justify-content-center" style={{ color: '#004085', fontSize: '2rem', fontWeight: 'bold' }}>
        Registration
      </h1>

      <div className="modal-dialog">
        <div className="modal-content rounded-4 shadow" style={{ backgroundColor: '#f1f9ff' }}>
          <div className="modal-header p-5 pb-4 border-bottom-0" style={{ backgroundColor: '#004085', color: 'white' }}>
            <h1 className="fw-bold mb-0 fs-2">Operator Registration</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body p-5 pt-0">
            {step === 0 && <PersonalDetails personalDetails={personalDetails} setPersonalDetails={setPersonalDetails} />}
            {step === 1 && <BankDetails bankDetails={bankDetails} setBankDetails={setBankDetails} />}
            {step === 2 && <GstDetails gstDetails={gstDetails} setGstDetails={setGstDetails} />}
          </div>

          <div className="modal-footer p-4 mt-3">
            <div className="d-flex justify-content-between w-100">
              {step > 0 && (
                <button className="btn btn-secondary me-2" onClick={prevStep}>
                  Previous
                </button>
              )}

              {step < 2 && (
                <button className="btn btn-primary" onClick={nextStep}>
                  Next
                </button>
              )}

              {step === 2 && (
                <button className="btn btn-success" onClick={handleSubmit}>
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
