import React from "react";

const EmployeeRow = ({profile}) => {
  const dob = new Date(profile.dob.date);
  const day = dob.getDate();
  const month = dob.getMonth() + 1;
  const year = dob.getFullYear();
  const dobDisplay = `${month}-${day}-${year}`;

  return (
    <div className="row">
      <div className="col-md-1"></div>
      <div className="col-md-2">
        <img src={profile.picture.thumbnail} alt="profile" />
      </div>
      <div className="col-md-2">
        {profile.name.first + " " + profile.name.last}
      </div>
      <div className="col-md-2">{profile.phone}</div>
      <div className="col-md-2">{profile.email}</div>
      <div className="col-md-2">{dobDisplay}</div>
      <div className="col-md-1"></div>
    </div>
  );
};

export default EmployeeRow;
