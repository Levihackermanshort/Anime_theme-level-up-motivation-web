import React, { useState } from 'react';

function QuestForm({ onAddQuest }) {
  const [quest, setQuest] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (quest.trim()) {
      onAddQuest(quest);
      setQuest('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="quest-form">
      <input
        type="text"
        value={quest}
        onChange={(e) => setQuest(e.target.value)}
        placeholder="Enter a new quest"
      />
      <button type="submit">Add Quest</button>
    </form>
  );
}

export default QuestForm; 