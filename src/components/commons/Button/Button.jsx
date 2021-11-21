import React from 'react';
import styles from './Button.module.scss';

const Button = ({long = false, modal = false, label = '', handleClick}) => {
    return (
        <button 
            onClick={handleClick} 
            className={`${styles.button} ${long ? styles.long : styles.short }`}
            style={modal ? {width: '100%', height: '56px', marginTop: '32px'} : {}}
        >
            {label}
        </button>
    );
};

export default Button;
