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
              <input
                type="radio"
                value="in the last week"
                name="lastDentalVisit"
              />
              In the last week
            </label>
            <label>
              <input
                type="radio"
                value="in the last month"
                name="lastDentalVisit"
              />
              In the last month
            </label>
            <label>
              <input
                type="radio"
                value="in the last year"
                name="lastDentalVisit"
              />
              In the last year
            </label>
          </div>
          <div className="single-page-form-question-container">
            <p>5. Did the dentist tell you that you need dental work?</p>
            <label>
              <input type="radio" value="yes" name="dentalWorkNeeded" />
              Yes
            </label>
            <label>
              <input type="radio" value="no" name="dentalWorkNeeded" />
              No
            </label>
          </div>
          <div className="single-page-form-question-container">
            <label htmlFor="dentist-told">
              6. What were you told? Please explain
            </label>
            <textarea
              className="wide-input-form"
              id="dentistTold"
              type="text"
              name="dentistTold"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default FormUserDetails;
