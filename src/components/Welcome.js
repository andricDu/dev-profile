import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import '../App.css';
import infra from '../static/img/infra.svg'
import backend from '../static/img/backend.svg'
import frontend from '../static/img/frontend.svg'

class Welcome extends Component {

  render() {
    return (
      <div>
        <h3>Current Position</h3>
        Software Architect, Informatics, Ontario Institute for Cancer Research
      <h3>About Me</h3>
        <p className="App-intro">
          Hi! My name is Dušan and I am what some people might refer to as a Full-Stack Developer.
            I make it my mission to tackle difficult problems and to ensure that all tasks and solutions
            are completed to the highest of standards.
          </p>
        <p className="App-intro">
          My background is in Computer Science and Physics and I am comfortable expressing and wrestling with
            mathematical problems. I have a passion and history working in scientific and medical fields,
            and have a great deal of experience with web technologies. 
          </p>
        <h2>Skill Sets</h2>
        <div className="row">

          <div className="App-skill-set">
            <Link to="/infra">
              <img src={infra} className="skill-set-icon" alt="IT Infrastructure" />
              <div className="App-skill-set-link">Infrastructure</div>
            </Link>
          </div>

          <div className="App-skill-set">
            <Link to="/backend">
              <img src={backend} className="skill-set-icon" alt="Backend" />
              <div className="App-skill-set-link">Back End</div>
            </Link>
          </div>

          <div className="App-skill-set">
            <Link to="/frontend">
              <img src={frontend} className="skill-set-icon" alt="Front End" />
              <div className="App-skill-set-link">Front End</div>
            </Link>
          </div>

        </div>
      </div>
    );
  }

}

export default Welcome;
