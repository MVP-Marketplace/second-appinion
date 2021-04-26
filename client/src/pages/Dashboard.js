import React, { useState, useEffect } from "react";
import Mainview from "../components/Dashboard/Mainview";
import Header from "../components/Dashboard/Header";
import axios from "axios";
import Sidebar from "../components/Dashboard/Sidebar";

const Dashboard = () => {
  const [forms, setForms] = useState(null);

  const fetchData = async () => {
    const response = await axios.get("/api/forms/");
    setForms(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Sidebar />
      <Header />
      <Mainview formData={forms} />
    </div>
  );
};

export default Dashboard;
