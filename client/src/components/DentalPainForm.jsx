import React, { useState } from "react";

const DentalPainForm = (props) => {
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
            <p>Are you currently experiencing any oral pain?</p>
            <label>
              <input
                type="radio"
                value="yes"
                name="dentalPain"
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="no"
                name="dentalPain"
                onChange={handleChange}
              />
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
                    onChange={handleChange}
                    type="radio"
                    value="Upper right"
                    name="painLocation"
                  />
                  Upper right
                </label>
                <label>
                  <input
                    type="radio"
                    value="Upper left"
                    name="painLocation"
                    onChange={handleChange}
                  />
                  Upper left
                </label>
                <label>
                  <input
                    type="radio"
                    value="Tooth"
                    name="painLocation"
                    onChange={handleChange}
                  />
                  Tooth
                </label>
              </div>
              <div className="dental-pain-form-column-2">
                <label>
                  <input
                    type="radio"
                    value="painLocation"
                    name="dentalPain"
                    onChange={handleChange}
                  />
                  Lower right
                </label>
                <label>
                  <input
                    type="radio"
                    value="Lower left"
                    name="painLocation"
                    onChange={handleChange}
                  />
                  Lower left
                </label>
                <label>
                  <input
                    type="radio"
                    value="Gum"
                    name="painLocation"
                    onChange={handleChange}
                  />
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
              <option value=""></option>
              <option value="0" onChange={handleChange}>
                0
              </option>
              <option value="1" onChange={handleChange}>
                1
              </option>
              <option value="2" onChange={handleChange}>
                2
              </option>
              <option value="3" onChange={handleChange}>
                3
              </option>
              <option value="4" onChange={handleChange}>
                4
              </option>
              <option value="5" onChange={handleChange}>
                5
              </option>
              <option value="6" onChange={handleChange}>
                6
              </option>
              <option value="7" onChange={handleChange}>
                7
              </option>
              <option value="8" onChange={handleChange}>
                8
              </option>
              <option value="9" onChange={handleChange}>
                9
              </option>
              <option value="10" onChange={handleChange}>
                10
              </option>
            </select>
          </div>
        </form>
      </div>
    </>
  );
};

export default DentalPainForm;
