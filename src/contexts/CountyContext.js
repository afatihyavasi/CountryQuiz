import {createContext, useState, useEffect} from 'react';

const CountryContext = createContext();

//API URL
const url = 'https://restcountries.eu/rest/v2/all';


const CountryContextProvider = ({children}) => {
    //States
    const [countries, setCountries] = useState();
    const [question, setQuestion] = useState();
    const [options, setOptions] = useState([]);
    const [randomCountry, setRandomCountry] = useState();

    // Get country list with fetch.
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(response => setCountries(response))
    }, [])



    //Picking random country in the countries
    const pickRandomCountry = (countryList) => {
        const randomNumber = Math.floor(Math.random() * countryList.length);
        countryList.forEach((country, index) => {
            if (index === randomNumber) setRandomCountry(country);
        })
    };


    const createFalseOptions = () => {
        const options = [];
        const randomNumber = Math.floor(Math.random() * countries.length);
        countries.forEach((country, index) => {
            if (index === randomNumber && randomCountry.name !== country.name)options.push(country.name)
        })
        return options[0];
    }

    //Generate random question . Ask country capital or country flag.
    const randomQuestion = () => {
        const randomBoolean = Math.random() < 0.5; //TODO:change value 1 to 0.5
        randomBoolean ? countryCapitalQuestion() : countryFlagQuestion();
    }


    const countryCapitalQuestion = () => {
        //TODO:Div icinde ve class ozellikleri vererek soruyu gonder.

        setQuestion(`${randomCountry.capital} is the capital of`);
        createAnotherOptions();
    }

    const countryFlagQuestion = () => {
        setQuestion(<>
            <img src={randomCountry.flag} alt="country-flag"/>
            <h5>Which country does this flag belong to?</h5>
        </>)
        createAnotherOptions();
    }

    const createAnotherOptions = () => {
        //Correct option
        setOptions([
            {
                name: randomCountry.name,
                truthy: true,
            } ,
            {
                name : createFalseOptions(),
                truthy: false
            },
            {
                name : createFalseOptions(),
                truthy: false
            },
            {
                name : createFalseOptions(),
                truthy: false
            }

        ])
    }

    const values = {
        countries,
        question,
        options,
        setQuestion,
        setOptions,
        pickRandomCountry,
        randomCountry,
        setRandomCountry,
        randomQuestion,
        createFalseOptions,
    }

    return (
        <CountryContext.Provider value={values}>
            {children}
        </CountryContext.Provider>
    );
};

export {CountryContext, CountryContextProvider}

