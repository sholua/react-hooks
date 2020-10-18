import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={handleSubmit} className="ui form">
        <div className="field">
          <label htmlFor="search">Video search</label>
          <input
            id="search"
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
