import React from 'react';

const Results = ({ results }) => {
  return (
    <div>
      {results && results.length ? (
        results.map((result, index) => (
          <div key={index}>
            <h3>{result.title}</h3>
            <p>{result.content}</p>
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default Results;
