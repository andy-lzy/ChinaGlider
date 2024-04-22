import React, { useState, useEffect, useRef } from 'react';

import './CitySelectionPage.css';

import ProvinceForm from '../components/Selection/ProvinceForm.js';
import CityForm from '../components/Selection/CityForm.js';
import Title from '../components/Text/Title.js';
import NavigationButton from '../components/Button/NavigationButton.js';
import { useProvince } from '../components/Context/ProvinceContext.js';
import { useCity } from '../components/Context/CityContext.js';

const base_url = 'http://localhost:5000'

const CitySelectionPage = () => {
    // State and handlers for the first form (e.g., Province form)
    const [provinces, setProvinces] = useState([]);
    const { province: selectedProvince } = useProvince();

    useEffect(() => {
      const fetchProvinces = async() => {
        try {
          const response = await fetch(base_url + '/provinces');
          const data = await response.json();
          setProvinces(data);
        } catch (error) {
          console.error('Error fetching provinces:', error);
        }
      }
      
      fetchProvinces();
    }, []);
    
    // State and handlers for the second form (e.g., City form)\
    const [cities, setCities] = useState([]);
    const { city: selectedCity } = useCity();

    useEffect(() => {
      if (!selectedProvince) {
        console.log("province is not selected");
      }
      const fetchCities = async() => {
        try {
          console.log("province is " + selectedProvince);
          let province_formatted = selectedProvince.replace(/ /g, '_');
          const response = await fetch(base_url + '/cities?province=' + province_formatted);
          const data = await response.json();
          setCities(data);
        } catch (error) {
          console.error('Error fetching cities:', error);
        }
      }
      
      fetchCities();
    }, [selectedProvince]);
  
    return (
      <div className="pageLayout">
        <div>
          <Title text={"Each of us seeks something different from a trip to China"} className={"greetingTitle"} />
        </div>
        <div className="descriptionText">
            Please tell us where you would like to go?
        </div>
        <div className="formContainer">
          <ProvinceForm 
            provinces={provinces}
          />
        </div>
        <div className="formContainer">
          <CityForm 
            cities={cities}
          />
        </div>
        <NavigationButton to="/style-selection" disabled={!selectedCity}>
          NEXT
        </NavigationButton>
      </div>
    );
  };
  
  export default CitySelectionPage;