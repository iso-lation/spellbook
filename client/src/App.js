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
  const spellPairs = [];
  for (let i = 0; i < spells.length; i += 2) {
    spellPairs.push([spells[i], spells[i + 1]]);
  }

  
  return (
    <div>
      {spells.length > 0 && typeof window !== "undefined" &&  (
        <div className="App">  
          <HTMLFlipBook width={800} height={850} size="stretch" minWidth={600} maxWidth={1000} minHeight={400}
            maxHeight={800} drawShadow={true} flippingTime={600} useMouseEvents={true} className="spellbook"
            clickEventForward={false} mobileScrollSupport={false} showCover={true}>
            <div className="page">
              <h1>Spellbook of Ancient Magic</h1>
              <p>Property of Hogwarts School of Witchcraft and Wizardy</p>
            </div>
            
            {spellPairs.map((pair, index) => (
              <div className="page" key={index}>
                {pair.map((spell, i) => (
                  spell && (
                    <div key={i} className="spell-entry">
                      <h1 className="spell-title">{spell.name}</h1>
                      <p className="spell-effect"><em>Effect:</em> {spell.effect}</p>
                      <p className="spell-description">"{spell.description}"</p>
                      <p className="spell-level">Level: {spell.level}</p>
                    </div>
                  )
                ))}
  </div>
))}

          </HTMLFlipBook>
        </div>
          )}
        </div>
  );
  
}

export default App;
