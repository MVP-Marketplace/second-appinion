import React from "react";

const PreviousWorkForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  return (
    <>
      <div className="all-page-form-container-container">
        <form className="all-page-forms">
          <div className="single-page-form-question-container">
            <p>If chewing causes pain, is the pain upon release of the bite?</p>
            <label>
              <input
                type="radio"
                value="Yes"
                name="painBiteRelease"
                onChange={handleChange}
                checked={formData.painBiteRelease === "Yes"}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="No"
                name="painBiteRelease"
                onChange={handleChange}
                checked={formData.painBiteRelease === "No"}
              />
              No
            </label>
          </div>
          <div className="single-page-form-question-container">
            <p>Have you ever had a cavity?</p>
            <label>
              <input
                type="radio"
                value="1 to 3 cavities"
                name="cavitiesBefore"
                onChange={handleChange}
                checked={formData.cavitiesBefore === "1 to 3 cavities"}
              />
              1 to 3 cavities
            </label>
            <label>
              <input
                type="radio"
                value="4 or more cavities"
                name="cavitiesBefore"
                onChange={handleChange}
                checked={formData.cavitiesBefore === "4 or more cavities"}
              />
              4 or more cavities
            </label>
            <label>
              <input
                type="radio"
                value="No"
                name="cavitiesBefore"
                onChange={handleChange}
                checked={formData.cavitiesBefore === "No"}
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
                checked={formData.rootCanalBefore === "Yes"}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="No"
                name="rootCanalBefore"
                onChange={handleChange}
                checked={formData.rootCanalBefore === "No"}
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
