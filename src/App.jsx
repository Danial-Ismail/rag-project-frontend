import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import './App.css';

const App = () => {
  const [fileData, setFileData] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const handleFileUploaded = (data) => {
    setFileData(data);
  };

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <div className='app-container'>
      <h1 className='app-heading'>RAG (Retrieval-Augmented Generation)</h1>
      <div className="content">
        <FileUpload onFileUploaded={handleFileUploaded} />
        <SearchBar fileData={fileData} onResults={handleSearchResults} />
        <Results results={searchResults} />
      </div>
    </div>
  );
};

export default App;


