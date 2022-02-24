import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { BrowserRouter as Router } from "react-router-dom"
import { AuthProvider, DataProvider } from './context'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
