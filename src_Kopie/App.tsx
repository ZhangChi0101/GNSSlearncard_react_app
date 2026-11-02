// 1. Die Kindkomponente: Haustier
function Haustier(props: any) {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '15px', 
      margin: '10px 0', 
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      color: '#333'
    }}>
      <h2>{props.name}</h2>
      <p><strong>Tierart:</strong> {props.tierart}</p>
      <p><strong>Alter:</strong> {props.alter} Jahre</p>
      <p><strong>Lieblingsfutter:</strong> {props.futter}</p>
      
      {/* Verwendung von props.children für zusätzlichen Inhalt */}
      <div style={{ marginTop: '10px', fontStyle: 'italic', color: '#555', borderLeft: '3px solid #007bff', paddingLeft: '8px' }}>
        {props.children}
      </div>
    </div>
  );
}

// 2. Die Elternkomponente: App
function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Meine Haustiere</h1>
      
      {/* Erstes Haustier: Bello */}
      <Haustier 
        name="Bello" 
        tierart="Hund" 
        alter={3} 
        futter="Trockenfutter & Knochen"
      >
        Besonderheit: Bello liebt es, Bälle zu apportieren und geht sehr gerne im Park spazieren.
      </Haustier>

      {/* Zweites Haustier: Minka */}
      <Haustier 
        name="Minka" 
        tierart="Katze" 
        alter={5} 
        futter="Lachs-Nassfutter"
      >
        Besonderheit: Minka schläft am liebsten auf der sonnigen Fensterbank und lässt sich gerne kraulen.
      </Haustier>
    </div>
  )
}


export default App