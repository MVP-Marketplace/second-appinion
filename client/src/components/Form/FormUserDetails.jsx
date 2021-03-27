import React, { useState } from "react";

const FormUserDetails = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  return (
    <>
      <div className="all-page-form-container-container">
        <form className="all-page-forms">
          <div className="single-page-form-question-container">
            <p>When was your last dental visit?</p>
            <label>
              <input
                type="radio"
                value="In the last week"
                name="lastDentalVisit"
                onChange={handleChange}
                checked={formData.lastDentalVisit === "In the last week"}
              />
              In the last week
            </label>
            <label>
              <input
                type="radio"
                value="In the last month"
                name="lastDentalVisit"
                onChange={handleChange}
                checked={formData.lastDentalVisit === "In the last month"}
              />
              In the last month
            </label>
            <label>
              <input
                type="radio"
                value="In the last year"
                name="lastDentalVisit"
                onChange={handleChange}
                checked={formData.lastDentalVisit === "In the last year"}
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
                checked={formData.dentalWorkNeeded === "Yes"}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="no"
                name="dentalWorkNeeded"
                onChange={handleChange}
                checked={formData.dentalWorkNeeded === "No"}
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
              value={formData.dentistTold || ""}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default FormUserDetails;
