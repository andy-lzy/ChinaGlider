import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Title from '../components/Text/Title.js';
import NavigationButton from '../components/Button/NavigationButton.js';
import { usePlan } from '../Providers/PlanContext.js';

import './StyleSelectionPage.css'

const StyleSelectionPage = () => {
    const { selectedCity } = usePlan();
    console.error(selectedCity);

    const [selectedIntensity, setSelectedIntensity] = useState('');
    const [selectedStyle, setSelectedStyle] = useState('');
    const navigate = useNavigate();

    const handleIntensitySelect = (style) => {
        setSelectedIntensity(style);
    };

    const handleStyleSelect = (style) => {
        setSelectedStyle(style);
    };

    const handleNext = () => {
        navigate('/next-page', { state: { selectedIntensity, selectedStyle } });
    };
  
    return (
      <div className="pageLayout">
        <div>
          <Title text={"Each of us seeks something different from a trip to China"} className={"greetingTitle"} />
        </div>
        <div className="descriptionText">
            Great! A few things we would like to know before giving a recommendation...
        </div>
        <div class="form-container">
            {/* Number of days input */}
            <div class="form-row">
                <label for="numberOfDays">Number of days*</label>
                <input type="number" id="numberOfDays" />
                <span class="daysText">days</span>
            </div>
            
            {/* Preferred trip style options  */}
            <div class="form-row">
                <label>Preferred trip style*</label>
                <div class="grid-container">
                    <button 
                        class="grid-item" 
                        onClick={() => handleIntensitySelect('Laid-back')} 
                        className={`button ${selectedIntensity === 'Laid-back' ? 'selected' : ''}`}>
                        Laid-back
                    </button>
                    <span class="or-text">or</span>
                    <button 
                        class="grid-item"
                        onClick={() => handleIntensitySelect('Intense')} 
                        className={`button ${selectedIntensity === 'Intense' ? 'selected' : ''}`}>
                        Intense
                    </button>
                    <button 
                        class="grid-item"
                        onClick={() => handleStyleSelect('City-Walk')} 
                        className={`button ${selectedStyle === 'City-Walk' ? 'selected' : ''}`}>
                        City-Walk
                    </button>
                    <span class="or-text">or</span>
                    <button 
                        class="grid-item"
                        onClick={() => handleStyleSelect('Nature')} 
                        className={`button ${selectedStyle === 'Nature' ? 'selected' : ''}`}>
                        Nature
                    </button>
                </div>
            </div>
        </div>
        <NavigationButton className="backButton" to="/">
          BACK
        </NavigationButton>
        <NavigationButton className="nextButton" to="/">
          NEXT
        </NavigationButton>
      </div>
    );
  };

export default StyleSelectionPage;