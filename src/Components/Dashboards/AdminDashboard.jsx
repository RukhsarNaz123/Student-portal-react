import React from "react";
import CourseForm from "../CourseForm/CourseForm";
import StudentForm from "../StudentForm/StudentForm";

const AdminDashboard = () => {
  return (
    <div>
      <h1>admin dashboard</h1>
      <CourseForm />
      <hr />
      <StudentForm />
    </div>
  );
};

export default AdminDashboard;
