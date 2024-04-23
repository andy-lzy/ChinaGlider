import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import { ProvinceProvider } from './components/Context/ProvinceContext';
import { CityProvider } from './components/Context/CityContext';
import { DaysCountProvider } from './components/Context/DaysCountContext';
import { TripIntensityProvider } from './components/Context/TripIntensityContext';
import { TripStyleProvider } from './components/Context/TripStyleContext';

import CitySelectionPage from './pages/CitySelectionPage';
import StyleSelectionPage from './pages/StyleSelectionPage';
import PlanGeneratorPage from './pages/PlanGeneratorPage';


function App() {
  return (
    <Router>
      <ProvinceProvider>
        <CityProvider>
          <DaysCountProvider>
            <TripIntensityProvider>
              <TripStyleProvider>
                <Routes>
                  <Route path="/" element={<CitySelectionPage />} />
                  <Route path="/style-selection" element={<StyleSelectionPage />} />
                  <Route path="/plan-generator" element={<PlanGeneratorPage />} />
                </Routes>
              </TripStyleProvider>
            </TripIntensityProvider>
          </DaysCountProvider>
        </CityProvider>
      </ProvinceProvider>
    </Router>
  );
}

export default App;
