import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const PageRegister = () => {
  return (
    <div className="d-flex flex-column h-100 mb-5">
      <div
        className="container-fluid mt-4 mb-4 d-flex justify-content-center align-items-center"
        style={{
          backgroundColor: "#d2b48c",
          height: "165px",
          position: "relative",
        }}
      >
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center">
            <h1 style={{ color: "#8b0000" }}>Register Account</h1>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "-2px",
            bottom: "-2px",
            left: 0,
            right: 0,
            borderBottom: "5px solid #A0522D",
            borderTop: "5px solid #A0522D",
          }}
        ></div>
      </div>

      <div className="container d-flex justify-content-center align-items-center h-50">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header" style={{ backgroundColor: "#d2b48c" }}>
              <h3
                className="text-center"
                style={{ color: "#8b0000", backgroundColor: "#d2b48c" }}
              >
                Register
              </h3>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Username"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="date"
                    className="form-control"
                    id="birthdate"
                    placeholder="Birthdate"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  style={{
                    backgroundColor: "#d2b48c",
                    color: "#8b0000",
                    fontWeight: "bold",
                  }}
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageRegister;
