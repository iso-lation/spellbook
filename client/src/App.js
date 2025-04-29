import logo from './logo.svg';
import './App.css';
import React from 'react';
import HTMLFlipBook from "react-pageflip"
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
  const [spells, setSpells] = useState([])
  const [currentSpellIndex, setCurrentSpellIndex] = useState(0)
  function handlePrevious() {
    if (currentSpellIndex > 0) {
      setCurrentSpellIndex(currentSpellIndex - 1);
    }
  }
  
  function handleNext() {
    if (currentSpellIndex < spells.length - 1) {
      setCurrentSpellIndex(currentSpellIndex + 1);
    }
  }
  
  useEffect(() => {
    fetch('http://localhost:3001/api/spells')
    .then(response => response.json())
    .then(data => {
      setSpells(data)
  })}, []
  )
  
  return (
    <div> 
       <HTMLFlipBook width={600} height={400}>
        <div className="page">
          <h2>{spells[0]?.name}</h2>
          <p>{spells[0]?.description}</p>
        </div>
        <div className="page">
          <h2>{spells[1]?.name}</h2>
          <p>{spells[1]?.description}</p>
        </div>
      </HTMLFlipBook>
      
    </div>
  );
  
}

export default App;
