import axios from "axios";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getUserData } from "../../Redux/user/userActions";

const Dashboard = ({ user, getUserData }) => {
  // var [userId, setUserId] = useState("");
  useEffect(() => {
    function fetchUser() {
      getUserData(user?.userId, user?.role);
    }
    fetchUser();
  }, [user]);
  return <div></div>;
};
const mapState = (state) => ({
  user: state?.auth,
});
const actions = {
  getUserData,
};
export default connect(mapState, actions)(Dashboard);
