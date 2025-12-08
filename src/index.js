import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Snowfall from 'react-snowfall'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <div style={{ height: 400, width: 400, background: '#151516', position: 'fixed', width: '100vw', height: '100vh', zIndex: -1 }}>
    <Snowfall />
  </div>
    <App />
  </React.StrictMode>
);