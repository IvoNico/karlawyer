import React from "react";

function SearchResult({ result, handleResultClick }) {
  return (
    <li className="resultSearch" key={result.id} onClick={() => handleResultClick(result.id)}>
      <div>
        <img className="imgSearch" src={result.img} alt={result.name} />
      </div>
      <div>
        <h3>{result.name}</h3>
        <p>{result.description}</p>
      </div>
    </li>
  );
}

export default SearchResult;
