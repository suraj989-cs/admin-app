import React from "react";
import CustomInput from "../components/CustomInput";

const ForgotPassword = () => {
  return (
    <div className="py-5" style={{ background: "#ffd333" , minHeight:"100vh"}}>
      <br /><br /><br /><br /><br /><br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center">Ecommerce</h3>
        <p className="text-center display-6">Forgot password</p>
        <form action="">
        <h3 className="form-label">Enter your email:</h3>
        <CustomInput type="password" id="email"  />
        <button
          className="fs-5  border-0 px-3 py-3 text-white fw-bold w-100 rounded-3"
          type="submit"
          style={{ background: "#ffd333"}}
        >
          Forgot Password
        </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
