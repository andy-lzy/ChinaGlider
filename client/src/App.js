import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import CitySelectionPage from './pages/CitySelectionPage';
import StyleSelectionPage from './pages/StyleSelectionPage';
import GeneratePlanPage from './pages/GeneratePlanPage';
import { ProvinceProvider } from './components/Context/ProvinceContext';
import { CityProvider } from './components/Context/CityContext';

function App() {
  return (
    <Router>
      <ProvinceProvider>
        <CityProvider>
          <Routes>
            <Route path="/" element={<CitySelectionPage />} />
            <Route path="/style-selection" element={<StyleSelectionPage />} />
            {/* <Route path="/generate-plan" element={<GeneratePlanPage />} /> */}
          </Routes>
        </CityProvider>
      </ProvinceProvider>
    </Router>
  );
}

export default App;
