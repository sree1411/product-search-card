import React, { createContext, useContext, useState } from "react";

// Create the context
const SearchContext = createContext();

// Custom hook to use the context
export const useSearch = () => useContext(SearchContext);

// Provider component
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
