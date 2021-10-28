import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import Portal from "./pages/portal";
import Users from "./pages/users_page";
import Installs from "./pages/install_page";
import Install from "./components/Install/Install"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/installs">
          <Installs />
        </Route>
        <Route
          path="/installs/:install"
          exact
          render={(props) => <Install install={props.match.params.install} />}
        />
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Portal />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
