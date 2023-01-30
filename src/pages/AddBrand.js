import React from "react";
import '../App.css';

const AddBrand = () => {
  return (
      <div>
        <form action="">
          <h3 className="title mb-4">Enter Brand</h3>
          <input type="text" className="form-control fs-4" label="Enter Blog category"/>
          <button className="btn btn-success rounded-3 border-0 my-5 fs-4">
            Add Brand
          </button>
        </form>
      </div>
  );
};

export default AddBrand;
