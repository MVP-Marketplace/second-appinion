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
              <input type="radio" value="Yes" name="painBiteRelease" />
              Yes
            </label>
            <label>
              <input type="radio" value="No" name="painBiteRelease" />
              No
            </label>
          </div>
          <div className="single-page-form-question-container">
            <p>Have you ever had a cavity?</p>
            <label>
              <input type="radio" value="1-3 cavities" name="cavitiesBefore" />
              1-3 cavities
            </label>
            <label>
              <input type="radio" value="4+ cavities" name="cavitiesBefore" />
              4+ cavities
            </label>
            <label>
              <input type="radio" value="No" name="cavitiesBefore" />
              No
            </label>
          </div>
          <div className="single-page-form-question-container">
            <p>Have you ever had a root canal?</p>
            <label>
              <input type="radio" value="Yes" name="rootCanalBefore" />
              Yes
            </label>
            <label>
              <input type="radio" value="No" name="rootCanalBefore" />
              No
            </label>
          </div>
        </form>
      </div>
    </>
  );
};

export default PreviousWorkForm;
