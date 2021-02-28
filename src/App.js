import "./App.css";
import styled from "styled-components";
import Ball from "./components/ball";
import Issue from "./components/issue";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/issue" component={Issue} />
        <Route exact path="/" component={Ball} />
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
