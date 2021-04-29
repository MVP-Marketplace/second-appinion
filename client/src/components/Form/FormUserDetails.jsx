import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Radio } from "@material-ui/core";
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

const FormUserDetails = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  return (
    <>
      <Grid className="all-page-form-container-container">
        <form className="all-page-forms">
          <div className="single-page-form-question-container">
            <div htmlFor="lastDentalVisit" className="required">
              When was your last dental visit?
            </div>
            <div>
              <DefaultRadio
                type="radio"
                value="In the last week"
                name="lastDentalVisit"
                onChange={handleChange}
                checked={formData.lastDentalVisit === "In the last week"}
              />
              In the last week
            </div>
            <div>
              <DefaultRadio
                type="radio"
                value="In the last month"
                name="lastDentalVisit"
                onChange={handleChange}
                checked={formData.lastDentalVisit === "In the last month"}
              />
              In the last month
            </div>
            <div>
              <DefaultRadio
                type="radio"
                value="In the last year"
                name="lastDentalVisit"
                onChange={handleChange}
                checked={formData.lastDentalVisit === "In the last year"}
              />
              In the last year
            </div>
          </div>
          <div className="single-page-form-question-container">
            <label htmlFor="dentalWorkNeeded" className="required">
              Did the dentist tell you that you need dental work?
            </label>
            <div>
              <DefaultRadio
                type="radio"
                value="Yes"
                name="dentalWorkNeeded"
                onChange={handleChange}
                checked={formData.dentalWorkNeeded === "Yes"}
              />
              Yes
            </div>
            <div>
              <DefaultRadio
                type="radio"
                value="No"
                name="dentalWorkNeeded"
                onChange={handleChange}
                checked={formData.dentalWorkNeeded === "No"}
              />
              No
            </div>
          </div>
          <div className="single-page-form-question-container">
            <label
              htmlFor="dentist-told"
              className="required"
              style={{ marginBottom: 5 }}
            >
              What were you told by the dentist? Please explain
            </label>
            <CssTextField
              id="dentistTold"
              type="text"
              multiline
              variant="outlined"
              name="dentistTold"
              value={formData.dentistTold || ""}
              onChange={handleChange}
            />
          </div>
        </form>
      </Grid>
    </>
  );
};

export default FormUserDetails;
