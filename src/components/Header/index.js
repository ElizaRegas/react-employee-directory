import React, { Component } from "react";
import "./style.css";

class Header extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Employee Directory</h1>
          <p className="lead">
            Click on <span id="headerWord">Name</span> to list alphabetically, or use the search box to narrow your results
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
