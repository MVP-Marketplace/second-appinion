import React from "react";
import ConfirmationImg from "../Images/second_app_confirmation.png";
import { useHistory } from "react-router-dom";
import "../styles/Confirmation.css";

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
              <br />
              <br />
              A dentist wil review your x-rays in 24 hours.
              <br />
              <br />
              Now you can make an educated decision about your dental health.
            </p>
          </div>
          <div className="wide-button-form-container">
            <button className="completeButton" onClick={handleRedirect}>
              Done
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationPrompt;
