import React, { Component } from 'react';
import '../App.css';

class InfraRow extends Component {

  render() {
    return (
      <div className="list-row">
        <div style={{ flexGrow: 2, display: "flex", flexDirection: "column", justifyContent:"center", alignContent:"center", minWidth:"150px" }}>
          <img src={this.props.imgUrl} style={{ alignSelf: "center", width: this.props.width }} alt="" ></img>
        </div>
        <div style={{ height: "125px", flexGrow: 2, textAlign: "left", display: "flex", flexDirection: "column", justifyContent:"center", paddingLeft: "10px"}}>
          {this.props.text}
        </div>
      </div>
    );
  }

}

export default InfraRow;