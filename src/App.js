import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import searchResultsList from './components/searchResultsList';
import './App.css';

function App() {

  const [result, setResult] = useState([]);

 

  return (
    <div className="App">
<div className="searchbarcontainer">

  <SearchBar setResult={setResult} />

  <searchResultsList result={result} />
</div>

    </div>
  );
}

export default App;
