import React, { createContext, useContext, useState } from 'react';

const PlanContext = createContext();

export const usePlan = () => useContext(PlanContext);

export const PlanProvider = ({ children }) => {
    const [selectedStyle, setSelectedStyle] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    return (
        <PlanContext.Provider value={{
            selectedStyle,
            setSelectedStyle,
            selectedCity,
            setSelectedCity
        }}>
            {children}
        </PlanContext.Provider>
    );
};