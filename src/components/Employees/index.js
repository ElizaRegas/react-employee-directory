import React from "react";
import "./style.css";
import EmployeeRow from "../EmployeeRow";

const Employees = ({ profiles, handleAlphaSort }) => {
  return (
    <>
      <div className="container" id="employees">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-2">Image</div>
          <div className="col-md-2" onClick={handleAlphaSort}>Name</div>
          <div className="col-md-2">Phone</div>
          <div className="col-md-2">Email</div>
          <div className="col-md-2">DOB</div>
          <div className="col-md-1"></div>
        </div>

        {profiles.length > 0 && profiles.map((profile, index) => (
          <EmployeeRow key={index} profile={profile} />
        ))}
      </div>
    </>
  );
};

export default Employees;
