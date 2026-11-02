import React, { useState } from 'react';

export default function AddCardForm({ onAddCard }) {
  const [vorderseite, setVorderseite] = useState("");
  const [rueckseite, setRueckseite] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (vorderseite.trim().length < 2) {
      setError("Der Begriff muss mindestens 2 Zeichen lang sein.");
      return;
    }
    if (rueckseite.trim().length < 5) {
      setError("Die Definition muss mindestens 5 Zeichen lang sein.");
      return;
    }

    onAddCard({ vorderseite: vorderseite.trim(), rueckseite: rueckseite.trim() });
    setVorderseite("");
    setRueckseite("");
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section className="form-section">
      <h2>Neue Vokabel hinzufügen</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Vorderseite (Begriff):</label>
          <input 
            type="text" 
            value={vorderseite} 
            onChange={(e) => setVorderseite(e.target.value)} 
            placeholder="z.B. ECEF" 
          />
        </div>
        <div className="form-group">
          <label>Rückseite (Definition):</label>
          <textarea 
            value={rueckseite} 
            onChange={(e) => setRueckseite(e.target.value)} 
            placeholder="Erklärung eingeben..." 
          />
        </div>
        {error && <span className="error-msg">{error}</span>}
        {success && <span className="success-msg">Vokabel erfolgreich hinzugefügt!</span>}
        <button type="submit" className="btn-primary">Speichern</button>
      </form>
    </section>
  );
}