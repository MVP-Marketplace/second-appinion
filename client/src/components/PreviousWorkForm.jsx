import React, { useState } from "react";

const PreviousWorkForm = (props) => {
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
            <p>If chewing causes pain, is the pain upon release of the bite?</p>
            <label>
              <input
                type="radio"
                value="Yes"
                name="painBiteRelease"
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="No"
                name="painBiteRelease"
                onChange={handleChange}
              />
              No
            </label>
          </div>
          <div className="single-page-form-question-container">
            <p>Have you ever had a cavity?</p>
            <label>
              <input
                type="radio"
                value="1-3 cavities"
                name="cavitiesBefore"
                onChange={handleChange}
              />
              1 to 3 cavities
            </label>
            <label>
              <input
                type="radio"
                value="4+ cavities"
                name="cavitiesBefore"
                onChange={handleChange}
              />
              4 or more cavities
            </label>
            <label>
              <input
                type="radio"
                value="No"
                name="cavitiesBefore"
                onChange={handleChange}
              />
              No
            </label>
          </div>
          <div className="single-page-form-question-container">
            <p>Have you ever had a root canal?</p>
            <label>
              <input
                type="radio"
                value="Yes"
                name="rootCanalBefore"
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="No"
                name="rootCanalBefore"
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </form>
      </div>
    </>
  );
};

export default PreviousWorkForm;
