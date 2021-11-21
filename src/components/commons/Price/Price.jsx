import React from 'react';
import styles from './Price.module.scss'

const Price = ({price, modal = false}) => {
    return (
        <div className={`${styles.price} ${modal && styles.modal}`}>
            <span className={styles.currency}>{`$`}</span>
            <p className={styles.text}>{price}</p>
        </div>
    );
};

export default Price;
