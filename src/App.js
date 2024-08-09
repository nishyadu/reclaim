import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './App.css';

function App() {
  // Sample data - replace with your actual running data
  const runningData = [
    { month: 'Jan', kilometers: 50 },
    { month: 'Feb', kilometers: 60 },
    { month: 'Mar', kilometers: 70 },
    { month: 'Apr', kilometers: 80 },
    { month: 'May', kilometers: 90 },
    { month: 'Jun', kilometers: 100 },
    // Add more months as needed
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Monthly Running Data</h1>
        <BarChart width={600} height={300} data={runningData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="kilometers" fill="#8884d8" />
        </BarChart>
      </header>
    </div>
  );
}

export default App;