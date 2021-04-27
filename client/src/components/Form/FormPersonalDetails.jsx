import React from "react";
import "../../styles/Form.css";

const FormPersonalDetails = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  return (
    <>
      <div className="form-main">
        <div className="form-question-container">
          <p className="first-page-header">
            Let's get to know each other a bit better. Please answer the
            following questions.
          </p>
          <form className="form-input">
            <label htmlFor="name">Name:</label>
            <div>
              <input
                className="small-input-form"
                id="name"
                type="text"
                name="name"
                value={formData.name || ""}
                onChange={handleChange}
              />
            </div>

            <label htmlFor="email" className="required">
              Email:
            </label>
            <div>
              <input
                className="small-input-form"
                id="email"
                type="email"
                name="email"
                value={formData.email || ""}
                onChange={handleChange}
                required
              />
            </div>
            <label htmlFor="age">Age:</label>
            <div>
              <input
                className="small-input-form"
                id="age"
                type="text"
                name="age"
                value={formData.age || ""}
                onChange={handleChange}
              />
            </div>
            <label htmlFor="gender">Gender:</label>
            <div>
              <input
                className="small-input-form"
                id="gender"
                type="text"
                name="gender"
                value={formData.gender || ""}
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
