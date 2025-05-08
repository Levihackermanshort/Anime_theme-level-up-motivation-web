import React, { useState } from 'react';

function HistoryLog() {
  const [history, setHistory] = useState([]);

  const addToHistory = (event) => {
    setHistory([...history, { timestamp: new Date().toLocaleString(), event }]);
  };

  return (
    <div className="history-log">
      <h2>History Log</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            {item.timestamp}: {item.event}
          </li>
        ))}
      </ul>
      <button onClick={() => addToHistory('Level Up!')}>Simulate Level Up</button>
    </div>
  );
}

export default HistoryLog; 