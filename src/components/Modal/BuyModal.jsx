import React, { useContext, useCallback, useState } from 'react';
import Button from '../commons/Button/Button';
import Input from '../commons/Input/Input';
import Price from '../commons/Price/Price';
import Title from '../commons/Title/Title';
import { Context } from '../context/Context';
import Text from './../commons/Text/Text';
import styles from './Modal.module.scss';
import { validationText } from './../../utils/validationText';
import ErrorText from '../commons/ErrorText/ErrorText';

const onlyLetters = /^[a-zA-Z]+$/g
const onlyNumbers = /^[0-9]*$/

const BuyModal = () => {
    const {modalData, name, setName, number, setNumber} = useContext(Context)
    const [errorName, setErrorName] = useState(null)
    const [errorNumber, setErrorNumber] = useState(null)
    
    const changeName = useCallback((event) => {
        setName(event.target.value)
        setErrorName(null)
    }, [setName])

    const changeNumber = useCallback((event) => {
        setNumber(event.target.value)
        setErrorNumber(null)
    }, [setNumber])

    const validationName = useCallback(() => {
        if(name === '') {
            return setErrorName('empty')
        }
        if(!onlyLetters.test(name)) {
            return setErrorName('letters')
        }
    }, [name])

    const validationNumber = useCallback(() => {
        if(number === '') {
            return setErrorNumber('empty')
        }
        if(!onlyNumbers.test(number)) {
            return setErrorNumber('numbers')
        }
        if(number.length < 12) {
            return setErrorNumber('length')
        }
    }, [number])

    const sentOrder = useCallback(() => {
        validationName()
        validationNumber()
        if(errorName) return
        if(errorNumber) return
        console.log('order', {
            order: modalData,
            name,
            number,
        });
    }, [modalData, name, number, validationName, validationNumber, errorName, errorNumber])

    return (
        <div className={styles.buy}>
            <Title title={modalData?.category || ''} />
            <Text  text={modalData?.name || ''} />
            <Price price={modalData?.price || ''} modal={true} />
            <Input 
                placeholder={'Name'} 
                name={'name'}
                value={name}
                handleChange={changeName}
                error={errorName}
            />
            <ErrorText>
                {validationText(errorName)}
            </ErrorText>
            <Input 
                placeholder={'Number'}
                name={'number'}
                value={number}
                handleChange={changeNumber}
                error={errorNumber}
            />
            <ErrorText>
                {validationText(errorNumber)}
            </ErrorText>
            <Button 
                label={'Order'} 
                modal={true} 
                long={true}
                handleClick={sentOrder}
            />
        </div>
    );
};

export default BuyModal;
