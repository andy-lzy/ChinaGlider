import React from 'react';
import styles from './Form.module.css';

const Form = ({ label, options, selectedValue, onSelectChange }) => {
  return (
    <div className={styles.formFieldContainer}>
      <label className={styles.selectLabel}>{label}</label>
      <select value={selectedValue} onChange={onSelectChange} className={styles.selectDropdown}>
        <option value="">--select--</option> {/* Placeholder option */}
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