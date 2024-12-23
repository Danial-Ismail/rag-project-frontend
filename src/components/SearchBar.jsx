import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ onResults, fileData }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (!query) {
      console.error("Search query is required!");
      return;
    }
  
    // Include fileName from fileData when sending the search request
    axios
      .post('http://localhost:5000/api/search', {query })
      .then((response) => {
        onResults(response.data);
      })
      .catch((error) => {
        console.error('Error during search:', error);
      });
  };

  return (
    <div className='search-bar'>
      <input
        type="text"
        placeholder="Enter search query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;