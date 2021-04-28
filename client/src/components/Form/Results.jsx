import React from "react";
import finalresults from "../../Images/finalresults.png";
import "../../styles/FormStyles.css";

const Results = () => {
  return (
    <>
      <div className="resultsContainer">
        <img
          src={finalresults}
          alt="Man Sitting on The Floor Using His Cell Phone"
          className="results-image"
        ></img>
        <h3 className="results-text">
          You’ll receive notification with the
          <br />
          results of your consultation and the
          <br />
          dentist who viewed your X-Rays.
          <br />
          Now you can make an educated
          <br />
          decision about your dental health.
        </h3>
      </div>
    </>
  );
};

export default Results;
