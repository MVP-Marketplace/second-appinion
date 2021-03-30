import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Radio, Checkbox } from "@material-ui/core";

const DefaultRadio = withStyles({
  root: {
    color: "#4972a3",
    "&$checked": {
      color: "#4972a3",
    },
  },
  checked: {},
})((props) => <Radio color="default" size="small" {...props} />);

const DefaultCheckbox = withStyles({
  root: {
    color: "#4972a3",
    padding: 0,
    "&$checked": {
      color: "#4972a3",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" size="small" {...props} />);

const DentalPainForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  return (
    <>
      <div className="all-page-form-container-container">
        <form className="all-page-forms">
          <div className="single-page-form-question-container">
            <label htmlFor="pain">
              Are you currently experiencing any oral pain?
            </label>
            <div>
              <DefaultRadio
                id="dentailPain"
                type="radio"
                value="Yes"
                name="dentalPain"
                onChange={handleChange}
                checked={formData.dentalPain === "Yes"}
              />
              Yes
            </div>
            <div>
              <DefaultRadio
                type="radio"
                value="No"
                name="dentalPain"
                onChange={handleChange}
                checked={formData.dentalPain === "No"}
              />
              No
            </div>
          </div>
          <div className="single-page-form-question-container">
            <label htmlFor="painLocation" className="form-question-header">
              Where is the pain?
            </label>
            <p className="form-question-header-caption">
              (Choose all that apply)
            </p>
            <div className="dental-pain-form-question">
              <div className="dental-pain-form-column">
                <div>
                  <DefaultCheckbox
                    onChange={handleChange}
                    type="checkbox"
                    value="Upper right"
                    name="painLocation"
                    checked={formData.painLocation === "Upper right"}
                  />
                  Upper right
                </div>
                <div>
                  <DefaultCheckbox
                    type="checkbox"
                    value="Upper left"
                    name="painLocation"
                    onChange={handleChange}
                    checked={formData.painLocation === "Upper left"}
                  />
                  Upper left
                </div>
                <div>
                  <DefaultCheckbox
                    type="checkbox"
                    value="Tooth"
                    name="painLocation"
                    onChange={handleChange}
                    checked={formData.painLocation === "Tooth"}
                  />
                  Tooth
                </div>
              </div>
              <div className="dental-pain-form-column-2">
                <div>
                  <DefaultCheckbox
                    type="checkbox"
                    value="Lower right"
                    name="painLocation"
                    onChange={handleChange}
                    checked={formData.painLocation === "Lower right"}
                  />
                  Lower right
                </div>
                <div>
                  <DefaultCheckbox
                    type="checkbox"
                    value="Lower left"
                    name="painLocation"
                    onChange={handleChange}
                    checked={formData.painLocation === "Lower left"}
                  />
                  Lower left
                </div>
                <div>
                  <DefaultCheckbox
                    type="checkbox"
                    value="Gum"
                    name="painLocation"
                    onChange={handleChange}
                    checked={formData.painLocation === "Gum"}
                  />
                  Gum
                </div>
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
              value={formData.painStrength}
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="0">0</option>
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
