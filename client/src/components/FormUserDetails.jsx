import React, { useState } from "react";

const FormUserDetails = (props) => {
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
      <div className="all-page-form-container-container">
        <form className="all-page-forms" onSubmit={onSubmit}>
          <div className="single-page-form-question-container">
            <p>When was your last dental visit?</p>
            <label>
              <input
                type="radio"
                value="in the last week"
                name="lastDentalVisit"
                onChange={handleChange}
              />
              In the last week
            </label>
            <label>
              <input
                type="radio"
                value="in the last month"
                name="lastDentalVisit"
                onChange={handleChange}
              />
              In the last month
            </label>
            <label>
              <input
                type="radio"
                value="in the last year"
                name="lastDentalVisit"
                onChange={handleChange}
              />
              In the last year
            </label>
          </div>
          <div className="single-page-form-question-container">
            <p>Did the dentist tell you that you need dental work?</p>
            <label>
              <input
                type="radio"
                value="yes"
                name="dentalWorkNeeded"
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="no"
                name="dentalWorkNeeded"
                onChange={handleChange}
              />
              No
            </label>
          </div>
          <div className="single-page-form-question-container">
            <label htmlFor="dentist-told">
              What were you told? Please explain
            </label>
            <textarea
              className="wide-input-form"
              id="dentistTold"
              type="text"
              name="dentistTold"
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default FormUserDetails;
