import React from "react";
import "./StudentProfile.css";
const StudentProfile = ({ profile }) => {
  const { fullName, rollNo, semester, email } = profile;
  return (
    <div className=" sp flex">
      <div className="profile-left flex">
        <div className="img"></div>
        <h1>{fullName}</h1>
        <p>Roll number: {rollNo ? rollNo : "unknown"}</p>
      </div>
      <div className="profile-right">
        <h3>Semester: {semester ? semester : "unknown"}</h3>
        <p>email: {email ? email : "unknown"}</p>
      </div>
    </div>
  );
};

export default StudentProfile;
