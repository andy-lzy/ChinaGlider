import React, { createContext, useContext, useState } from 'react';

const ProvinceContext = createContext(null);

export const useProvince = () => useContext(ProvinceContext);

export const ProvinceProvider = ({ children }) => {
    const [province, setProvince] = useState('');
  
    return (
      <ProvinceContext.Provider value={{ province, setProvince }}>
        {children}
      </ProvinceContext.Provider>
    );
  };