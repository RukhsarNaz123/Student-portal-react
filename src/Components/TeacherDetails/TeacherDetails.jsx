import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";

const EnrolledStudents = ({ courses }) => {
  const [students, setStudents] = useState([]);
  const getData = async (semester) => {
    const {
      data: {
        data: { students },
      },
    } = await axios.post(`/student/EnrolledStudents`, {
      semester: semester,
    });
    setStudents(students);
  };
  var {
    0: { semester, ...restData },
  } = courses;

  getData(semester);

  return (
    <div>
      <table>
        <tr>
          <th>Student Name</th>
          <th>Roll Number</th>
        </tr>
        {students.map(({ fullName, rollNo }) => (
          <tr>
            <td>{fullName}</td>
            <td>{rollNo}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
const TeacherDetails = ({ user }) => {
  console.log(user);
  return (
    <div>
      Enrolled Students
      <EnrolledStudents courses={user.teachingCourses} />
    </div>
  );
};
const mapState = (state) => ({
  user: state?.auth,
});
export default connect(mapState)(TeacherDetails);
