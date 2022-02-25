import React from 'react';
import Home from '../pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VisitedCountry from '../pages/VisitedCountry';

const App = () => {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:name" element={<VisitedCountry />} />
         </Routes>
      </Router>
   );
};

export default App;
