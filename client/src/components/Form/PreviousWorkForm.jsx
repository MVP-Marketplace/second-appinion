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
            <label htmlFor="painBiteRelease" className="required">
              If chewing causes pain, is the pain upon release of the bite?
            </label>
            <div>
              <DefaultRadio
                type="radio"
                value="Yes"
                name="painBiteRelease"
                onChange={handleChange}
                checked={formData.painBiteRelease === "Yes"}
              />
              Yes
            </div>
            <div>
              <DefaultRadio
                type="radio"
                value="No"
                name="painBiteRelease"
                onChange={handleChange}
                checked={formData.painBiteRelease === "No"}
              />
              No
            </div>
          </div>
          <div className="single-page-form-question-container">
            <label htmlFor="cavitiesBefore">Have you ever had a cavity?</label>
            <div>
              <DefaultRadio
                type="radio"
                value="1 to 3 cavities"
                name="cavitiesBefore"
                onChange={handleChange}
                checked={formData.cavitiesBefore === "1 to 3 cavities"}
              />
              1 to 3 cavities
            </div>
            <div>
              <DefaultRadio
                type="radio"
                value="4 or more cavities"
                name="cavitiesBefore"
                onChange={handleChange}
                checked={formData.cavitiesBefore === "4 or more cavities"}
              />
              4 or more cavities
            </div>
            <div>
              <DefaultRadio
                type="radio"
                value="No"
                name="cavitiesBefore"
                onChange={handleChange}
                checked={formData.cavitiesBefore === "No"}
              />
              No
            </div>
          </div>
          <div className="single-page-form-question-container">
            <label htmlFor="rootCanalBefore">
              Have you ever had a root canal?
            </label>
            <div>
              <DefaultRadio
                type="radio"
                value="Yes"
                name="rootCanalBefore"
                onChange={handleChange}
                checked={formData.rootCanalBefore === "Yes"}
              />
              Yes
            </div>
            <div>
              <DefaultRadio
                type="radio"
                value="No"
                name="rootCanalBefore"
                onChange={handleChange}
                checked={formData.rootCanalBefore === "No"}
              />
              No
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PreviousWorkForm;
