import React from 'react';
import ServiceMetricsTable from './components/ServiceMetricsTable';
import './App.css';
import { sampleData } from './utils/utils';

const App = () => {
  return (
    <div className="App">
      <h1>Service Metrics Table</h1>
      <ServiceMetricsTable data={sampleData} />
    </div>
  );
};

export default App;
