import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import './SearchBar.css'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const fetchSearchResults = async () => {
      const nameQuery = query(
        collection(db, "blogs"),
        where("name", ">=", searchTerm),
        where("name", "<=", searchTerm + "\uf8ff")
      );
      const descriptionQuery = query(
        collection(db, "blogs"),
        where("description", ">=", searchTerm),
        where("description", "<=", searchTerm + "\uf8ff")
      );
      const parrafoQuery = query(
        collection(db, "blogs"),
        where("parrafo", ">=", searchTerm),
        where("parrafo", "<=", searchTerm + "\uf8ff")
      );
      const [nameResults, descriptionResults, parrafoResults] = await Promise.all([
        getDocs(nameQuery),
        getDocs(descriptionQuery),
        getDocs(parrafoQuery),
      ]);

      const results = [];
      const ids = new Set(); // Use a Set to ensure unique results
      nameResults.forEach((doc) => {
        if (!ids.has(doc.id)) {
          results.push({ id: doc.id, ...doc.data() });
          ids.add(doc.id);
        }
      });
      descriptionResults.forEach((doc) => {
        if (!ids.has(doc.id)) {
          results.push({ id: doc.id, ...doc.data() });
          ids.add(doc.id);
        }
      });
      parrafoResults.forEach((doc) => {
        if (!ids.has(doc.id)) {
          results.push({ id: doc.id, ...doc.data() });
          ids.add(doc.id);
        }
      });
      setSearchResults(results);
    };

    if (searchTerm !== "") {
      fetchSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleResultClick = (id) => {
    navigate(`/article/${id}`);
  };

  return (
    <div>
      <input type="text" onChange={handleSearch} value={searchTerm} />
      {searchResults.length > 0 && (
        <ul >
          {searchResults.map((result) => (
            <li className="resultSearch" key={result.id} onClick={() => handleResultClick(result.id)}>
              <div>
                <img className="imgSearch" src={result.img} alt={result.name} />
              </div>
              <div>
                <h3>{result.name}</h3>
                <p>{result.description}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
