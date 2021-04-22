import React, { useState } from "react";
import axios from "axios";
import { Grid, Button, Input } from "@material-ui/core";
import onboard3 from "../../Images/onboard3.png";
import { Image } from "cloudinary-react";

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
        console.log(response);
      });
  };
  return (
    <>
      <Grid className="onboard3">
        <img className="img3" src={onboard3} alt="Doctor Looking At X-rays" />
        <h1 className="onboard3Title">
          Now, let’s upload or take a photo
          <br />
          of your Xrays and submit them
          <br />
          through the app.
        </h1>
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
          size="large"
          id="bookbutton"
          name="xrayUpload"
          htmlFor="xrayUpload"
        >
          Submit
        </Button>

        <h3 className="onboard3SubTitle">
          Don't have an X-ray? No problem, you
          <br />
          <a>can send us a picture of your mouth</a>
        </h3>
      </Grid>
    </>
  );
};

export default ThirdOnboard;
