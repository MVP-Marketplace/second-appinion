import React from "react";

const DentalPainFormPart2 = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  return (
    <>
      <div className="all-page-form-container-container">
        <form className="all-page-forms">
          <div className="single-page-form-question-container">
            <p>How long have you been in pain?</p>
            <label>
              <input
                type="radio"
                value="Days"
                name="painDuration"
                onChange={handleChange}
                checked={formData.painDuration === "Days"}
              />
              Days
            </label>
            <label>
              <input
                type="radio"
                value="Weeks"
                name="painDuration"
                onChange={handleChange}
                checked={formData.painDuration === "Weeks"}
              />
              Weeks
            </label>
            <label>
              <input
                type="radio"
                value="Months"
                name="painDuration"
                onChange={handleChange}
                checked={formData.painDuration === "Months"}
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
                checked={formData.painCause === "Hot"}
              />
              Hot
            </label>
            <label>
              <input
                type="radio"
                value="Cold"
                name="painCause"
                onChange={handleChange}
                checked={formData.painCause === "Cold"}
              />
              Cold
            </label>
            <label>
              <input
                type="radio"
                value="Chewing"
                name="painCause"
                onChange={handleChange}
                checked={formData.painCause === "Chewing"}
              />
              Chewing
            </label>
            <label>
              <input
                type="radio"
                value="Constant pain with no stimulus"
                name="painCause"
                onChange={handleChange}
                checked={
                  formData.painCause === "Constant pain with no stimulus"
                }
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
                checked={formData.painLingering === "Yes"}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="No"
                name="painLingering"
                onChange={handleChange}
                checked={formData.painLingering === "No"}
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
