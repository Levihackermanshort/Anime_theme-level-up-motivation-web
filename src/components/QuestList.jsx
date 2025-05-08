import React, { useState } from 'react';

function QuestList() {
  const [quests, setQuests] = useState([]);
  const [newQuest, setNewQuest] = useState('');

  const handleAddQuest = () => {
    if (newQuest.trim()) {
      setQuests([...quests, newQuest]);
      setNewQuest('');
    }
  };

  return (
    <div className="quest-list">
      <h2>Quests</h2>
      <ul>
        {quests.map((quest, index) => (
          <li key={index}>{quest}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newQuest}
        onChange={(e) => setNewQuest(e.target.value)}
        placeholder="Add a new quest"
      />
      <button onClick={handleAddQuest}>Add Quest</button>
    </div>
  );
}

export default QuestList; 