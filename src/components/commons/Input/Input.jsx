import React from 'react';
import styles from './Input.module.scss';


const Input = ({placeholder, name, value, handleChange, error}) => { 
    return (
        <input 
            className={`${styles.input} ${error && styles.error}`} 
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={handleChange}
        />
    );
};

export default Input;
