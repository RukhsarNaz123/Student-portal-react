import React, { useState } from "react";

const SignupForm = ({ signup }) => {
  var [firstName, setfirstName] = useState("");
  var [lastName, setLastName] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var [passwordConfirm, setPasswordConfirm] = useState("");
  var [role, setRole] = useState("student");

  const hanldeSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password, passwordConfirm, role);
  };
  return (
    <div>
      <form onSubmit={hanldeSubmit}>
        <input
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
          type="text"
          placeholder="First Name"
        />
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="First Name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="Password"
        />
        <input
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          type="text"
          placeholder="Re-enter Password"
        />
        <select onChange={(e) => setRole(e.target.value)} value={role}>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
        <button type="submit">sign-up</button>
      </form>
    </div>
  );
};

export default SignupForm;
