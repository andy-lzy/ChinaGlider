import React, { useEffect, useState } from 'react';
import { State } from 'country-state-city';
import './CitySelection.css';
import CityForm from './components/Selection/Form';

function CitySelection() {
    const [province, setProvince] = useState('');
    const [city, setCity] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the form submission, such as sending data to a backend service
        alert(`You selected ${province} province and ${city} city.`);
    };

    return (
        <div className="city-selection-container">
            <div className="greeting-text">
                Each of us seeks something different from a trip to China
            </div>
            <div className="destination-text">
                Please tell us where you would like to go?
            </div>
            <form onSubmit={handleSubmit}>
                <label className="select-province-label">
                    Province
                    <select value={province} onChange={(e) => setProvince(e.target.value)}>
                        <option className="select-province-option" value="select"></option>
                        {/* ...other options... */}
                    </select>
                </label>
                <CityForm />
                <button className="next-button" type="submit">NEXT</button>
            </form>
        </div>
    );
}

export default CitySelection;