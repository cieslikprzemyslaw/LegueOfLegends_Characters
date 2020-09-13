import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../Css/App.css';
import Characters from './Characters/Characters';

function App() {
  return (
    <Router>
      <div className="App">
          <Characters/>
      </div>
    </Router>
  );
}

export default App;
