import React, { Component } from 'react';
import '../App.css';

class ListRow extends Component {

  render() {
    return (
      <div className="list-row">
        <div style={{ flexGrow: 2, minWidth:"150px", alignContent: "center" }}>
          <img src={this.props.imgUrl} style={{ width: this.props.width }} alt="" ></img>
        </div>
        <span style={{ flexGrow: 2, textAlign: "left", paddingLeft: "10px"}}>
          {this.props.text}
        </span>
      </div>
    );
  }

}

export default ListRow;