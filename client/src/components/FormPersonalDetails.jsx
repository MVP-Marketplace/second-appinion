import React from "react";

const FormPersonalDetails = () => {
  return (
    <>
      <div className="first-page-form-container-main">
        <div className="first-page-form-container">
          <p className="first-page-header">
            Let's get to know each other a bit better. Please answer the
            following questions.
          </p>
          <form className="first-page-form">
            <div>
              <label htmlFor="email">1. Name:</label>
              <br />
              <input
                className="small-input-form"
                id="email"
                type="email"
                name="email"
              />
            </div>
            <div>
              <label htmlFor="age">2. How old are you?</label>
              <br />
              <input
                className="small-input-form"
                id="age"
                type="text"
                name="age"
              />
            </div>
            <div>
              <label htmlFor="gender">3. Gender:</label>
              <br />
              <input
                className="small-input-form"
                id="gender"
                type="text"
                name="gender"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormPersonalDetails;
