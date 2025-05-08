import React from 'react';

function StatCard({ stat, value }) {
  return (
    <div className="stat-card">
      <h3>{stat}</h3>
      <p>{value}</p>
    </div>
  );
}

export default StatCard; 