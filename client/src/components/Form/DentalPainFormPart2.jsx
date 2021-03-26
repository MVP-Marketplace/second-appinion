import React, { useState } from "react";

const DentalPainFormPart2 = (props) => {
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
            <p>How long have you been in pain?</p>
            <label>
              <input
                type="radio"
                value="Days"
                name="painDuration"
                onChange={handleChange}
              />
              Days
            </label>
            <label>
              <input
                type="radio"
                value="Weeks"
                name="painDuration"
                onChange={handleChange}
              />
              Weeks
            </label>
            <label>
              <input
                type="radio"
                value="Months"
                name="painDuration"
                onChange={handleChange}
              />
              Months
            </label>
          </div>
          <div className="single-page-form-question-container">
            <p>What causes the pain?</p>
            <label>
              <input
                type="radio"
                value="Hot"
                name="painCause"
                onChange={handleChange}
              />
              Hot
            </label>
            <label>
              <input
                type="radio"
                value="Cold"
                name="painCause"
                onChange={handleChange}
              />
              Cold
            </label>
            <label>
              <input
                type="radio"
                value="Chewing"
                name="painCause"
                onChange={handleChange}
              />
              Chewing
            </label>
            <label>
              <input
                type="radio"
                value="Constant pain with no stimulus"
                name="painCause"
                onChange={handleChange}
              />
              Constant pain with no stimulus
            </label>
          </div>
          <div className="single-page-form-question-container">
            <p>
              If hot and cold causes pain does the pain linger for more than 30
              seconds?
            </p>
            <label>
              <input
                type="radio"
                value="Yes"
                name="painLingering"
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="No"
                name="painLingering"
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

export default DentalPainFormPart2;
