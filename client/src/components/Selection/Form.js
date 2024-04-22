import React from 'react';
import styles from './Form.module.css';
import { useProvince } from '../Context/ProvinceContext';

const Form = ({ label, options, selection, setSelection }) => {

  const handleChange = (event) => {
    setSelection(event.target.value);
  };

  return (
    <div className={styles.formFieldContainer}>
      <label className={styles.selectLabel}>{label}</label>
      <select
        value={selection}
        onChange={handleChange}
        className={styles.selectDropdown}
      >
        <option value="">-- Select --</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Form;