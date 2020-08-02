import React, { Component } from "react";
import "./style.css";

class Search extends Component {
  render() {
    return (
      <>
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Search
            </span>
          </div>
          <input 
            type="text" 
            className="form-control" 
            aria-label="Sizing example input" 
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
      </>
    )
  }
}

export default Search;


