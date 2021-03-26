import {createContext, useState} from 'react';
import useFetch from  '../hooks/useFetch'

const CountryContext = createContext();


const CountryContextProvider = ({children}) => {

    const countries = useFetch('https://restcountries.eu/rest/v2/name/turkey');



    const values = {

    }

    return (
        <CountryContext.Provider value={values}>
            {children}
        </CountryContext.Provider>
    );
};

export {CountryContext, CountryContextProvider};

