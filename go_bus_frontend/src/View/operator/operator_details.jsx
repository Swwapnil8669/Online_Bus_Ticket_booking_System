import React, { useState } from "react";
import { PersonalDetails } from "./personal_details";
import { BankDetails } from "./bank_details";
import { GstDetails } from "./gst_details";

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

  const handleSubmit = () => {
    const data = {
      personalDetails,
      bankDetails,
      gstDetails,
    };

    console.log("Data to submit:", data);
  };

  const nextStep = () => {
    if (step < 2) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  return (
    <div>
      <h1 className="d-flex justify-content-center">Registration</h1>

      {step === 0 && <PersonalDetails personalDetails= {personalDetails} setPersonalDetails = {setPersonalDetails} />}
      {step === 1 && <BankDetails bankDetails = {bankDetails} setBankDetails = {setBankDetails} />}
      {step === 2 && <GstDetails gstDetails = {gstDetails} setGstDetails = {setGstDetails} />}

      <div className="d-flex justify-content-center mt-3">
        {step > 0 && (
          <button className="btn btn-secondary me-2" onClick={prevStep}>
            Previous
          </button>
        )}

        {step < 2 && (
          <button className="btn btn-primary me-2" onClick={nextStep}>
            Next
          </button>
        )}

        {step === 2 && (
          <button
            className="btn btn-success"
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
