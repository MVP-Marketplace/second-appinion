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
              <input type="radio" value="Days" name="painDuration" />
              Days
            </label>
            <label>
              <input type="radio" value="Weeks" name="painDuration" />
              Weeks
            </label>
            <label>
              <input type="radio" value="Months" name="painDuration" />
              Months
            </label>
          </div>
          <div className="single-page-form-question-container">
            <p>What causes the pain?</p>
            <label>
              <input type="radio" value="Hot" name="painCause" />
              Hot
            </label>
            <label>
              <input type="radio" value="Cold" name="painCause" />
              Cold
            </label>
            <label>
              <input type="radio" value="Chewing" name="painCause" />
              Chewing
            </label>
            <label>
              <input
                type="radio"
                value="Constant pain with no stimulus"
                name="painCause"
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
              <input type="radio" value="Yes" name="painLingering" />
              Yes
            </label>
            <label>
              <input type="radio" value="No" name="painLingering" />
              No
            </label>
          </div>
        </form>
      </div>
    </>
  );
};

export default DentalPainFormPart2;
