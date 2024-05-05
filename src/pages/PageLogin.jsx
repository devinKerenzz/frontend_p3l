import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const PageLogin = () => {
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
            <h1 style={{ color: "#8b0000" }}>My Account</h1>
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
                Login
              </h3>
            </div>
            <div className="card-body">
              <form>
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
                  <p className="mb-0">
                    <Link
                      to="/forget-password"
                      className="text-decoration-none"
                      style={{ color: "#8b0000", fontWeight: "bold" }}
                    >
                      Forget Password ?
                    </Link>{" "}
                    {/* Tambahkan tautan Forget Password */}
                  </p>
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
                  Login
                </button>
              </form>
            </div>
            <div className="card-footer text-center" style={{backgroundColor:"#d2b48c"}}>
              <p className="mb-0">
                <span style={{color: "#8b0000"}}>Belum punya akun ? </span>{" "}
                <span style={{ display: "inline-block", fontWeight: "bold" ,color: "#8b0000"}}>
                  <Nav.Link as={Link} to="/register">
                    Register
                  </Nav.Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLogin;
