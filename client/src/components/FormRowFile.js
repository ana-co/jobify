import React, { useRef } from 'react';

const FormRowFile = ({ name, onFileSelect, accept = 'application/pdf' }) => {
  const fileInput = useRef(null);

  const handleFileInput = (e) => {
    // handle validations
    onFileSelect(e.target.files[0]);
  };

  return (
    <div className="file-uploader">
      <input
        type="file"
        name={name}
        accept={accept}
        onChange={handleFileInput}
      />
      <button
        onClick={(e) => fileInput.current && fileInput.current.click()}
        className="btn btn-primary"
      ></button>
    </div>
  );
};

export default FormRowFile;
