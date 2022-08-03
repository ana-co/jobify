import { useParams } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/JobApplication';
import { FormRow, FormRowSelect, Alert, FormRowFile } from '../../components';
// import PhoneInput from 'react-phone-input-2';

const initialState = {
  name: '',
  lastName: '',
  gender: 'Female',
  email: '',
  phone: '',
  resume: undefined,
  // address: '',
};

const JobApplication = () => {
  const { jobId } = useParams();

  const [values, setValues] = useState(initialState);

  const { isLoading, applyForJob, showAlert, displayAlert } = useAppContext();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!values.email || !values.name || !values.resume) {
      displayAlert();
      return;
    }

    var formData = new FormData(document.getElementById('job-application'));
    formData.append('fileName', values.resume.name);

    applyForJob(jobId, formData);
  };

  return (
    <Wrapper className="full-page">
      <form
        className="form"
        id="job-application"
        encType="multipart/form-data"
        onSubmit={onSubmit}
      >
        <h3>{'Job Application'}</h3>

        {showAlert && <Alert />}

        {/** name input */}
        <FormRow
          type="text"
          name="name"
          value={values.name}
          handleChange={handleChange}
        />

        {/** lastName input */}
        <FormRow
          type="text"
          labelText="last name"
          name="lastName"
          value={values.lastName}
          handleChange={handleChange}
        />

        {/** gender input */}
        <FormRowSelect
          name="gender"
          labelText="gender"
          value={values.gender}
          handleChange={handleChange}
          list={['Male', 'Female', 'Other']}
        />

        {/* email input */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          // type="number"
          type="tel"
          name="phone"
          value={values.phone}
          handleChange={handleChange}
        />

        {/* resume */}

        <FormRowFile
          name="resume"
          onFileSelect={(file) => {
            setValues({ ...values, resume: file });
          }}
        />

        {/** phone input */}
        {/* <PhoneInput
          country={'ge'}
          name="phone"
          value={values.phone}
          onChange={(number) => {
            setValues({ ...values, phone: number });
          }}
        /> */}

        <button type="submit" className="btn btn-block" disabled={isLoading}>
          apply
        </button>
      </form>
    </Wrapper>
  );
};

export default JobApplication;
