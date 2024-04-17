import React from 'react';
import Form from './Form';

function CityForm({ cities, city, setCity }) {
  return (
    <Form
      label="City"
      options={cities}
      selectedValue={city}
      onSelectChange={(e) => setCity(e.target.value)}
    />
  );
}

export default CityForm;