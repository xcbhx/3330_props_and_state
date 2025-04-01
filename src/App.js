import { useState } from 'react';
import Counter from './Counter';

function App() {
  const [counts, setCounts] = useState([1, 4, 3]);
  
  const updateCount = (index, delta) => {
    const newCounts = [...counts]; //Copy array (immutability)
    let newValue = newCounts[index] + delta;

    // Limit the counter range to 0-10
    if (newValue < 0) {
      newValue = 0;
    } else if (newValue > 10) {
      newValue = 10;
    }

    newCounts[index] = newValue;
    setCounts(newCounts);
  };

  const resetCounter = () => {
    setCounts(counts.map(() => 0));
  }

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
      <br />
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
}

export default App;
