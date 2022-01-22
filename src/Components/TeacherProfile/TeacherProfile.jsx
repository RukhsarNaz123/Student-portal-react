import React from "react";
const TeacherProfile = ({ profile }) => {
  const { fullName, username, role, email } = profile;

  return (
    <div className=" sp flex">
      <div className="profile-left flex">
        <div className="img"></div>
        <h1>{fullName}</h1>
        <p>Roll: {role ? role : "unknown"}</p>
      </div>
      <div className="profile-right">
        <p>username: {username ? username : "unknown"}</p>
        <p>email: {email ? email : "unknown"}</p>
      </div>
    </div>
  );
};

export default TeacherProfile;
