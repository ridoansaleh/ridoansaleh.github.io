import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CoreLayout from "./layout/CoreLayout";
import Main from "./routes/main";
import Projects from "./routes/projects";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <CoreLayout>
            <Main />
          </CoreLayout>
        </Route>
        <Route path="/projects">
          <CoreLayout>
            <Projects />
          </CoreLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
