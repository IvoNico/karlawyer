import React from "react";


function SearchResult({ result, handleResultClick }) {
  const formattedDate = new Date(result?.date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <li className="resultSearch" key={result.id} onClick={() => {handleResultClick(result.id);
      
    }}>
     
      <div>
        <img className="imgSearch" src={result?.img} alt={result.name} />
      </div>
      <div className="textResult">
        <h3>{result?.name}</h3>
        <p>{formattedDate}</p>
        
      </div>
      
    </li>
    
  );
}

export default SearchResult;
