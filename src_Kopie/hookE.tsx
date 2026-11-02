
import React from 'react';
import { useState } from 'react';

function hookExample (){
    const { useState } = React;
    const [count, setCount] = useState(0);  
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            
        </div>


    );
    
}
export default hookExample;