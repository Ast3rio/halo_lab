import React, { useContext, useCallback } from 'react';
import { Context } from '../context/Context';
import styles from './App.module.scss';
import ProductCard from './../commons/ProductCard/ProductCard';
import Button from '../commons/Button/Button';
import Modal from './../Modal/Modal';
import { switchModal } from './../Modal/switchModal';

export const App = () => {
    const {products, modal, modalType, setModalData, setModalType, setModal} = useContext(Context)
    const buyCheapest = useCallback(() => {
        const sortProducts = products.sort((a, b) => a.price - b.price)
        setModal(true)
        setModalType('buy-modal')
        setModalData(sortProducts[0])
    }, [setModal, setModalData, setModalType, products])

    return (
        <div className={styles.app}>
            {modal && <Modal>
                {switchModal(modalType)}
            </Modal>}
            <div className="container">
                <div className={styles.wrapper}>
                {products?.map(({name, category, price}) => <ProductCard 
                    key={name}
                    name={name}
                    category={category}
                    price={price}
                />)}
                </div>
                <Button long={true} handleClick={buyCheapest} label={'Buy cheapest'} />
            </div>
        </div>
    );
};

