import React from "react";
import { connect } from "react-redux";
import EnrolledStudents from "../EnrolledStudents/EnrolledStudents";
import TeacherProfile from "../TeacherProfile/TeacherProfile";

const TeacherDetails = ({ user }) => {
  console.log(user);
  return (
    <div>
      Enrolled Students
      {user.teachingCourses.length > 0 ? (
        <EnrolledStudents courses={user.teachingCourses} />
      ) : (
        "course is not alloted to you yet"
      )}
      <hr />
      <TeacherProfile profile={user} />
    </div>
  );
};
const mapState = (state) => ({
  user: state?.auth,
});
export default connect(mapState)(TeacherDetails);
