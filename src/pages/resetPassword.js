import React from "react";
import CustomInput from "../components/CustomInput";

const ResetPassword = () => {
  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center">Ecommerce</h3>
        <p className="text-center display-6">Reset password</p>
        <form action="">
          <h3 className="form-label">New password:</h3>
          <CustomInput type="password" id="password" />
          <h3 className="form-label">Confirm password:</h3>
          <CustomInput type="password" id="confirmPassword" />
          <button
            className="border-0 px-3 py-3 text-white fw-bold w-100 rounded-3"
            type="submit"
            style={{ background: "#ffd333" }}
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
