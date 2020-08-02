import React from "react";
import "./style.css";

const EmployeeRow = ({ profile }) => {
  const dob = new Date(profile.dob.date);
  const day = dob.getDate();
  const month = dob.getMonth() + 1;
  const year = dob.getFullYear();
  const dobDisplay = `${month}-${day}-${year}`;

  return (
    <div>
      <hr></hr>
      <div className="row" id="profileRow">
        <div className="col-md-2">
          <img src={profile.picture.thumbnail} alt="profile" />
        </div>
        <div className="col-md-2">
          {profile.name.first + " " + profile.name.last}
        </div>
        <div className="col-md-2">{profile.phone}</div>
        <div className="col-md-4">{profile.email}</div>
        <div className="col-md-2">{dobDisplay}</div>
      </div>
    </div>
  );
};

export default EmployeeRow;
