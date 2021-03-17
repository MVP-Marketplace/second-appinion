import React, { useState } from "react";

const SubmitPageForm = (props) => {
  const [formData, setFormData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <>
      <div className="second-page-form-container">
        <form className="second-page-form" onSubmit={onSubmit}>
          <div className="single-page-form-question-container">
            <p>Have you had a tooth pulled or removed?</p>
            <label>
              <input
                type="radio"
                value="Yes"
                name="toothPulledRemoved"
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="No"
                name="toothPulledRemoved"
                onChange={handleChange}
              />
              No
            </label>
          </div>
          <div className="single-page-form-question-container">
            <label htmlFor="email">
              Please add any other information you would like the dentist to
              know.
            </label>
            <p className="form-question-header-caption">
              (Please type your response below)
            </p>
            <textarea
              className="largest-submit-input-form"
              id="additionalInformationForDentis"
              type="text"
              name="additionalInformationForDentis"
              onChange={handleChange}
            />
          </div>
          <div className="wide-button-form-container">
            <button className="wide-button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SubmitPageForm;
