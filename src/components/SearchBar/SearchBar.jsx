import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { fetchSearchResults } from "../SearchServices/SearchServices";
import ClipLoader from "react-spinners/ClipLoader";
import "./SearchBar.css";
import SearchResult from "../SearchServices/SearchResult";
import NoResultsMessage from "../SearchServices/NoResultsMessage";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleResultClick = useCallback((id) => {
    navigate(`/article/${id}`);
  }, [navigate]);

  useEffect(() => {
    const fetchResults = async () => {
      if (searchTerm !== "") {
        setIsLoading(true);
        const results = await fetchSearchResults(searchTerm);
        setSearchResults(results);
        setIsLoading(false);
      } else {
        setSearchResults([]);
      }
    };
    const timeoutId = setTimeout(fetchResults, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTerm]);

  return (
    <div className="search">
      <div>
        <input className="inputSearch" type="text" placeholder="Comienza a escribir" onChange={handleSearch} value={searchTerm}/>
        {isLoading ? (
          <ClipLoader className="ClipLoader" />
          ) : (
          searchResults.map(result => (
          <SearchResult className="inputResult" key={result.id} result={result} handleResultClick={handleResultClick} />
          ))
          )}
        <NoResultsMessage searchTerm={searchTerm} isLoading={isLoading} searchResults={searchResults}/>
      </div>
    </div>
  );
}
