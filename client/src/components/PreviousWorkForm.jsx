import React, { useState } from "react";

const PreviousWorkForm = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <div className="second-page-form-container">
        <form className="second-page-form">
          <div className="single-page-form-question-container">
            <p>If chewing causes pain, is the pain upon release of the bite?</p>
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
            <p>Have you ever had a cavity?</p>
            <label>
              <input type="radio" value="option1" name="value" checked={true} />
              1-3 cavities
            </label>
            <label>
              <input type="radio" value="option2" name="value" />
              4+ cavities
            </label>
            <label>
              <input type="radio" value="option2" name="value" />
              No
            </label>
          </div>
          <div className="single-page-form-question-container">
            <p>Have you ever had a root canal?</p>
            <label>
              <input type="radio" value="option1" name="value" checked={true} />
              Yes
            </label>
            <label>
              <input type="radio" value="option2" name="value" />
              No
            </label>
          </div>
        </form>
      </div>
    </>
  );
};

export default PreviousWorkForm;
