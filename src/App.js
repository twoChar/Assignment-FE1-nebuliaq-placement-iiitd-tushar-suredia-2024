import React from 'react';
import ServiceMetricsTable from './components/ServiceMetricsTable';
import './App.css';

const sampleData = [
  {
    service: 'order-platform',
    client: {
      requests: 767,
      rate: '0.85 req/s',
      p75: '26.97 ms',
      p90: '1.37 s',
      p99: '1.45 s',
      error: '0.40%',
    },
    server: {
      requests: 769,
      rate: '0.85 req/s',
      p75: '25.87 ms',
      p90: '1.37 s',
      p99: '1.45 s',
      error: '0.38%',
    },
  },
  {
    service: 'payment-gateway',
    client: {
      requests: 560,
      rate: '0.45 req/s',
      p75: '15.27 ms',
      p90: '1.05 s',
      p99: '1.22 s',
      error: '0.25%',
    },
    server: {
      requests: 561,
      rate: '0.45 req/s',
      p75: '14.97 ms',
      p90: '1.02 s',
      p99: '1.19 s',
      error: '0.23%',
    },
  },
  {
    service: 'user-authentication',
    client: {
      requests: 832,
      rate: '0.92 req/s',
      p75: '12.43 ms',
      p90: '0.98 s',
      p99: '1.01 s',
      error: '0.15%',
    },
    server: {
      requests: 834,
      rate: '0.93 req/s',
      p75: '12.12 ms',
      p90: '0.95 s',
      p99: '1.00 s',
      error: '0.12%',
    },
  },
  {
    service: 'inventory-management',
    client: {
      requests: 654,
      rate: '0.70 req/s',
      p75: '19.37 ms',
      p90: '1.15 s',
      p99: '1.32 s',
      error: '0.30%',
    },
    server: {
      requests: 657,
      rate: '0.71 req/s',
      p75: '19.15 ms',
      p90: '1.13 s',
      p99: '1.28 s',
      error: '0.27%',
    },
  },
  {
    service: 'shipping-service',
    client: {
      requests: 920,
      rate: '1.02 req/s',
      p75: '20.57 ms',
      p90: '1.25 s',
      p99: '1.35 s',
      error: '0.20%',
    },
    server: {
      requests: 925,
      rate: '1.03 req/s',
      p75: '20.35 ms',
      p90: '1.22 s',
      p99: '1.31 s',
      error: '0.18%',
    },
  },
  {
    service: 'customer-support',
    client: {
      requests: 1032,
      rate: '1.15 req/s',
      p75: '22.67 ms',
      p90: '1.30 s',
      p99: '1.40 s',
      error: '0.35%',
    },
    server: {
      requests: 1037,
      rate: '1.16 req/s',
      p75: '22.45 ms',
      p90: '1.28 s',
      p99: '1.38 s',
      error: '0.32%',
    },
  },
  {
    service: 'notification-service',
    client: {
      requests: 478,
      rate: '0.53 req/s',
      p75: '14.87 ms',
      p90: '1.10 s',
      p99: '1.25 s',
      error: '0.22%',
    },
    server: {
      requests: 481,
      rate: '0.54 req/s',
      p75: '14.55 ms',
      p90: '1.08 s',
      p99: '1.20 s',
      error: '0.20%',
    },
  },
  
  // Add more sample data here
];

const App = () => {
  return (
    <div className="App">
      <h1>Service Metrics Table</h1>
      <ServiceMetricsTable data={sampleData} />
    </div>
  );
};

export default App;
