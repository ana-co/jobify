import React from 'react';

const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className="form-input"
        // pattern={type === 'tel' ? '[0-9]{3}-[0-9]{2}-[0-9]{3}' : undefined}
      ></input>
    </div>
  );
};
export default FormRow;
