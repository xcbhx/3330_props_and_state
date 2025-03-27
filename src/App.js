import { useState } from 'react';
import Counter from './Counter';

function App() {
  const [counts, setCounts] = useState([1, 4, 3]);
  
  const updateCount = (index, delta) => {
    const newCounts = [...counts]; //Copy array (immutability)
    newCounts[index] += delta;
    setCounts(newCounts);
  };

  return (
    <div className="App">
      <h1>Total Count: {counts.reduce((acc, num) => acc + num, 0)}</h1>
      {counts.map((value, index) => (
        <Counter 
          key={index} 
          label={`Counter ${index + 1}`} 
          value={value} 
          increment={() => updateCount(index, 1)}
          decrement={() => updateCount(index, -1)}
          />
      ))}
    </div>
  );
}

export default App;
