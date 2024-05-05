import React from "react";

const PageProfileCustomer = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card" style={{ backgroundColor: "#d2b48c" }}>
            <div className="card-header">
              <h3 className="text-center" style={{ color: "#8b0000" }}>Customer Profile</h3>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="username" className="form-label" style={{ color: "#8b0000" }}>
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  readOnly
                  value="john_doe123"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label" style={{ color: "#8b0000" }}>
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  readOnly
                  value="John Doe"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="saldo" className="form-label" style={{ color: "#8b0000" }}>
                  Saldo
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="saldo"
                  readOnly
                  value="$1000"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="dob" className="form-label" style={{ color: "#8b0000" }}>
                  Date of Birth
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="dob"
                  readOnly
                  value="January 1, 1990"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="points" className="form-label" style={{ color: "#8b0000" }}>
                  Points
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="points"
                  readOnly
                  value="500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageProfileCustomer;
