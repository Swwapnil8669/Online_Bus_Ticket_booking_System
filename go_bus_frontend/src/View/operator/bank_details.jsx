import React from "react";

export function BankDetails({bankDetails, setBankDetails}) {
 const handleChange = (e) => {
    const {name, value} = e.target;
    setBankDetails({
        ...bankDetails,
        [name]: value
    })
 }
  return (
    <div className="container">
      <h4>Bank Details:</h4>
      <div className="d-flex justify-content-center">
        <div className="container">
          <div className="">
            <div className="row justify-content-center">
              <div className="d-flex flex-column col-md-8">
                <div className="form-group">
                  <label htmlFor="beneficiaryName">Beneficiary Name</label>
                  <input
                    type="text"
                    className="form-control border border-secondary"
                    id="beneficiaryName"
                    name="beneficiaryName"
                    value={bankDetails.beneficiaryName}
                    onChange={handleChange}
                    placeholder="Enter beneficiary name"
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="bankName">Bank Name</label>
                  <input
                    type="text"
                    className="form-control border border-secondary"
                    id="bankName"
                    name="bankName"
                    value={bankDetails.bankName}
                    onChange={handleChange}
                    placeholder="Enter bank name"
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="accountNo">Account No.</label>
                  <input
                    type="text"
                    className="form-control border border-secondary"
                    id="accountNo"
                    name="accountNo"
                    value={bankDetails.accountNo}
                    onChange={handleChange}
                    placeholder="Enter account number"
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="ifscCode">IFSC Code</label>
                  <input
                    type="text"
                    className="form-control border border-secondary"
                    id="ifscCode"
                    name="ifscCode"
                    value={bankDetails.ifscCode}
                    onChange={handleChange}
                    placeholder="Enter IFSC code"
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="accountType">Account Type</label>
                  <input
                    type="text"
                    className="form-control border border-secondary"
                    id="accountType"
                    name="accountType"
                    value={bankDetails.accountType}
                    onChange={handleChange}
                    placeholder="Enter account type (e.g., Savings, Current)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
