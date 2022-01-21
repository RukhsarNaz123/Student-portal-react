import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Auth from "./Pages/Auth/Auth";
import Dashboard from "./Pages/Dashboards/Dashboard";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
