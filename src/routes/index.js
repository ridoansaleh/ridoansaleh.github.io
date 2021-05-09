import { HashRouter, Switch, Route } from "react-router-dom";
import CoreLayout from "../layout";
import Main from "./main";
import Projects from "./projects";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact>
          <CoreLayout children={Main} />
        </Route>
        <Route path="/projects">
          <CoreLayout children={Projects} />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
