import {createContext, useState} from 'react';
import useFetch from '../hooks/useFetch'

const CountryContext = createContext();

const CountryContextProvider = ({children}) => {

    const [question, setQuestion] = useState();
    const [options, setOptions] = useState([
        {
            option: '',
            status: false,
        },
        {
            option: '',
            status: false,
        },
        {
            option: '',
            status: false,
        },
        {
            option: '',
            status: false,
        },
    ]);

    const url = 'https://restcountries.eu/rest/v2/all';
    const countries = useFetch(url)

    const values = {
        countries,
        question,
        options,
        setQuestion,
        setOptions
    }

    return (
        <CountryContext.Provider value={values}>
            {children}
        </CountryContext.Provider>
    );
};

export {CountryContext, CountryContextProvider};

