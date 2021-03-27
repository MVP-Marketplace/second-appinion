import React from "react";

const SubmitPageForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  return (
    <>
      <div className="all-page-form-container">
        <form className="all-page-forms">
          <div className="single-page-form-question-container">
            <p>Have you had a tooth pulled or removed?</p>
            <label>
              <input
                type="radio"
                value="Yes"
                name="toothPulledRemoved"
                onChange={handleChange}
                checked={formData.toothPulledRemoved === "Yes"}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="No"
                name="toothPulledRemoved"
                onChange={handleChange}
                checked={formData.toothPulledRemoved === "No"}
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
              id="additionalInformationForDentist"
              type="text"
              name="additionalInformationForDentist"
              value={formData.additionalInformationForDentist || ""}
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
