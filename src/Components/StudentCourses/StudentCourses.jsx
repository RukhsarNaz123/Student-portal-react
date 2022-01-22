import React, { useState } from "react";

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
        {courses.length >= 0
          ? courses.map(({ _id, title, code, creditHours }) => (
              <tr key={_id}>
                <td>{title}</td>
                <td>{code}</td>
                <td>{creditHours}</td>
              </tr>
            ))
          : "not enrolled"}
      </table>
    </div>
  );
};

export default StudentCourses;
