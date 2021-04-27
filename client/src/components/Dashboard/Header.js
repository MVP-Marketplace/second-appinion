import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import notification from "../../Images/notification.png";
import axios from "axios";
import swal from "sweetalert";
import "boxicons";

function Header() {
  const { forms, setForms } = useContext(AppContext);
  const [formData, setFormData] = useState(null);

  const textSearch = async () => {
    try {
      const formTextsearch = await axios.post("/api/forms/search/", formData);
      console.log(formTextsearch.data);
      setForms(formTextsearch.data);
    } catch (error) {
      swal(`Oops!`, "Something went wrong.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    textSearch();
  };
  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-bar-container">
        <input type="text" className="search" placeholder="Search" />
      </form>
      <div className="header-icons">
        <box-icon
          name="bell"
          type="solid"
          alt="notification"
          // animation="tada"
          color="grey"
        ></box-icon>

        <box-icon
          className="icons"
          name="user"
          size="sm"
          alt="User Icon"
          color="gray"
        ></box-icon>
      </div>
    </div>
  );
}

export default Header;
