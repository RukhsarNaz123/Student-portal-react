import React from "react";
import "./StudentProfile.css";
const StudentProfile = ({ profile }) => {
  const { fullName, rollNo, semester, email } = profile;
  return (
    <div className=" sp flex">
      <div className="profile-left">
        <h1>{fullName}</h1>
        <p>{rollNo}</p>
      </div>
      <div className="profile-right">
        <h3>Semester: {semester}</h3>
        <p>email: {email}</p>
      </div>
    </div>
  );
};

export default StudentProfile;
