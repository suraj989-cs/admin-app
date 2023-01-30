import React from 'react'
import CustomInput from '../components/CustomInput';
import '../App.css';

const AddCategory = () => {
    return (
        <div>
            <form action="">
                <h3 className='title mb-4'>Add Category</h3>
                <CustomInput type="text" className="form-control fs-4" />
                <button className="btn btn-success rounded-3 border-0  fs-4">
                    Add Category
                </button>
            </form>
        </div>
  );
};

export default AddCategory