
function NumberList() {
  const zahlen = [5, 12, 8, 20, 3, 15];
  
  return (
    <div>
      <h2>Filtered and Doubled Numbers</h2>
      <p>Original numbers: {zahlen.join(', ')}</p>
      <p>Numbers greater than 10, doubled:</p>
      
      <ul>
        {zahlen
          .filter(zahl => zahl > 10)      
          .map((zahl, index) => (
            <li key={index}>
              Doubled value: {zahl * 2}    
            </li>
          ))}
      </ul>
        
        <p>Filtered and doubled numbers: {zahlen.filter(zahl => zahl > 10).map(zahl => zahl * 2).join(', ')}</p>
    </div>
  );
}


export default NumberList;