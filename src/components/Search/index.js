import React, { Component } from "react";
import "./style.css";

class Search extends Component {
  state = {
    inputValue: "",
  };

  handleSearch = () => {
    const { profiles, setStateCallback } = this.props;
    const searchValue = this.state.inputValue;
    const filteredProfiles = profiles.filter((profile) =>
      (profile.name.first + " " + profile.name.last)
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    );
    setStateCallback({ filteredProfiles });
  };

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  render() {
    return (
      <>
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <button
              className="input-group-text"
              id="inputGroup-sizing-sm"
              onClick={this.handleSearch}
            >
              Search
            </button>
          </div>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
      </>
    );
  }
}

export default Search;
