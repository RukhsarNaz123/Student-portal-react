import React, { useState } from "react";

const LoginForm = ({ login }) => {
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");

  const hanldeSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };
  return (
    <div>
      <form onSubmit={hanldeSubmit}>
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
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default LoginForm;
