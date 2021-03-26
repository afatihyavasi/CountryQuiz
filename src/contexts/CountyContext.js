import {createContext, useState, useEffect} from 'react';


const CountryContext = createContext();

const url = 'https://restcountries.eu/rest/v2/all';

const CountryContextProvider = ({children}) => {


    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(response => setCountries(response))
    }, [])

    const [countries, setCountries] = useState();
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
    const [randomCountry, setRandomCountry] = useState();

    const pickRandomCountry = (countryList) => {
        const randomNumber = Math.floor(Math.random() * countryList.length);
        return countryList.forEach((country, index) => {
            if (index === randomNumber) setRandomCountry(country);
        });
    }

    const randomQuestion = () => {
        const randomBoolean = Math.random() < 0.5;
        randomBoolean ? countryCapitalQuestion() : countryFlagQuestion();
    }

    const countryCapitalQuestion = () => {


    }

    const  countryFlagQuestion = () => {

    }

    const values = {
        countries,
        question,
        options,
        setQuestion,
        setOptions,
        pickRandomCountry,
        randomCountry,
        setRandomCountry
    }

    return (
        <CountryContext.Provider value={values}>
            {children}
        </CountryContext.Provider>
    );
};

export {CountryContext, CountryContextProvider};

