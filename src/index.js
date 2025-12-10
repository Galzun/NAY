import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Snowfall from 'react-snowfall';
import streamerImages from "../src/Components/Static/streamerImages.js";

function Root() {
  const [background, setBackground] = useState(true); // состояние

  return (
    <React.StrictMode>
      <div
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: -1
        }}
      >
        <Snowfall />
      </div>

      {background && (
        <div className="Background">
          <img src={streamerImages["Background"]} alt="background" />
        </div>
      )}

      <App background={background} setBackground={setBackground} />
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
