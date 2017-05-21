import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import logo from './dusan.png';
import background from './static/img/background.jpg'
import './App.css';
import Infrastructure from './components/Infrastructure';
import Backend from './components/Backend';
import Frontend from './components/Frontend';
import Welcome from './components/Welcome';

const App = () => (
  <Router>
  <div className="App">
    <div className="App-header" style={{ backgroundImage: `url(${background})`}}>
      <img src={logo} className="App-logo" alt="logo" />
      <div>
        <h3 className="App-myname">Dušan Andrić</h3>
        <span>
          <ul className="App-external-links">
            <li><a href="https://github.com/andricDu"> GitHub </a></li>
            <li><a href="https://ca.linkedin.com/in/dusan-andric-9ab74722"> LinkedIn </a></li>
            <li><a href="https://twitter.com/andricDu"> Twitter </a></li>
          </ul>
        </span>
      </div>
    </div>
    <div id="content" className="container App-content">
      <Route exact path="/" component={Welcome} />
      <Route path="/infra" component={Infrastructure}/>
      <Route path="/backend" component={Backend}/>
      <Route path="/frontend" component={Frontend}/>
    </div>
  </div>
  </Router>
)
export default App;