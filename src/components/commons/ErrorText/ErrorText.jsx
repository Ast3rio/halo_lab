import React from 'react';
import styles from './ErrorText.module.scss';

const ErrorText = ({children}) => {
    return (
        <div className={styles.error}>
            {children}
        </div>
    );
};

export default ErrorText;
