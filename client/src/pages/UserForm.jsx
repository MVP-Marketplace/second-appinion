import React, { useState } from "react";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import FormPersonalDetails from "../components/Form/FormPersonalDetails";
import FormUserDetails from "../components/Form/FormUserDetails";
import DentalPainForm from "../components/Form/DentalPainForm";
import DentalPainFormPart2 from "../components/Form/DentalPainFormPart2";
import PreviousWorkForm from "../components/Form/PreviousWorkForm";
import SubmitPageForm from "../components/Form/SubmitPageForm";
import Confirm from "../components/Form/Confirm";
import Results from "../components/Form/Results";
import StartQuestionaire from "../components/Form/StartQuestionaire";
import { StylesProvider } from "@material-ui/core/styles";
import FirstOnboard from "../components/Onboard/FirstOnboard";
import SecondOnboard from "../components/Onboard/SecondOnboard";
import ThirdOnboard from "../components/Onboard/ThirdOnboard";

export default function UserForm() {
  const [formData, setFormData] = useState([]);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      path:
        ((
          <FormPersonalDetails setFormData={setFormData} formData={formData} />
        ),
        (<ThirdOnboard setFormData={setFormData} formData={formData} />)),

      path: <FirstOnboard />,
    },
    {
      path: <SecondOnboard />,
    },
    {
      path: <ThirdOnboard setFormData={setFormData} formData={formData} />,
    },
    {
      path: <StartQuestionaire />,
    },
    {
      path: (
        <FormPersonalDetails setFormData={setFormData} formData={formData} />
      ),
    },
    {
      path: <FormUserDetails setFormData={setFormData} formData={formData} />,
    },
    {
      path: <DentalPainForm setFormData={setFormData} formData={formData} />,
    },
    {
      path: (
        <DentalPainFormPart2 setFormData={setFormData} formData={formData} />
      ),
    },
    {
      path: <PreviousWorkForm setFormData={setFormData} formData={formData} />,
    },
    {
      path: <SubmitPageForm setFormData={setFormData} formData={formData} />,
    },
    {
      path: <Results />,
    },
    {
      path: <Confirm setFormData={setFormData} formData={formData} />,
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
        </StylesProvider>
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
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
          </Button>
        }
      />
    </>
  );
}
