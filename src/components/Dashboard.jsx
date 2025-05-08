import React, { useState } from 'react';
import { addXP } from '../utils/leveling';

function Dashboard() {
  const [xp, setXP] = useState(0);
  const [level, setLevel] = useState(1);
  const [remainingXP, setRemainingXP] = useState(0);

  const handleAddXP = (amount) => {
    const result = addXP(xp, amount);
    setXP(xp + amount);
    setLevel(result.level);
    setRemainingXP(result.remainingXP);
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Level: {level}</p>
      <p>Total XP: {xp}</p>
      <p>Remaining XP: {remainingXP}</p>
      <button onClick={() => handleAddXP(50)}>Add 50 XP</button>
    </div>
  );
}

export default Dashboard; 