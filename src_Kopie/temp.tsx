function App() {
    const zahlen = [5, 12, 8, 20, 3, 15];
    const gefilterteZahlen = zahlen.filter(zahl => zahl > 10);
    const verdoppelteZahlen = gefilterteZahlen.map(zahl => zahl * 2);   
    return (
        <div>
            <p>Original numbers: {zahlen.join(', ')}</p>
            <p>Numbers greater than 10, doubled: {verdoppelteZahlen.join(', ')}</p>
        </div>
    );
}
export default App;