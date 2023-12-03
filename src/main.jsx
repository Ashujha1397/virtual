import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Chat from './components/Chat';
import Hero from './components/Hero';
import Voice from './components/Voice'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path = '/'element={<Hero/>}/>
      <Route path="/chat" element={<Chat />} />
      <Route path="/voice" element={<Voice />} />
    </Routes>
  </Router>
);

