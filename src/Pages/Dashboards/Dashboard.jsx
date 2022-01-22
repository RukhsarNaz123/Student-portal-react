import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserData } from "../../Redux/user/userActions";
import AdminDashboard from "../../Components/Dashboards/AdminDashboard";
import StudentDashboard from "../../Components/Dashboards/StudentDashboard";
import TeacherDashboard from "../../Components/Dashboards/TeacherDashboard";
const Dashboard = ({ user, getUserData }) => {
  useEffect(() => {
    function fetchUser() {
      getUserData(user?.userId, user?.role);
    }
    fetchUser();
  }, [user]);
  {
    if (user?.role === "admin") {
      return <AdminDashboard />;
    }
    if (user?.role === "student") {
      return <StudentDashboard />;
    }
    if (user?.role === "teacher") {
      return <TeacherDashboard />;
    }
    return <div>return back to login page</div>;
  }
};
const mapState = (state) => ({
  user: state?.auth,
});
const actions = {
  getUserData,
};
export default connect(mapState, actions)(Dashboard);
