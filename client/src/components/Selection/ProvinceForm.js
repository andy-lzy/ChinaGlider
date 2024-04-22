import React from 'react';
import Form from './Form';
import { useProvince } from '../Context/ProvinceContext';

const ProvinceForm = ({ provinces }) => {
  const { province, setProvince } = useProvince();
  return (
    <Form
      label="Province"
      options={provinces}
      selection={province}
      setSelection={setProvince}
    />
  );
};

export default ProvinceForm;