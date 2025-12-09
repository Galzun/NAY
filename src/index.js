import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Snowfall from 'react-snowfall'
import streamerImages from "../src/Components/Static/streamerImages.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <div style={{ height: 400, width: 400, background: '#151516', position: 'fixed', width: '100vw', height: '100vh', zIndex: -1 }}>
    <Snowfall />
  </div>
  {/* <div className='Background'>
    <img src={streamerImages["Background"]}></img>
  </div> */}
    <App />
  </React.StrictMode>
);