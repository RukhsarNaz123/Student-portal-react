import axios from "axios";

import React, { useState } from "react";

export const EnrolledStudents = ({ courses }) => {
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
    0: { semester },
  } = courses;

  getData(semester);

  return (
    <div className="flex">
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

export default EnrolledStudents;
