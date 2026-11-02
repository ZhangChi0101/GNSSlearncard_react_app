import React, { useState } from 'react';

export default function CardItem({ card, onAnswer }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="card">
      <div className="card-header">
        <span>ID: {card.id}</span>
        <span className="box-badge">Box {card.box}</span>
      </div>
      
      <div className="card-content">
        <div className="card-term">{card.vorderseite}</div>
        {isFlipped && <div className="card-definition">{card.rueckseite}</div>}
      </div>

      <div className="card-actions">
        <button className="btn-flip" onClick={() => setIsFlipped(!isFlipped)}>
          {isFlipped ? "Verstecken" : "Umdrehen"}
        </button>
        <button className="btn-correct" onClick={() => onAnswer(card.id, true)}>
          Richtig (+1)
        </button>
        <button className="btn-wrong" onClick={() => onAnswer(card.id, false)}>
          Falsch (Box 1)
        </button>
      </div>
    </div>
  );
}