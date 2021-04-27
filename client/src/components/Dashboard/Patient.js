import React from "react";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import "../../styles/Form.css";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Patient = ({ theData }) => {
  let data = theData;
  console.log(data);

  if (!data) return null;

  return (
    <>
      <Pdf targetRef={ref} filename="patient.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div className="first-page-form-container-main submit-page" ref={ref}>
        <div className="first-page-form-container">
          <form className="first-page-form">
            <p>Name:</p>
            <p>{data.name}</p>
            <Divider />
            <p>Email:</p>
            <p>{data.email}</p>
            <Divider />
            <p>Age:</p>
            <p>{data.age}</p>
            <Divider />
            <p>Gender:</p>
            <p>{data.gender}</p>
            <Divider />
            <p>When was your last dental visit?</p>
            <p>{data.lastDentalVisit}</p>
            <Divider />
            <p>Did the dentist tell you that you need dental work?</p>
            <p>{data.dentalWorkNeeded}</p>
            <Divider />
            <p>What were you told by the dentist?</p>
            <TextField
              disabled
              style={{ width: "100%" }}
              id="dentistTold"
              multiline
              variant="outlined"
              value={data.dentistTold || ""}
            />
            <Divider style={{ marginTop: 20 }} />
            <p>Are you currently experiencing any oral pain?</p>
            <p>{data.dentalPain}</p>
            <Divider />
            <p>Where is the pain?</p>
            <p>{data.painLocation}</p>
            <Divider />
            <p>How bad is your pain?</p>
            <p>{data.painStrength}</p>
            <Divider />
            <p>How long have you been in pain?</p>
            <p>{data.painDuration}</p>
            <Divider />
            <p>What causes the pain?</p>
            <p>{data.painCause}</p>
            <Divider />
            <p>
              If hot and cold causes pain does the pain linger for more than 30
              seconds?
            </p>
            <p>{data.painLingering}</p>
            <Divider />
            <p>If chewing causes pain, is the pain upon release of the bite?</p>
            <p>{data.painBiteRelease}</p>
            <Divider />
            <p>Have you ever had a cavity?</p>
            <p>{data.cavitiesBefore}</p>
            <Divider />
            <p>Have you ever had a root canal?</p>
            <p>{data.rootCanalBefore}</p>
            <Divider />
            <p>Have you had a tooth pulled or removed?</p>
            <p>{data.toothPulledRemoved}</p>
            <Divider />
            <p>
              Please add any other information you would like the dentist to
              know.
            </p>

            <p>{data.additionalInformationForDentist}</p>
            <div>
              <p>X-ray Upload</p>
              <p>
                <img src={data.xrayUpload} alt="xray" />
              </p>
            </div>

            <TextField
              disabled
              style={{ width: "100%" }}
              id="additionalInformationForDentist"
              multiline
              variant="outlined"
              value={data.additionalInformationForDentist || ""}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Patient;
