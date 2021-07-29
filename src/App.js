import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import HomePage from "./pages/home";
import LoginPage from "./pages/login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route>
          <LoginPage exact path="/login"/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;