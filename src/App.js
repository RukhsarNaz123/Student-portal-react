import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Auth from "./Pages/Auth/Auth";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/auth" component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
