import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
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
    <div>
      <div className="search-bar-container">
        <form onSubmit={handleSubmit}>
          <input type="text" className="search" placeholder="Search . . ." />
          <box-icon
            className="search-bar-icon"
            name="search"
            size="sm"
            type="submit"
          ></box-icon>
        </form>
      </div>
      <div>
        <box-icon color="grey" name="bell"></box-icon>
      </div>
      <box-icon name="user"></box-icon>
    </div>
  );
}

export default Header;
