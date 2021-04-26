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
    <div className="header-container">
      <div className="search-container">
        <form onSubmit={handleSubmit} className="search-bar-container">
          <a>
            <box-icon
              className="search-bar-icon"
              name="search"
              size="sm"
              type="submit"
              color="gray"
            ></box-icon>
          </a>
          <input type="text" className="search" placeholder="Search" />
        </form>
        <div className="header-icons">
          <img src={notification} className="icons" alt="Bell"></img>
          <box-icon
            className="icons"
            name="user"
            size="sm"
            alt="User Icon"
            color="gray"
          ></box-icon>
        </div>
      </div>
    </div>
  );
}

export default Header;
