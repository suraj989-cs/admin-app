import React from "react";
import { Link } from "react-router-dom";
import CustomInput from "../components/CustomInput";
import './Login.css'

const Login = () => {
  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center">Ecommerce</h3>
        <p className="text-center display-6">Login to continue</p>
        <form action="">
          <h3 className="form-label">Email:</h3>
          <CustomInput type="text" id="email" />

            <h3 className="form-label">Password:</h3>
              <CustomInput
                className="form-control"
                type="password"
                id="password"
              />
              <div className="mb-3 text-end">
                <Link to="/forgotPassword">Forgot Password?</Link>
              </div>

          <Link to='/admin'
            className="border-0 px-3 py-3 text-white fw-bold w-100 rounded-3 text-decoration-none text-center"
            type="submit"
            style={{ background: "#ffd333"}}
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
