import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Radio } from "@material-ui/core";
import "../../styles/form.css";

const DefaultRadio = withStyles({
  root: {
    color: "#4972a3",
    "&$checked": {
      color: "#4972a3",
    },
  },
  checked: {},
})((props) => <Radio color="default" size="small" {...props} />);

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
            <label htmlFor="painDuration" className="required">
              How long have you been in pain?
            </label>
            <div>
              <DefaultRadio
                type="radio"
                value="Days"
                name="painDuration"
                onChange={handleChange}
                checked={formData.painDuration === "Days"}
              />
              Days
            </div>
            <div>
              <DefaultRadio
                type="radio"
                value="Weeks"
                name="painDuration"
                onChange={handleChange}
                checked={formData.painDuration === "Weeks"}
              />
              Weeks
            </div>
            <div>
              <DefaultRadio
                type="radio"
                value="Months"
                name="painDuration"
                onChange={handleChange}
                checked={formData.painDuration === "Months"}
              />
              Months
            </div>
          </div>
          <div className="single-page-form-question-container">
            <label htmlFor="painCause" className="required">
              What causes the pain?
            </label>
            <div>
              <DefaultRadio
                type="radio"
                value="Hot"
                name="painCause"
                onChange={handleChange}
                checked={formData.painCause === "Hot"}
              />
              Hot
            </div>
            <div>
              <DefaultRadio
                type="radio"
                value="Cold"
                name="painCause"
                onChange={handleChange}
                checked={formData.painCause === "Cold"}
              />
              Cold
            </div>
            <div>
              <DefaultRadio
                type="radio"
                value="Chewing"
                name="painCause"
                onChange={handleChange}
                checked={formData.painCause === "Chewing"}
              />
              Chewing
            </div>
            <div>
              <DefaultRadio
                type="radio"
                value="Constant pain with no stimulus"
                name="painCause"
                onChange={handleChange}
                checked={
                  formData.painCause === "Constant pain with no stimulus"
                }
              />
              Constant pain with no stimulus
            </div>
          </div>
          <div className="single-page-form-question-container">
            <label htmlFor="painLingering" className="required">
              If hot and cold causes pain does the pain linger for more than 30
              seconds?
            </label>
            <div>
              <DefaultRadio
                type="radio"
                value="Yes"
                name="painLingering"
                onChange={handleChange}
                checked={formData.painLingering === "Yes"}
              />
              Yes
            </div>
            <div>
              <DefaultRadio
                type="radio"
                value="No"
                name="painLingering"
                onChange={handleChange}
                checked={formData.painLingering === "No"}
              />
              No
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default DentalPainFormPart2;
