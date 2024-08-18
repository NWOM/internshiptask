import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Correct import for React 18
import App from './App';
import './index.css';

// Create the root element using createRoot from 'react-dom/client'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
