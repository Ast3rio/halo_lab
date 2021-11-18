import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ContextWrapper from './components/context/Context';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ContextWrapper>
      <App />
    </ContextWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
