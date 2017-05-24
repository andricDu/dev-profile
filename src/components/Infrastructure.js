import React, { Component } from 'react';
import InfraRow from './InfraRow';
import '../App.css';
import windows from '../static/img/windows_logo.png'
import ubuntu from '../static/img/ubuntu-logo14.png'
import centos from '../static/img/Centos-logo-light.svg.png'
import debian from '../static/img/openlogo-100.png'
import macos from '../static/img/MacOS_wordmark.svg.png'
import aws from '../static/img/AmazonWebservices_Logo.svg.png'
import azure from '../static/img/microsoft-azure-2.svg'
import openstack from '../static/img/OpenStack®_Logo_2016.svg.png'
import docker from '../static/img/docker.png'
import ansible from '../static/img/Ansible_logo.svg.png'
import elasticsearch from '../static/img/Elasticsearch-Logo-Color-V.png'
import hadoop from '../static/img/Hadoop_logo.svg'
import spark from '../static/img/spark-logo.png'

class Infrastructure extends Component {

  render() {
    return (
      <div>

        <h2>Infrastructure</h2>
        <div>
          <p className="App-intro">
            In order to effectively architect and develop any solution, one must understand all the moving
            parts in play and have a toolbox of options, methods, and tools ready to meet any challange.
            Here I will go over the technology and tools I am familiar with as well as any notable professional experience.
          </p>
        </div>

        <h3>Services, frameworks, and Tools</h3>
        <div className="content">
          <InfraRow
            imgUrl={docker}
            width="50px"
            text="I have experience deploying microservices into production with Docker as well as authoring docker files and utilizing docker compose. I also have experience configuring and managing docker swarms" />

          <InfraRow
            imgUrl={ansible}
            width="50px"
            text="I have written ansible playbooks, not just for use by the teams I have worked with, but for other teams to be able to bring up our opensource solutions. This has been successfully done by teams as far as China." />

          <InfraRow
            imgUrl={elasticsearch}
            width="120px"
            text="My experience with Elasticsearch is considerable, having worked with and configured clusters of very large sizes. I also have experience fine tuning the performance and stability, from hardening against splitbrains to measuring cache evictions" />

          <InfraRow
            imgUrl={hadoop}
            width="120px"
            text="Having worked in the field of big data, I have experience creating and configuring Hadoop clusters for the use of HDFS and MapReduce." />

          <InfraRow
            imgUrl={spark}
            width="120px"
            text="In addition to the standard Hadoop stack, I have done substantial work with both Spark 1 and Spark 2. This includes setting up clusters for running jobs written in Java and Python." />
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

      </div>
    )
  }

}

export default Infrastructure;
