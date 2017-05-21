import React, { Component } from 'react';
import '../App.css';
import windows from '../static/img/windows_logo.png'
import ubuntu from '../static/img/ubuntu-logo14.png'
import centos from '../static/img/Centos-logo-light.svg.png'
import debian from '../static/img/openlogo-100.png'
import macos from '../static/img/MacOS_wordmark.svg.png'
import aws from '../static/img/AmazonWebservices_Logo.svg.png'
import azure from '../static/img/microsoft-azure-2.svg'
import openstack from '../static/img/OpenStack®_Logo_2016.svg.png'

class Infrastructure extends Component {

  render() {
    return (
      <div>

        <h2>Infrastructure</h2>
        <div>
          <p className="App-intro">
            In order to effectively architect and develop any solution, one must understand all the moving
            parts in play and have a toolbox of options, methods, and solutions ready to meet any challange.
            Here I will go over the technology and tools I am familiar with as well as any notable professional experience.
          </p>
        </div>
        <h3>Operating Systems</h3>
        <div className="row">
          <span className="row-el">
            <img src={ubuntu} className="infra-icon" alt="Ubuntu" />
          </span>
          <span className="row-el">
            <img src={debian} className="infra-icon" alt="debian" />
          </span>
          <span className="row-el">
            <img src={centos} className="infra-icon" alt="CentOS" />
          </span>
          <span className="row-el">
            <img src={windows} className="infra-icon" alt="Windows" />
          </span>
          <span className="row-el">
            <img src={macos} className="infra-icon" alt="Windows" />
          </span>
        </div>

        <h3>Clouds and Cloud Technologies</h3>
        <div>
          <div className="row">
            <span className="row-el">
              <img src={aws} className="infra-icon" alt="AWS" />
            </span>
            <span className="row-el">
              <img src={azure} className="infra-icon" alt="Azure" />
            </span>
            <span className="row-el">
              <img src={openstack} className="infra-icon" alt="Openstack" />
            </span>
          </div>
        </div>

        <h3>Services, frameworks, and Tools</h3>
        <p className="App-intro">
          I hold the opinion that it is not just enough to be able to develop with a framework or 
          against a service. One needs to be able to deploy and configure before they truly appreciate all
          the nuances, edge cases, as well as limitations. Here is a short summary of the services, tools, and frameworks I am comfortable
          deploying and configuring. 
        </p>
        <div className="content">
          <div>
            Docker
          </div>

          <div>
            Ansible
          </div>

          <div>
            Elasticsearch
          </div>

          <div>
            Hadoop
          </div>

          <div>
            Spark
          </div>

        </div>

      </div>
    )
  }

}

export default Infrastructure;
