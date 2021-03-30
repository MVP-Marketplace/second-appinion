import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Radio } from "@material-ui/core";

const DefaultRadio = withStyles({
  root: {
    color: "#4972a3",
    "&$checked": {
      color: "#4972a3",
    },
  },
  checked: {},
})((props) => <Radio color="default" size="small" {...props} />);

const SubmitPageForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  return (
    <>
      <div className="all-page-form-container">
        <form className="all-page-forms">
          <div className="single-page-form-question-container">
            <label htmlFor="toothPulledRemoved">
              Have you had a tooth pulled or removed?
            </label>
            <div>
              <DefaultRadio
                type="radio"
                value="Yes"
                name="toothPulledRemoved"
                onChange={handleChange}
                checked={formData.toothPulledRemoved === "Yes"}
              />
              Yes
            </div>
            <div>
              <DefaultRadio
                type="radio"
                value="No"
                name="toothPulledRemoved"
                onChange={handleChange}
                checked={formData.toothPulledRemoved === "No"}
              />
              No
            </div>
          </div>
          <div className="single-page-form-question-container">
            <label htmlFor="additionalInformationForDentist">
              Please add any other information you would like the dentist to
              know.
            </label>
            <p className="form-question-header-caption">
              (Please type your response below)
            </p>
            <textarea
              className="largest-submit-input-form"
              id="additionalInformationForDentist"
              type="text"
              name="additionalInformationForDentist"
              value={formData.additionalInformationForDentist || ""}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default SubmitPageForm;
