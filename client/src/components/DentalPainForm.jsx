import React, { useState } from "react";

const DentalPainForm = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div className="second-page-form-container">
        <form className="second-page-form">
          <div className="single-page-form-question-container">
            <p>Are you currently experiencing any oral pain?</p>
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
            <p className="form-question-header">Where is the pain?</p>
            <p className="form-question-header-caption">
              (Choose all that apply)
            </p>
            <div className="dental-pain-form-question">
              <div className="dental-pain-form-column">
                <label>
                  <input
                    type="radio"
                    value="option1"
                    name="value"
                    checked={true}
                  />
                  Upper right
                </label>
                <label>
                  <input type="radio" value="option2" name="value" />
                  Upper left
                </label>
                <label>
                  <input type="radio" value="option2" name="value" />
                  Tooth
                </label>
              </div>
              <div className="dental-pain-form-column-2">
                <label>
                  <input type="radio" value="option2" name="value" />
                  Lower right
                </label>
                <label>
                  <input type="radio" value="option2" name="value" />
                  Lower left
                </label>
                <label>
                  <input type="radio" value="option2" name="value" />
                  Gum
                </label>
              </div>
            </div>
          </div>
          <div className="single-page-form-question-container">
            <label htmlFor="dentist-advice">How bad is your pain?</label>
            <p className="form-question-header-caption">
              1 is just annoying, 10 is take me now!
            </p>
            <select
              className="small-input-form dropdown"
              id="dentist-advice"
              type="text"
              name="dentistAdvice"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </div>
        </form>
      </div>
    </>
  );
};

export default DentalPainForm;
