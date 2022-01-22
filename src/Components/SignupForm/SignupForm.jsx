import React, { useState } from "react";
import { connect } from "react-redux";
import { signup } from "./../../Redux/auth/authActions";
const SignupForm = ({ signup }) => {
  var [firstName, setfirstName] = useState("");
  var [lastName, setLastName] = useState("");
  var [username, setUserName] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var [confirmPassword, setConfirmPassword] = useState("");
  var [role, setRole] = useState("student");

  const hanldeSubmit = (e) => {
    e.preventDefault();
    signup({
      firstName,
      lastName,
      username,
      email,
      password,
      confirmPassword,
      role,
    });
  };
  return (
    <div className="signup-form">
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
          placeholder="Last Name"
        />
        <input
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Username"
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
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
const actions = {
  signup,
};
export default connect(null, actions)(SignupForm);
