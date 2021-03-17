import React, { useState } from "react";

const DentalPainFormPart2 = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <div className="second-page-form-container">
        <form className="second-page-form">
          <div className="single-page-form-question-container">
            <p>How long have you been in pain?</p>
            <label>
              <input type="radio" value="option1" name="value" checked={true} />
              Days
            </label>
            <label>
              <input type="radio" value="option2" name="value" />
              Weeks
            </label>
            <label>
              <input type="radio" value="option2" name="value" />
              Months
            </label>
          </div>
          <div className="single-page-form-question-container">
            <p>What causes the pain?</p>
            <label>
              <input type="radio" value="option1" name="value" checked={true} />
              Hot
            </label>
            <label>
              <input type="radio" value="option2" name="value" />
              Cold
            </label>
            <label>
              <input type="radio" value="option2" name="value" />
              Chewing
            </label>
            <label>
              <input type="radio" value="option2" name="value" />
              Constant pain with no stimulus
            </label>
          </div>
          <div className="single-page-form-question-container">
            <p>
              If hot and cold causes pain does the pain linger for more than 30
              seconds?
            </p>
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

export default DentalPainFormPart2;
