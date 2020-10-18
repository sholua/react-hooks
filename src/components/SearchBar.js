import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  handleChange = (event) => {
    this.setState({ term: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    const { term } = this.state;

    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label htmlFor="search">Video search</label>
            <input
              id="search"
              type="text"
              value={term}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
