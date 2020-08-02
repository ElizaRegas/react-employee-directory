import React, { Component } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Employees from "./components/Employees";
import API from "./utils/api";
class App extends Component {
  state = {
    profiles: [],
    filteredProfiles: [],
  };

  componentDidMount() {
    API.profiles()
      .then((res) => {
        this.setState({
          profiles: res.data.results,
          filteredProfiles: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  }

  setStateCallback = (setStateObj) => {
    this.setState(setStateObj);
  };

  handleAlphaSort = () => {
    const alphaSortedProfiles = this.state.filteredProfiles.sort((a, b) =>
      a.name.last.toLowerCase().localeCompare(b.name.last.toLowerCase())
    );
    this.setState({filteredProfiles: alphaSortedProfiles});
  };

  render() {
    const { profiles, filteredProfiles } = this.state;
    return (
      <>
        <Header />
        <Search 
          profiles={profiles} 
          setStateCallback={this.setStateCallback} 
        />
        <hr></hr>
        <Employees
          profiles={filteredProfiles}
          handleAlphaSort={this.handleAlphaSort}
        />
      </>
    );
  }
}

export default App;
