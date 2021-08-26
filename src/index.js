import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.servidor = 'http://localhost:3333'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

