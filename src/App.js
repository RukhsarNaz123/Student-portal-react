import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Auth from "./Pages/Auth/Auth";
import Dashboard from "./Pages/Dashboards/Dashboard";
import Navbar from "./Components/Navbar/Navbar";

const HomePage = () => (
  <div>
    <h1>Welcome to Student Portal</h1>
    <p>press login button on navbar above</p>
  </div>
);
function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/auth" component={Auth} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
