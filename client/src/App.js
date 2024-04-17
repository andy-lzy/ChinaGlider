import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import CitySelectionPage from './pages/CitySelectionPage';
import StyleSelectionPage from './pages/StyleSelectionPage';
import GeneratePlanPage from './pages/GeneratePlanPage';
import { PlanProvider } from './Providers/PlanContext';

function App() {
  return (
    <Router>
      <PlanProvider>
        <Routes>
          <Route path="/" element={<CitySelectionPage />} />
          <Route path="/style-selection" element={<StyleSelectionPage />} />
          {/* <Route path="/generate-plan" element={<GeneratePlanPage />} /> */}
        </Routes>
      </PlanProvider>
    </Router>
  );
}

export default App;
