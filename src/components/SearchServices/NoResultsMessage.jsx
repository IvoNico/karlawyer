import React from "react";
import './CssServices/NoResultsMessage.css'

export default function NoResultsMessage({ searchTerm, isLoading, searchResults }) {
  if (searchResults.length === 0 && searchTerm !== "" && !isLoading) {
    return <p className="parrNot">Lo siento, no hay nada que coincida con tu búsqueda.</p>;
  }
  return null;
}
