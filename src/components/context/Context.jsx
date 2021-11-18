import axios from 'axios';
import React, { createContext, useCallback, useEffect, useState } from 'react';


export const Context = createContext({
    products: [],
    setProducts: () => {
        throw new Error('Not implemented')
    },
})

const ContextWrapper = ({children}) => {
    const [products, setProducts] = useState([])

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

    console.log(products);

    return (
        <Context.Provider
            value={{
                products,
                setProducts
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default ContextWrapper;
