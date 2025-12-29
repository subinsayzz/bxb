import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Deck from './components/Deck';
import { slides as companyProfileSlides } from './data/companyProfile';
import { slides as boxxburnSlides } from './data/boxxburn';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Deck slides={companyProfileSlides} />} />
        <Route path="/boxxburn" element={<Deck slides={boxxburnSlides} />} />
        {/* Fallback for gymname could be implemented similarly if we had a generic loader, 
            for now, we'll assume new decks will be added as routes or we can make a dynamic route later. */}
      </Routes>
    </Router>
  );
};

export default App;
