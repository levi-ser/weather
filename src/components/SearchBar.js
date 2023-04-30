import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    city: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.city);
  };

  handleChange = (e) => {
    this.setState({ city: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter city"
          value={this.state.city}
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;
