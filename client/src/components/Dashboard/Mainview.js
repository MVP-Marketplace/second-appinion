import React from "react";
import TheTable from "./TheTable";

function Dashboard({ formData }) {
  console.log(formData);
  return (
    <div>
      <TheTable theData={formData} />
    </div>
  );
}

export default Dashboard;
