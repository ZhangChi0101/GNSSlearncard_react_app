
// 1. Die Schüler-Komponente
function SchuelerCard({ name, note, hausaufgabe }) {
  
  // --- ANFORDERUNG 1: if / else für die Bewertung ---
  let bewertungText = "";
  if (note === 1) {
    bewertungText = "Sehr gut";
  } else if (note === 2) {
    bewertungText = "Gut";
  } else if (note === 3) {
    bewertungText = "Befriedigend";
  } else if (note === 4) {
    bewertungText = "Ausreichend";
  } else {
    bewertungText = "Nicht bestanden";
  }

  return (
    <div style={{ 
      border: "1px solid #ccc", 
      padding: "16px", 
      margin: "10px 0", 
      borderRadius: "8px",
      maxWidth: "350px",
      fontFamily: "Arial, sans-serif"
    }}>
      <h3>{name}</h3>
      <p><strong>Note:</strong> {note} ({bewertungText})</p>

      {/* --- ANFORDERUNG 2: && für die Hausaufgabe --- */}
      {hausaufgabe && (
        <p style={{ color: "green", margin: "4px 0" }}>
          ✅ Hausaufgabe abgegeben
        </p>
      )}

      {/* --- ANFORDERUNG 3: ? : für Bestanden / Nicht bestanden --- */}
      <p style={{ margin: "8px 0 0 0" }}>
        Status:{" "}
        {note >= 1 && note <= 4 ? (
          <span style={{ color: "blue", fontWeight: "bold" }}>Bestanden</span>
        ) : (
          <span style={{ color: "red", fontWeight: "bold" }}>Nicht bestanden</span>
        )}
      </p>
    </div>
  );
}

// 2. Hauptkomponente (Verwendung für mindestens drei Schüler)
 function SchuelerVerwaltung() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Schülerverwaltung</h2>
      
      {/* Schüler 1 */}
      <SchuelerCard 
        name="Anna Schmidt" 
        note={2} 
        hausaufgabe={true} 
      />

      {/* Schüler 2 */}
      <SchuelerCard 
        name="Lukas Weber" 
        note={5} 
        hausaufgabe={false} 
      />

      {/* Schüler 3 */}
      <SchuelerCard 
        name="Marie Becker" 
        note={3} 
        hausaufgabe={true} 
      />
    </div>
  );
}

export default SchuelerVerwaltung;
