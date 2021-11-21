import React, { useCallback, useContext } from 'react';
import styles from './ProductCard.module.scss';
import Title from './../Title/Title';
import Text from './../Text/Text';
import Price from './../Price/Price';
import Button from '../Button/Button';
import { Context } from '../../context/Context';

const ProductCard = ({name = '', category = '', price = ''}) => {
    const {setModal, setModalType, setModalData} = useContext(Context)
    
    const openModal = useCallback(() => {
        setModal(true)
        setModalType('buy-modal')
        setModalData({name, category, price})
    }, [setModal, setModalType, setModalData, name, category, price])

    return (
        <div className={styles.wrapper}>
            <Title title={category} />
            <Text text={name} />
            <div className={styles.bottom}>
                <Price price={price} />
                <Button handleClick={openModal} label={'Buy'}/>
            </div>
        </div>
    );
};

export default ProductCard;
