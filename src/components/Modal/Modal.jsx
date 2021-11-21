import React, { useCallback, useContext } from 'react';
import { Context } from '../context/Context';
import styles from './Modal.module.scss';

const Modal = ({children}) => {
    const {setModal, setModalType, setModalData} = useContext(Context)

    const closeModal = useCallback((event) => {
        if(event.target !== event.currentTarget) return
        setModal(false)
        setModalType('')
        setModalData({})
    }, [setModal, setModalType, setModalData])

    return (
        <div onClick={closeModal} className={styles.wrapper}>
            <div className={styles.element}>
                <div onClick={closeModal} className={styles.close}>
                    <p onClick={closeModal}>&times;</p>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;