import React from "react";
import { connect } from "react-redux";
import StudentCourses from "../StudentCourses/StudentCourses";
import StudentProfile from "../StudentProfile/StudentProfile";

const StudentDetails = ({ user }) => {
  console.log(user);
  return (
    <div>
      Enrolled Courses
      {user.courses.length <= 0 ? (
        <h2>No course enrolled yet</h2>
      ) : (
        <StudentCourses courses={user.courses} />
      )}
      <br />
      <hr />
      Student Profile
      <StudentProfile profile={user} />
    </div>
  );
};
const mapState = (state) => ({
  user: state?.auth,
});
export default connect(mapState)(StudentDetails);
