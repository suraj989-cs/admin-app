import React from 'react';


const CustomInput = (props) => {
    const { type, label, i_id, i_class } = props;
    return (
        <div className="mb-3 ">
            <input type={type} className={`form-control fs-4 ${i_class}`} id={i_id} placeholder={label} />
            {/* <label htmlFor={label}>{label}</label> */}
        </div>
    );
}

export default CustomInput