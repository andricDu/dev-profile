import React, { Component } from 'react';
import '../App.css';
import LangRow from './LangRow';
import InfraRow from './InfraRow';
import java from '../static/img/Java.png'
import python from '../static/img/python.png'
import C from '../static/img/C.png'

class Backend extends Component {

  render() {
    return (
     <div>
        <h2>Back-End Development</h2>
        <div>
          <p className="App-intro">
            The largest part of my development time and effort is spend on what would generally be classified as Back-End
            development. Now this includes all manner of projects, from web services, to command line tools, and everything
            in between. 
          </p>
        </div>

        <h3>Programming Languages</h3>
        <div className="content">

          <InfraRow 
            imgUrl={java}
            width="40px"
            text="The language that I have the most experience with. I am not only proficient with the lastest release of Java, but make it a point to know a good deal about the JVM internals. I am comfortable performing code reviews and offering guidance and mentorship."
          />

         <InfraRow 
            imgUrl={python}
            width="120px"
            text="Very strong skills with both Python 2 and 3. My scripting language of choice though I have also build very large projects in Python."
          />

         <InfraRow 
            imgUrl={C}
            width="120px"
            text="I have written a good deal of C code in my time, and even though I don't tend to use at as much as I used to, I occasionally find myself having to debug and fix some libraries a tool may depend on. As such, I carry that hard learned lessons and ideas from C with me."
          />

        </div>

     </div>
    )
  }

}

export default Backend;
