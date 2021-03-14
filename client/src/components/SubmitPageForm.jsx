import React, { useState } from "react";

const SubmitPageForm = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <div className="second-page-form-container">
        <form className="second-page-form">
          <div className="single-page-form-question-container">
            <p>Have you had a tooth pulled or removed?</p>
            <label>
              <input type="radio" value="Yes" name="toothPulledRemoved" />
              Yes
            </label>
            <label>
              <input type="radio" value="No" name="toothPulledRemoved" />
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
            />
          </div>
          <div className="wide-button-form-container">
            <button className="wide-button">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SubmitPageForm;
