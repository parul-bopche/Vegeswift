import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Productlist from './pages/Productlist';
// ... you can add other pages later

// Make sure your index.css is imported for styling
import './index.css';

function App() {
  return (
    <BrowserRouter>
      {/* The Navbar will be visible on every page */}
      <Navbar />
      
      {/* The Routes will switch the content based on the URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Productlist />} />
        {/* Add other routes here as you build them */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;