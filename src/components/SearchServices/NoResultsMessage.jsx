import React from "react";

export default function NoResultsMessage({ searchTerm, isLoading, searchResults }) {
  if (searchResults.length === 0 && searchTerm !== "" && !isLoading) {
    return <p>Lo siento, no hay nada que coincida con tu búsqueda.</p>;
  }
  return null;
}
