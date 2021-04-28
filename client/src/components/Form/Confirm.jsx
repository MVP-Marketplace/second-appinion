import React from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import { useHistory } from "react-router-dom";
import "../../styles/FormStyles.css";

const Confirm = ({ formData }) => {
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    try {
      await axios.post("/api/forms", formData);
      history.push("/complete");
      form.reset();
      console.log("submitted");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="first-page-form-container-main submit-page">
      <div className="first-page-form-container">
        <form className="first-page-form" onSubmit={handleSubmit}>
          <p className="confirm-page-header">
            Confirm that the information is correct.
          </p>
          <p>Name:</p>
          <p>{formData.name}</p>
          <Divider />
          <p>Email:</p>
          <p>{formData.email}</p>
          <Divider />
          <p>Age:</p>
          <p>{formData.age}</p>
          <Divider />
          <p>Gender:</p>
          <p>{formData.gender}</p>
          <Divider />
          <p>When was your last dental visit?</p>
          <p>{formData.lastDentalVisit}</p>
          <Divider />
          <p>Did the dentist tell you that you need dental work?</p>
          <p>{formData.dentalWorkNeeded}</p>
          <Divider />
          <p>What were you told by the dentist?</p>
          <TextField
            disabled
            style={{ width: "100%" }}
            id="dentistTold"
            multiline
            variant="outlined"
            value={formData.dentistTold || ""}
          />
          <Divider style={{ marginTop: 20 }} />
          <p>Are you currently experiencing any oral pain?</p>
          <p>{formData.dentalPain}</p>
          <Divider />
          <p>Where is the pain?</p>
          <p>{formData.painLocation}</p>
          <Divider />
          <p>How bad is your pain?</p>
          <p>{formData.painStrength}</p>
          <Divider />
          <p>How long have you been in pain?</p>
          <p>{formData.painDuration}</p>
          <Divider />
          <p>What causes the pain?</p>
          <p>{formData.painCause}</p>
          <Divider />
          <p>
            If hot and cold causes pain does the pain linger for more than 30
            seconds?
          </p>
          <p>{formData.painLingering}</p>
          <Divider />
          <p>If chewing causes pain, is the pain upon release of the bite?</p>
          <p>{formData.painBiteRelease}</p>
          <Divider />
          <p>Have you ever had a cavity?</p>
          <p>{formData.cavitiesBefore}</p>
          <Divider />
          <p>Have you ever had a root canal?</p>
          <p>{formData.rootCanalBefore}</p>
          <Divider />
          <p>Have you had a tooth pulled or removed?</p>
          <p>{formData.toothPulledRemoved}</p>
          <Divider />
          <p>
            Please add any other information you would like the dentist to know.
          </p>

          <p>{formData.additionalInformationForDentist}</p>
          <div>
            <p>X-ray Upload</p>
            <p>
              <img src={formData.xrayUpload} />
            </p>
          </div>

          <TextField
            disabled
            style={{ width: "100%" }}
            id="additionalInformationForDentist"
            multiline
            variant="outlined"
            value={formData.additionalInformationForDentist || ""}
          />

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
