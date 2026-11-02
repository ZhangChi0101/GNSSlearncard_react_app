import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ControlBar from './components/ControlBar';
import CardList from './components/CardList';
import AddCardForm from './components/AddCardForm';
import './App.css';

const initialGNSSCards = [
  { id: 1, vorderseite: "GNSS", rueckseite: "Global Navigation Satellite System: General term for satellite constellations providing PNT services.", box: 1 },
  { id: 2, vorderseite: "CORS", rueckseite: "Continuously Operating Reference Station: Permanently installed receiver streaming raw data for RTK corrections.", box: 1 },
  { id: 3, vorderseite: "PDOP", rueckseite: "Position Dilution of Precision: Geometric quality metric evaluating how satellite spatial distribution affects accuracy.", box: 1 },
  { id: 4, vorderseite: "RTK", rueckseite: "Real-Time Kinematic: Technique using carrier-phase measurements for centimeter-level positioning accuracy.", box: 1 },
  { id: 5, vorderseite: "PPP", rueckseite: "Precise Point Positioning: Global correction technique using precise orbit and clock products without a local base station.", box: 1 },
  { id: 6, vorderseite: "Pseudorange", rueckseite: "Apparent distance between satellite and receiver calculated by signal travel time multiplied by the speed of light.", box: 1 },
  { id: 7, vorderseite: "Multipath", rueckseite: "Error caused by reflected satellite signals arriving at the antenna via secondary paths.", box: 1 },
  { id: 8, vorderseite: "ECEF", rueckseite: "Earth-Centered, Earth-Fixed: 3D Cartesian coordinate system rotating with the Earth, native to GNSS calculations.", box: 1 }
];

export default function App() {
  // State management with localStorage persistence (useEffect)
  const [cards, setCards] = useState(() => {
    const saved = localStorage.getItem('gnss_cards');
    return saved ? JSON.parse(saved) : initialGNSSCards;
  });
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBox, setSelectedBox] = useState("all");

  useEffect(() => {
    localStorage.setItem('gnss_cards', JSON.stringify(cards));
  }, [cards]);

  // Interactive Feature 1: Leitner Box Handler (Correct -> Box + 1, Wrong -> Box 1)
  const handleAnswer = (id, isCorrect) => {
    setCards(prevCards =>
      prevCards.map(card => {
        if (card.id === id) {
          const newBox = isCorrect ? Math.min(card.box + 1, 5) : 1;
          return { ...card, box: newBox };
        }
        return card;
      })
    );
  };

  // Interactive Feature 2: Add New Card
  const handleAddCard = (newCardData) => {
    const newCard = {
      id: cards.length > 0 ? Math.max(...cards.map(c => c.id)) + 1 : 1,
      ...newCardData,
      box: 1
    };
    setCards([newCard, ...cards]);
  };

  // Interactive Features 3 & 4: Search & Box Filtering
  const filteredCards = cards.filter(card => {
    const matchesSearch = card.vorderseite.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          card.rueckseite.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBox = selectedBox === "all" || card.box === parseInt(selectedBox);
    return matchesSearch && matchesBox;
  });

  return (
    <div className="app-container">
      <Header />
      
      <ControlBar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedBox={selectedBox}
        setSelectedBox={setSelectedBox}
      />

      <div className="content-grid">
        <AddCardForm onAddCard={handleAddCard} />
        <CardList 
          cards={filteredCards} 
          onAnswer={handleAnswer} 
          totalCount={filteredCards.length}
        />
      </div>
    </div>
  );
}