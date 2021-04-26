import React from "react";
import ConfirmationImg from "../Images/second_app_confirmation.png";
import { useHistory } from "react-router-dom";

const ConfirmationPrompt = () => {
  const history = useHistory();

  const handleRedirect = async (e) => {
    e.preventDefault();
    try {
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="confirmation-page-container">
        <div className="confirmation-image-container">
          <img
            className="confirmation-page-image"
            src={ConfirmationImg}
            alt="Person using a computer"
          />
          <div className="confirmation-text-container">
            <p className="confirmation-text">
              Congrats you're ready for a second opinion!
            </p>
            <p className="confirmation-text">
              The dentist has 24 hours to review the x-rays.
            </p>
            <p className="confirmation-text">
              You'll receive an email with the results of the consultation and
              the dentist who viewed your x-rays.
            </p>
            <p className="confirmation-text">
              Now you can make an educated decision about your dental health.
            </p>
          </div>
          <div className="wide-button-form-container">
            <button id="bookbutton" onClick={handleRedirect}>
              Done
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationPrompt;
