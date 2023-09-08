import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
 

  return (
    <div className="App">
<div className="searchbarcontainer">

  <SearchBar />

  

  <div>Search Bar Result </div>
</div>

    </div>
  );
}

export default App;
