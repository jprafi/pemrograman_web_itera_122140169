import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookProvider } from './context/BookContext';

import Home from './pages/Home/Home';
import Stats from './pages/Stats/Stats';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BookProvider>
      <Router>
        <div className="App">
          <h1>Aplikasi Manajemen Buku</h1>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<Stats />} />
          </Routes>
        </div>
      </Router>
    </BookProvider>
  );
}

export default App;