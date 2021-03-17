import React, { useState } from "react";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import FormPersonalDetails from "../components/FormPersonalDetails";
import FormUserDetails from "../components/FormUserDetails";
import DentalPainForm from "../components/DentalPainForm";
import DentalPainFormPart2 from "../components/DentalPainFormPart2";
import PreviousWorkForm from "../components/PreviousWorkForm";
import SubmitPageForm from "../components/SubmitPageForm";
import { StylesProvider } from "@material-ui/core/styles";

export default function UserForm() {
  const [formData, setFormData] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const props = { formData, setFormData };

  const steps = [
    {
      path: <FormPersonalDetails {...props} />,
    },
    {
      path: <FormUserDetails {...props} />,
    },
    {
      path: <DentalPainForm {...props} />,
    },
    {
      path: <DentalPainFormPart2 {...props} />,
    },
    {
      path: <PreviousWorkForm {...props} />,
    },
    {
      path: <SubmitPageForm {...props} />,
    },
  ];
  const maxSteps = steps.length;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <>
      <div className="form-questions-main-container">
        <StylesProvider injectFirst>
          <div className="form-questions-container">
            {steps[activeStep].path}
          </div>
          <MobileStepper
            steps={maxSteps}
            position="bottom"
            variant="dots"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
                type="submit"
              >
                <KeyboardArrowRight />
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                <KeyboardArrowLeft />
              </Button>
            }
          />
        </StylesProvider>
      </div>
    </>
  );
}
