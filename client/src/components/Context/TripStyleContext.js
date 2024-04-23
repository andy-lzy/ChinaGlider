import React, { createContext, useContext, useState } from 'react';

const TripStyleContext = createContext(null);

export const useTripStyle = () => useContext(TripStyleContext);

export const TripStyleProvider = ({ children }) => {
    const [tripStyle, setTripStyle] = useState('');
  
    return (
      <TripStyleContext.Provider value={{ tripStyle, setTripStyle }}>
        {children}
      </TripStyleContext.Provider>
    );
};