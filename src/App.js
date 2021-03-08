import "./App.css";
import { Switch, Route } from "react-router";
import IndexContainer from "./components/IndexContainer";
import SemanticPractice from "./components/SemanticPractice";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/semantic-practice" exact component={SemanticPractice} />
        <Route path="/form" exact component={Form} />
        <Route path="/" exact component={IndexContainer} />
      </Switch>
    </div>
  );
}

export default App;
