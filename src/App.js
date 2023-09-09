import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import SearchResultsList from './components/SearchResultsList';
import './App.css';

function App() {
  const [results, setResult] = useState([]);

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResult={setResult} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
    </div>
  );
}

export default App;
