import axios from 'axios';
import React, { createContext, useCallback, useEffect, useState } from 'react';


export const Context = createContext({
    products: [],
    setProducts: () => {
        throw new Error('Not implemented')
    },
    modal: false,
    setModal: () => {
        throw new Error('Not implemented')
    },
    modalType: '',
    setModalType: () => {
        throw new Error('Not implemented')
    },
    modalData: {},
    setModalData: () => {
        throw new Error('Not implemented')
    },
    name: '',
    setName: () => {
        throw new Error('Not implemented')
    },
    number: '',
    setNumber: () => {
        throw new Error('Not implemented')
    },
})

const ContextWrapper = ({children}) => {
    const [products, setProducts] = useState([])
    const [modal, setModal] = useState(false)
    const [modalType, setModalType] = useState('')
    const [modalData, setModalData] = useState({})
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const getProducts = useCallback(async () => {
        try {
            const {data} = await axios.get('https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e');

            setProducts(data)
        } catch (error) {
            console.error(error)
        }
    }, [])

    useEffect(() => {
        getProducts()
    }, [getProducts])

    return (
        <Context.Provider
            value={{
                products,
                setProducts,
                modal,
                setModal,
                modalType,
                setModalType,
                modalData,
                setModalData,
                name,
                number,
                setName,
                setNumber
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default ContextWrapper;
