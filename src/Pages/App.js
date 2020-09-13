import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../Css/App.css';
import Characters from './Characters/Characters';
import CharacterPage from './Characters/CharacterPage'
import ErrorPage from '../Components/Error/ErrorPage';

function App() {
  return (
    <Router>
      <div className="App">
        <section>
          <Switch>
            <Route path="/" exact component={Characters} />
            <Route path="/character/:id" component={CharacterPage} />
            <Route component={ErrorPage} />
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
