import React, { useState } from "react";
import axios from "axios";
import { Grid, Button, Input } from "@material-ui/core";
import Xray from "../../Images/XRay.svg";
import "../../styles/Onboard.css";

const ThirdOnboard = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };
  const [imageSelected, setImageSelected] = useState();
  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "iybd9a0l");
    axios
      .post("https://api.cloudinary.com/v1_1/dannyypz/image/upload", formData)
      .then((response) => {
        setFormData({ ...formData, xrayUpload: response.data.url });
        console.log(response.data.url);
        console.log(response);
      });
  };
  return (
    <>
      <Grid className="onboard-container">
        <div>
          <img src={Xray} alt="doctor looking at xrays" />
        </div>
        <div className="onboard-text">
          <p>
            Now, let's upload or take a photo of your Xrays and submit them
            through the app.
          </p>
        </div>
        <Input
          type="file"
          name="xrayUpload"
          htmlFor="xrayUpload"
          onChange={
            (handleChange,
            (event) => {
              setImageSelected(event.target.files[0]);
            })
          }
        />
        <Button
          onClick={uploadImage}
          variant="contained"
          size="md"
          className="btn-upload mt-4"
          name="xrayUpload"
          htmlFor="xrayUpload"
          enable="true"
        >
          Upload your X-ray
        </Button>
      </Grid>
    </>
  );
};
export default ThirdOnboard;
