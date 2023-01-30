import React from "react";
import '../App.css';

const AddBlogCat = () => {
  return (
      <div>
        <form action="">
          <h3 className="title mb-4" >Enter Blog Category</h3>
          <input type="text" className="form-control fs-4" label="Enter Blog category"/>
          <button className="btn btn-success rounded-3 border-0 my-5 fs-4">
            Add Blog Category
          </button>
        </form>
      </div>
  );
};

export default AddBlogCat;
