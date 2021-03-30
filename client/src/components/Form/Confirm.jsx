import React from "react";

const Confirm = ({ formData }) => {
  return (
    <div className="first-page-form-container-main">
      <div className="first-page-form-container">
        <p className="first-page-header">
          Confirm that the information is correct.
        </p>
        <form className="first-page-form">
          <p>Name:</p>
          <div>
            <p>{formData.name}</p>
          </div>
          <p>Email:</p>
          <div>
            <p>{formData.email}</p>
          </div>
          <p>Age:</p>
          <div>
            <p>{formData.age}</p>
          </div>
          <p>Gender:</p>
          <p>{formData.gender}</p>
          <p>When was your last dental visit?</p>
          <p>{formData.lastDentalVisit}</p>
          <p>Did the dentist tell you that you need dental work?</p>
          <p>{formData.dentalWorkNeeded}</p>
          <p>What were you told by the dentist?</p>
          <p>{formData.dentistTold}</p>
          <p>Are you currently experiencing any oral pain?</p>

          <p>{formData.dentalPain}</p>
          <p>Where is the pain?</p>
          <p>{formData.painLocation}</p>
          <p>How bad is your pain?</p>
          <p>{formData.painStrength}</p>
          <p>How long have you been in pain?</p>
          <p>{formData.painDuration}</p>
          <p>What causes the pain?</p>
          <p>{formData.painCause}</p>
          <p>
            If hot and cold causes pain does the pain linger for more than 30
            seconds?
          </p>
          <p>{formData.painLingering}</p>
          <p>If chewing causes pain, is the pain upon release of the bite?</p>
          <p>{formData.painBiteRelease}</p>
          <p>Have you ever had a cavity?</p>
          <p>{formData.cavitiesBefore}</p>
          <p>Have you ever had a root canal?</p>
          <p>{formData.rootCanalBefore}</p>
          <p>Have you had a tooth pulled or removed?</p>
          <p>{formData.toothPulledRemoved}</p>
          <p>
            Please add any other information you would like the dentist to know.
          </p>
          <p>{formData.additionalInformationForDentist}</p>
          <div className="wide-button-form-container">
            <button className="wide-button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Confirm;
