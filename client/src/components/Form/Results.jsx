import React from "react";
import SittingMan from "../../Images/SittingMan.svg";
import "../../styles/FormStyles.css";

const Results = () => {
  return (
    <>
      <div className="onboard-container">
        <img
          src={SittingMan}
          alt="Man Sitting on The Floor Using His Cell Phone"
          className="results-image"
        ></img>
        <div className="onboard-text">
          <p>
            You’ll receive notification with the results of your consultation
            and the dentist who viewed your X-Rays. Now you can make an educated
            decision about your dental health.
          </p>
        </div>
      </div>
    </>
  );
};

export default Results;
