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
      <nav className="app-nav">
        <ul>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#quests">Quests</a></li>
          <li><a href="#history">History</a></li>
        </ul>
      </nav>
      <main className="app-content">
        <section id="dashboard">
          <Dashboard />
        </section>
        <section id="quests">
          <QuestList />
        </section>
        <section id="history">
          <HistoryLog />
        </section>
      </main>
    </div>
  );
}

export default App; 