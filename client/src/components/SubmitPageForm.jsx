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
            <p>How long have you been in pain?</p>
            <label>
              <input type="radio" value="option1" name="value" checked={true} />
              Days
            </label>
            <label>
              <input type="radio" value="option2" name="value" />
              Weeks
            </label>
            <label>
              <input type="radio" value="option2" name="value" />
              Months
            </label>
          </div>
          <div className="single-page-form-question-container">
            <p>What causes the pain?</p>
            <label>
              <input type="radio" value="option1" name="value" checked={true} />
              Hot
            </label>
            <label>
              <input type="radio" value="option2" name="value" />
              Cold
            </label>
            <label>
              <input type="radio" value="option2" name="value" />
              Chewing
            </label>
            <label>
              <input type="radio" value="option2" name="value" />
              Constant pain with no stimulus
            </label>
            <label>
              <input type="radio" value="option2" name="value" />
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
            <textarea className="largest-submit-input-form" />
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
