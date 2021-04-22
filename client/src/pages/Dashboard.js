import React, { useEffect, useState } from "react";
import Mainboard from "../components/Dashboard/Mainboard";
import axios from "axios";

function Dashboard(props) {
  const [form, setForm] = useState(null);

  const fetchData = async () => {
    let response = await axios.get("api/forms/");
    console.log(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Mainboard data={form} />
    </div>
  );
}

export default Dashboard;
