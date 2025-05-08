import React from 'react';
import './styles/App.css';
import Dashboard from './components/Dashboard';
import QuestList from './components/QuestList';
import HistoryLog from './components/HistoryLog';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Solo Leveling System</h1>
        <p>Turn your life into an RPG!</p>
      </header>
      <main className="app-content">
        <Dashboard />
        <QuestList />
        <HistoryLog />
      </main>
    </div>
  );
}

export default App; 