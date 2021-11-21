import React from 'react';
import { errorIcon } from '../../../assets/importImages';
import styles from './Input.module.scss';


const Input = ({placeholder, name, value, handleChange, error}) => { 
    return (
        <div className={styles.wrapper}>
            <input 
                className={`${styles.input} ${error && styles.error}`} 
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={handleChange}
            />
            {error && <img className={styles.error_img} src={errorIcon} alt="error" />}
        </div>
    );
};

export default Input;
