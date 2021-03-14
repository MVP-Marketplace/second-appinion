import React from "react";
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
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = [
    {
      path: <FormPersonalDetails />,
    },
    {
      path: <FormUserDetails />,
    },
    {
      path: <DentalPainForm />,
    },
    {
      path: <DentalPainFormPart2 />,
    },
    {
      path: <PreviousWorkForm />,
    },
    {
      path: <SubmitPageForm />,
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
