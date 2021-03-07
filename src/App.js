import './App.css';
import { Switch, Route } from 'react-router';
import IndexContainer from './components/IndexContainer';

function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route path="/" exact component={IndexContainer} />
      </Switch>
    </div>
  );
}

export default App;
