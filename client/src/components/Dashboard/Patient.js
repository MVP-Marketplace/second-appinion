import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import "../../styles/form.css";
import Pdf from "react-to-pdf";
import { useParams } from "react-router-dom";

const ref = React.createRef();

const Patient = () => {
  let { id } = useParams();
  const [form, setForm] = useState({});
  console.log(id);

  useEffect(() => {
    fetch(`/api/forms/${id}`)
      .then((res) => res.json())
      .then((data) => setForm(data));
  }, []);

  console.log(form);

  // const data = async () => {
  //   const response = await axios.get(`/api/forms/${id}`);
  //   console.log(response);
  //   setForm(response.data);
  // };

  // useEffect(() => {
  //   data();
  // });

  if (!form) return null;
  return (
    <>
      <Pdf targetRef={ref} filename="patient.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div className="first-page-form-container-main submit-page" ref={ref}>
        <div className="first-page-form-container">
          <form className="first-page-form">
            <p>Name:</p>
            <p>{form.name}</p>
            <Divider />
            <p>Email:</p>
            <p>{form.email}</p>
            <Divider />
            <p>Age:</p>
            <p>{form.age}</p>
            <Divider />
            <p>Gender:</p>
            <p>{form.gender}</p>
            <Divider />
            <p>When was your last dental visit?</p>
            <p>{form.lastDentalVisit}</p>
            <Divider />
            <p>Did the dentist tell you that you need dental work?</p>
            <p>{form.dentalWorkNeeded}</p>
            <Divider />
            <p>What were you told by the dentist?</p>
            <TextField
              disabled
              style={{ width: "100%" }}
              id="dentistTold"
              multiline
              variant="outlined"
              value={form.dentistTold || ""}
            />
            <Divider style={{ marginTop: 20 }} />
            <p>Are you currently experiencing any oral pain?</p>
            <p>{form.dentalPain}</p>
            <Divider />
            <p>Where is the pain?</p>
            <p>{form.painLocation}</p>
            <Divider />
            <p>How bad is your pain?</p>
            <p>{form.painStrength}</p>
            <Divider />
            <p>How long have you been in pain?</p>
            <p>{form.painDuration}</p>
            <Divider />
            <p>What causes the pain?</p>
            <p>{form.painCause}</p>
            <Divider />
            <p>
              If hot and cold causes pain does the pain linger for more than 30
              seconds?
            </p>
            <p>{form.painLingering}</p>
            <Divider />
            <p>If chewing causes pain, is the pain upon release of the bite?</p>
            <p>{form.painBiteRelease}</p>
            <Divider />
            <p>Have you ever had a cavity?</p>
            <p>{form.cavitiesBefore}</p>
            <Divider />
            <p>Have you ever had a root canal?</p>
            <p>{form.rootCanalBefore}</p>
            <Divider />
            <p>Have you had a tooth pulled or removed?</p>
            <p>{form.toothPulledRemoved}</p>
            <Divider />
            <p>
              Please add any other information you would like the dentist to
              know.
            </p>

            <p>{form.additionalInformationForDentist}</p>
            <div>
              <p>X-ray Upload</p>
              <p>
                <img src={form.xrayUpload} alt="xray" />
              </p>
            </div>

            <TextField
              disabled
              style={{ width: "100%" }}
              id="additionalInformationForDentist"
              multiline
              variant="outlined"
              value={form.additionalInformationForDentist || ""}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Patient;
