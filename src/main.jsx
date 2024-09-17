// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// PrimeReact styles
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/saga-blue/theme.css'; // Theme
import 'primereact/resources/primereact.min.css';         // Core CSS
import 'primeicons/primeicons.css';                       // Icons

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);