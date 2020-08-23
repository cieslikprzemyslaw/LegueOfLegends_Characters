import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../Css/App.css';
import NavBar from '../Components/NavBar/NavBar';
import Home from './Home/Home';
import Characters from './Characters/Characters';
import CharacterPage from './Characters/CharacterPage'
import ErrorPage from '../Components/Error/ErrorPage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <section>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/characters" component={Characters} />
            <Route path="/character/:id" component={CharacterPage} />
            <Route component={ErrorPage} />
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
