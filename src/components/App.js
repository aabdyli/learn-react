import React from 'react';
import Popular from './Popular';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';
import Results from './Results';
import axios from 'axios';

window.axios = axios;

function App() {
  return (
    <Router>
      <div className='container'>
        <Nav/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/battle' component={Battle} />
          <Route path='/battle/results' component={Results} />
          <Route path='/popular' component={Popular} />
          <Route render={ () => <p className='home-container'>Not Fonud</p>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
