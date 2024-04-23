import React, { createContext, useContext, useState } from 'react';

const DaysCountContext = createContext(null);

export const useDaysCount = () => useContext(DaysCountContext);

export const DaysCountProvider = ({ children }) => {
    const [daysCount, setDaysCount] = useState('');
  
    return (
      <DaysCountContext.Provider value={{ daysCount, setDaysCount }}>
        {children}
      </DaysCountContext.Provider>
    );
  };