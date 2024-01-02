import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import Header from './components/Header/Header';
import NavBar from './components/Header/NavBar.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
  </React.StrictMode>,
)
