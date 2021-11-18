import React, { useContext } from 'react';
import { Context } from '../context/Context';
import styles from './App.module.scss';

export const App = () => {
    const {products} = useContext(Context)
    return (
        <div className={styles.app}>
            <div className="container">
                {products?.map(({name, category, price}) => <div key={name}>{`${name} ${category} ${price}`}</div>)}
            </div>
        </div>
    );
};

