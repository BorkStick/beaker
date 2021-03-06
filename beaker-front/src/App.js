import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Portal from "./pages/portal";
import Users from "./pages/users_page";
import User from "./components/User/User";
import Installs from "./pages/installs_page";
import Install from "./components/Install/Install";
import AddInstall from "./pages/add_install_page";
import AddUser from "./pages/add_user_page";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/installs">
          <Installs />
        </Route>
        <Route exact path="/add/install">
          <AddInstall />
        </Route>
        <Route exact path="/add/user">
          <AddUser />
        </Route>
        <Route
          path="/installs/:install"
          exact
          render={(props) => <Install {...props} />}
        />
        <Route exact path="/users">
          <Users />
        </Route>
        <Route
          path="/users/:user"
          exact
          render={(props) => <User {...props} />}
        />
        <Route path="/">
          <Portal />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
