import React, { useState } from "react";
import axios from "axios";

const TakePicture = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageSelect = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uploadXray = new FormData();
    uploadXray.append("uploadXray", image, image.name);
    try {
      await axios({
        method: "POST",
        url: "/api/forms/upload",
        data: uploadXray,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleImageSelect} />
        <button type="submit">Save Image</button>
      </form>
    </>
  );
};

export default TakePicture;
