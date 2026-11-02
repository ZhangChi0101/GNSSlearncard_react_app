import React from 'react';

export default function ControlBar({ searchQuery, setSearchQuery, selectedBox, setSelectedBox }) {
  const boxes = ['all', 1, 2, 3, 4, 5];

  return (
    <section className="controls-section">
      <div className="search-box">
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Vokabeln durchsuchen..." 
        />
      </div>
      <div className="filter-buttons">
        {boxes.map(box => (
          <button
            key={box}
            className={`filter-btn ${selectedBox === box ? 'active' : ''}`}
            onClick={() => setSelectedBox(box)}
          >
            {box === 'all' ? 'Alle' : `Box ${box}`}
          </button>
        ))}
      </div>
    </section>
  );
}