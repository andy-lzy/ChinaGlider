import React from 'react';
import Form from './Form';

function ProvinceForm({ provinces, province, setProvince }) {
  return (
    <Form
      label="Province"
      options={provinces}
      selectedValue={province}
      onSelectChange={(e) => setProvince(e.target.value)}
    />
  );
}

export default ProvinceForm;