import React, { useState } from "react";

const FormPersonalDetails = (props) => {
  const [formData, setFormData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <>
      <div className="first-page-form-container-main">
        <div className="first-page-form-container">
          <p className="first-page-header">
            Let's get to know each other a bit better. Please answer the
            following questions.
          </p>
          <form className="first-page-form" onSubmit={onSubmit}>
            <div>
              <label htmlFor="email">1. Email:</label>
              <div>
                <input
                  className="small-input-form"
                  id="email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="age">2. How old are you?</label>
              <input
                className="small-input-form"
                id="age"
                type="text"
                name="age"
                onChange={handleChange}
              />
            </div>
            <label htmlFor="gender">3. Gender:</label>
            <div>
              <input
                className="small-input-form"
                id="gender"
                type="text"
                name="gender"
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormPersonalDetails;