import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Radio } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import "../../styles/FormStyles.css";

const DefaultRadio = withStyles({
  root: {
    color: "#4972a3",
    "&$checked": {
      color: "#4972a3",
    },
  },
  checked: {},
})((props) => <Radio color="default" size="small" {...props} />);

const CssTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#517fb6",
      },
    },
  },
})(TextField);

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
              Type your response below
            </p>
            <CssTextField
              id="additionalInformationForDentist"
              type="text"
              multiline
              variant="outlined"
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
