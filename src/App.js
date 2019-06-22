import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Nav from './components/Helpers/Nav';
import Popular from './Pages/Popular';
import Home from './Pages/Home';
import Battle from './Pages/Battle';
import Results from './components/Results';

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
