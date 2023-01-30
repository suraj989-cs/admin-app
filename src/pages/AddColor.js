import React from 'react';
import '../App.css';

const AddColor = () => {
    return (
        <div>
            <form action="">
                <h3 className='title mb-4'>Add Color</h3>
                <div class="card">
                    <div class="card-body text-center d-flex justify-content-center align-items-center flex-column">
                        <p>Click the below button to select color</p>
                        <input type='color' class="border-0 w-50" />
                        <button className="btn btn-primary mt-3 rounded-3 border-0  fs-4">
                            Add Color
                        </button>
                    </div>
                </div>
            </form>
        </div>


    );
};

export default AddColor