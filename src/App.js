import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {

  const [result, setResult] = useState([]);

 

  return (
    <div className="App">
<div className="searchbarcontainer">

  <SearchBar setResult={setResult} />

  

  <div>Search Bar Result </div>
</div>

    </div>
  );
}

export default App;
