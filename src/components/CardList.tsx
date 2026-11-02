import React, { useState, useEffect } from 'react';
import CardItem from './CardItem';

export default function CardList({ cards, onAnswer, totalCount }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Setze den Index zurück, wenn sich die gefilterte Liste ändert (z.B. bei neuer Box oder Suche)
  useEffect(() => {
    setCurrentIndex(0);
  }, [cards.length]);

  if (cards.length === 0) {
    return (
      <section className="cards-section">
        <h2>Lernmodus (0 Karten)</h2>
        <p style={{ textAlign: 'center', color: '#64748b', padding: '2rem' }}>
          Keine Vokabeln in dieser Auswahl gefunden.
        </p>
      </section>
    );
  }

  // Sicherstellen, dass der Index im gültigen Bereich bleibt
  const safeIndex = Math.min(currentIndex, cards.length - 1);
  const currentCard = cards[safeIndex];

  // Handler: Antwort geben und direkt zur nächsten Karte springen
  const handleAnswerAndAdvance = (id, isCorrect) => {
    onAnswer(id, isCorrect);
    
    // Wenn es nicht die letzte Karte ist, rückt die nächste nach. 
    // Wenn es die letzte war, springen wir zum Anfang oder bleiben stehen.
    if (safeIndex >= cards.length - 1) {
      setCurrentIndex(0);
    }
  };

  return (
    <section className="cards-section">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2>Lernmodus</h2>
        <span className="box-badge">
          Karte {safeIndex + 1} von {cards.length}
        </span>
      </div>

      <div className="cards-grid">
        <CardItem 
          key={currentCard.id} 
          card={currentCard} 
          onAnswer={handleAnswerAndAdvance} 
        />
      </div>

      {/* Navigations-Buttons zum manuellen Blättern */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
        <button 
          className="filter-btn" 
          onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
          disabled={safeIndex === 0}
          style={{ opacity: safeIndex === 0 ? 0.5 : 1, cursor: safeIndex === 0 ? 'not-allowed' : 'pointer' }}
        >
          &larr; Vorherige Karte
        </button>
        <button 
          className="filter-btn" 
          onClick={() => setCurrentIndex(prev => Math.min(cards.length - 1, prev + 1))}
          disabled={safeIndex === cards.length - 1}
          style={{ opacity: safeIndex === cards.length - 1 ? 0.5 : 1, cursor: safeIndex === cards.length - 1 ? 'not-allowed' : 'pointer' }}
        >
          Nächste Karte &rarr;
        </button>
      </div>
    </section>
  );
}