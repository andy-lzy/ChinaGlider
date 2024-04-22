import React from 'react';
import Form from './Form';
import { useCity } from '../Context/CityContext';

const CityForm = ({ cities }) => {
  const { city, setCity } = useCity();
  return (
    <Form
      label="City"
      options={cities}
      selection={city}
      setSelection={setCity}
    />
  );
}

export default CityForm;