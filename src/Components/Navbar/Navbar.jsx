import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { authLogout } from "../../Redux/auth/authActions";
import { clearUser } from "../../Redux/user/userActions";

const Navbar = ({ user, authLogout, clearUser }) => {
  return (
    <div className="navbar">
      <div className="logo"></div>
      <div className="nav-items">
        {user.userId ? (
          <Link to="/dashboard">
            <h3>Dashboard</h3>
          </Link>
        ) : (
          <Link to="/auth">
            <h3>Login</h3>
          </Link>
        )}

        {user.userId && (
          <button
            onClick={() => {
              clearUser();
              authLogout();
            }}
          >
            logout
          </button>
        )}
      </div>
    </div>
  );
};

var mapState = (state) => ({
  user: state?.auth,
});

var actions = {
  authLogout,
  clearUser,
};

export default connect(mapState, actions)(Navbar);
