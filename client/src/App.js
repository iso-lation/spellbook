import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
  const [spells, setSpells] = useState([])
  const [currentSpellIndex, setCurrentSpellIndex] = useState(0)
  useEffect(() => {
    fetch('http://localhost:3001/api/spells')
    .then(response => response.json())
    .then(data => {
      setSpells(data)
  })}, []
  )
  
  return (
    <div>
     {spells.length > 0 && (
  <div>
    <h2>{spells[currentSpellIndex].name}</h2>
    <p>{spells[currentSpellIndex].description}</p>
  </div>
)}

    </div>
  );
  
}

export default App;
