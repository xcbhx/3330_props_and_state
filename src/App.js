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

  const addCounter = () => {
    setCounts([...counts, 0]);
  }

  const removeCounter = (indexToRemove) => {
    setCounts(counts.filter((_, index) => index !== indexToRemove));
  }

  return (
    <div className="App">
      <h1>Total Count: {counts.reduce((acc, num) => acc + num, 0)}</h1>
      {counts.map((value, index) => (
        <div key={index}>
          <Counter 
            label={`Counter ${index + 1}`} 
            value={value} 
            increment={() => updateCount(index, 1)}
            decrement={() => updateCount(index, -1)}
          />
          <button onClick={() => removeCounter(index)}>➖ Remove Counter</button>
        </div>
      ))}
      <br />
      <button onClick={resetCounter}>Reset</button>
      <br />
      <button onClick={addCounter}>➕ Add Counter</button>
    </div>
  );
}

export default App;
