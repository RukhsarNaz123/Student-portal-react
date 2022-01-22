import axios from "axios";
import React, { useEffect, useState } from "react";

const StudentForm = () => {
  var [rollNo, setRollNo] = useState("");
  var [allStudents, setAllStudents] = useState([]);
  var [studentId, setStudentId] = useState("");
  var [semester, setSemester] = useState(0);
  var [section, setSection] = useState("");
  useEffect(() => {
    async function fetchAllStudents() {
      var {
        data: {
          data: { students },
        },
      } = await axios.get("/student");
      setAllStudents(students);
    }
    fetchAllStudents();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    var updated = await axios.patch("/admin/updateStudent", {
      rollNo,
      studentId,
      semester,
    });
    console.log(updated);
  };
  return (
    <div>
      <h2>Student Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
          placeholder="Student roll number"
        />
        <input
          value={section}
          onChange={(e) => setSection(e.target.value)}
          placeholder="Student section"
        />
        <br />
        <label>semester:</label>
        <input
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
          type="number"
          min={1}
          max={8}
          placeholder="semester"
        />
        <label> Student Name: </label>
        <select
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        >
          <option>Select</option>
          {allStudents?.map(({ _id, userId, fullName, email }) => (
            <option key={_id} value={userId}>
              {fullName + " - " + email}
            </option>
          ))}
        </select>
        <button type="submit">Update Student</button>
      </form>
    </div>
  );
};

export default StudentForm;
