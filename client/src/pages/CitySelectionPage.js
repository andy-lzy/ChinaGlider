import React, { useState, useEffect, useRef } from 'react';
import ProvinceForm from '../components/Selection/ProvinceForm.js';
import CityForm from '../components/Selection/CityForm.js';
import Title from '../components/Text/Title.js';
import NavigationButton from '../components/Button/NavigationButton.js';

import './CitySelectionPage.css';

const base_url = 'http://localhost:5000'

const CitySelectionPage = () => {
    // State and handlers for the first form (e.g., Province form)
    const [provinces, setProvinces] = useState([]);
    const [province, setProvince] = useState('');

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
    const [city, setCity] = useState('');

    useEffect(() => {
      if (!province) {
        console.log("province is not selected");
      }
      const fetchCities = async() => {
        try {
          let province_formatted = province.replace(/ /g, '_');
          const response = await fetch(base_url + '/cities?province=' + province_formatted);
          const data = await response.json();
          console.log(data);
          setCities(data);
        } catch (error) {
          console.error('Error fetching cities:', error);
        }
      }
      
      fetchCities();
    }, [province]);
  
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
            province={province} 
            setProvince={setProvince} 
          />
        </div>
        <div className="formContainer">
          <CityForm 
            cities={cities} 
            city={city} 
            setCity={setCity} 
          />
        </div>
        <NavigationButton to="/style-selection" disabled={!city}>
          NEXT
        </NavigationButton>
      </div>
    );
  };
  
  export default CitySelectionPage;