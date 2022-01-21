import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { addCourse } from "../../Redux/user/userActions";
const CourseForm = ({ addCourse }) => {
  var [title, setTitle] = useState("");
  var [code, setCode] = useState("");
  var [semester, setSemester] = useState(0);
  var [selectedId, setSelectedId] = useState("");
  var [creditHours, setCreditHours] = useState("");
  var [teacherIds, setTeacherIds] = useState([]);
  useEffect(() => {
    async function fetchAllTeachers() {
      var {
        data: {
          data: { teachers },
        },
      } = await axios.get("/teacher");
      setTeacherIds(teachers);
    }
    fetchAllTeachers();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const courseDetails = {
      title,
      code,
      semester,
      teacherId: selectedId,
      creditHours,
    };
    addCourse(courseDetails);
  };
  return (
    <div>
      <h3>add course form</h3>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Course title"
        />
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          type="text"
          placeholder="Course code"
        />
        <label>semester:</label>
        <input
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
          type="number"
          min={1}
          max={8}
          placeholder="semester"
        />
        <label>credit Hours:</label>

        <select
          value={creditHours}
          onChange={(e) => setCreditHours(e.target.value)}
        >
          <option value={"2"}>2</option>
          <option value={"2+1"}>2+1</option>
          <option value={"3"}>3</option>
          <option value={"3+1"}>3+1</option>
        </select>
        <label>Course Teachers:</label>
        <select
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
        >
          <option>Select</option>
          {teacherIds?.map(({ fullName, _id, userId, email }) => (
            <option key={_id} value={userId}>
              {fullName} - {email}
            </option>
          ))}
        </select>
        <button type="submit">Add Course</button>
      </form>
    </div>
  );
};
const actions = {
  addCourse,
};
export default connect(null, actions)(CourseForm);
