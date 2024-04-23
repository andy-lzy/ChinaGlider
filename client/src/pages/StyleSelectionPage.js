import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Title from '../components/Text/Title.js';
import NavigationButton from '../components/Button/NavigationButton.js';
import { validateNumberInput } from '../components/Validator/Validators.js';
import { useDaysCount } from '../components/Context/DaysCountContext.js';
import { useTripIntensity } from '../components/Context/TripIntensityContext.js';
import { useTripStyle } from '../components/Context/TripStyleContext.js';

import './StyleSelectionPage.css'

const StyleSelectionPage = () => {

    const { daysCount, setDaysCount } = useDaysCount();
    const { tripIntensity, setTripIntensity } = useTripIntensity();
    const { tripStyle, setTripStyle } = useTripStyle();

    const handleDaysCountChange = (event) => {
        validateNumberInput(event);
        setDaysCount(event.target.value);
    };

    const handleIntensitySelect = (style) => {
        setTripIntensity(style);
    };

    const handleStyleSelect = (style) => {
        setTripStyle(style);
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
                <input type="number" id="numberOfDays" min="1" max="15" onInput={handleDaysCountChange}/>
                <span class="daysText">days</span>
            </div>
            
            {/* Preferred trip style options  */}
            <div class="form-row">
                <label>Preferred trip style*</label>
                <div class="grid-container">
                    <button 
                        class="grid-item" 
                        onClick={() =>  handleIntensitySelect('Laid-back')} 
                        className={`button ${tripIntensity === 'Laid-back' ? 'selected' : ''}`}>
                        Laid-back
                    </button>
                    <span class="or-text">or</span>
                    <button 
                        class="grid-item"
                        onClick={() => handleIntensitySelect('Intense')} 
                        className={`button ${tripIntensity === 'Intense' ? 'selected' : ''}`}>
                        Intense
                    </button>
                    <button 
                        class="grid-item"
                        onClick={() => handleStyleSelect('City-Walk')} 
                        className={`button ${tripStyle === 'City-Walk' ? 'selected' : ''}`}>
                        City-Walk
                    </button>
                    <span class="or-text">or</span>
                    <button 
                        class="grid-item"
                        onClick={() => handleStyleSelect('Nature')} 
                        className={`button ${tripStyle === 'Nature' ? 'selected' : ''}`}>
                        Nature
                    </button>
                </div>
            </div>
        </div>
        <NavigationButton className="backButton" to="/">
          BACK
        </NavigationButton>
        <NavigationButton className="nextButton" to="/plan-generator" disabled={!tripIntensity || !tripStyle || !daysCount}>
          NEXT
        </NavigationButton>
      </div>
    );
  };

export default StyleSelectionPage;