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
              <input
                type="radio"
                value="yes"
                name="dentalPain"
                checked={true}
              />
              Yes
            </label>
            <label>
              <input type="radio" value="no" name="dentalPain" />
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
                    value="Upper right"
                    name="painLocation"
                    checked={true}
                  />
                  Upper right
                </label>
                <label>
                  <input type="radio" value="Upper left" name=" painLocation" />
                  Upper left
                </label>
                <label>
                  <input type="radio" value="Tooth" name="painLocation" />
                  Tooth
                </label>
              </div>
              <div className="dental-pain-form-column-2">
                <label>
                  <input type="radio" value="painLocation" name="dentalPain" />
                  Lower right
                </label>
                <label>
                  <input type="radio" value="Lower left" name="painLocation" />
                  Lower left
                </label>
                <label>
                  <input type="radio" value="Gum" name="painLocation" />
                  Gum
                </label>
              </div>
            </div>
          </div>
          <div className="single-page-form-question-container">
            <label htmlFor="painStrength">How bad is your pain?</label>
            <p className="form-question-header-caption">
              1 is just annoying, 10 is take me now!
            </p>
            <select
              className="small-input-form dropdown"
              id="painStrength"
              type="text"
              name="painStrength"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </form>
      </div>
    </>
  );
};

export default DentalPainForm;
