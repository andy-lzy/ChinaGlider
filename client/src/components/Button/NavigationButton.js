import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './NavigationButton.module.css';

const NavigationButton = ({ to, children, className, disabled }) => {
  let navigate = useNavigate();  // useNavigate replaces useHistory

  const handleClick = () => {
    if (!disabled) {
      navigate(to);
    }
  };

  return (
    <button onClick={handleClick} disabled={disabled} className={`${styles.button} ${disabled ? styles.buttonDisabled : ''} ${className}`}>
      {children}
    </button>
  );
};

export default NavigationButton;