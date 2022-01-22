import React from "react";

const StudentCourses = ({ courses }) => {
  // console.log(courses);
  return (
    <div className="flex">
      <table>
        <tr>
          <th>Course Title</th>
          <th>Course Code</th>
          <th>Credit Hours</th>
          {/* <th>Course Teachers</th> */}
        </tr>
        {courses.map(({ _id, title, code, creditHours }) => (
          <tr key={_id}>
            <td>{title}</td>
            <td>{code}</td>
            <td>{creditHours}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default StudentCourses;
