import React, { createContext, useContext, useState } from 'react';

const TripIntensityContext = createContext(null);

export const useTripIntensity = () => useContext(TripIntensityContext);

export const TripIntensityProvider = ({ children }) => {
    const [tripIntensity, setTripIntensity] = useState('');
  
    return (
      <TripIntensityContext.Provider value={{ tripIntensity, setTripIntensity }}>
        {children}
      </TripIntensityContext.Provider>
    );
};