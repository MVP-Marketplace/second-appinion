import React, { useState } from "react";

const FormUserDetails = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div className="second-page-form-container">
        <form className="second-page-form">
          <div className="single-page-form-question-container">
            <p>4. When was your last dental visit?</p>
            <label>
              <input type="radio" value="option1" name="value" checked={true} />
              In the last week
            </label>
            <label>
              <input type="radio" value="option2" name="value" />
              In the last month
            </label>
            <label>
              <input type="radio" value="option2" name="value" />
              In the last year
            </label>
          </div>
          <div className="single-page-form-question-container">
            <p>5. Did the dentist tell you that you need dental work?</p>
            <label>
              <input type="radio" value="option1" name="value" checked={true} />
              Yes
            </label>
            <label>
              <input type="radio" value="option2" name="value" />
              No
            </label>
          </div>
          <div className="single-page-form-question-container">
            <label htmlFor="dentist-told">
              6. What were you told? Please explain
            </label>
            <textarea
              className="wide-input-form"
              id="dentist-told"
              type="text"
              name="dentist-told"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default FormUserDetails;
