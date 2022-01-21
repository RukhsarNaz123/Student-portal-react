import React from "react";
import LoginForm from "../../Components/LoginForm/LoginForm";
import SignupForm from "../../Components/SignupForm/SignupForm";

const Auth = () => {
  return (
    <div>
      <h1>Auth</h1>
      <h3>Signup Form</h3>
      <SignupForm />
      <h3>Login Form</h3>
      <LoginForm />
    </div>
  );
};

export default Auth;
