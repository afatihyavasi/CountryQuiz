import {createContext, useState, useEffect} from 'react';

const CountryContext = createContext();

//API URL
const url = 'https://restcountries.eu/rest/v2/all';

const CountryContextProvider = ({children}) => {

    // Get country list with fetch.
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(response => setCountries(response))
    }, [])

    //States
    const [countries, setCountries] = useState();
    const [question, setQuestion] = useState();
    const [options, setOptions] = useState();
    const [randomCountry, setRandomCountry] = useState();

    //Picking random country in the countries
    const pickRandomCountry = (countryList) => {
        const randomNumber = Math.floor(Math.random() * countryList.length);
        countryList.forEach((country, index) => {
            if (index === randomNumber) {
                setRandomCountry(country);
                return country;
            }
        })
    };

    //Generate random question . Ask country capital or country flag.
    const randomQuestion = () => {
        const randomBoolean = Math.random() < 1; //TODO:change value 1 to 0.5
        randomBoolean ? countryCapitalQuestion() : countryFlagQuestion();
    }

    const countryCapitalQuestion = () => {
        setQuestion(`${randomCountry.capital} is the capital of`);
        const optionsQuestion = [
            {
                name: randomCountry.name,
                truthy: true,
            }
        ]
        for (let i = 0; i < 3; i++) {
            let questionOptionFalseCountry = pickRandomCountry(countries);
            if(questionOptionFalseCountry===randomCountry)questionOptionFalseCountry = pickRandomCountry(countries);

            optionsQuestion.push({
                name: questionOptionFalseCountry.name,
                truthy: false
            })
        }
        setOptions(optionsQuestion);
    }

    const countryFlagQuestion = () => {
        setQuestion(<>
            <img src={randomCountry.flag} alt="country-flag"/>
            <h5>Which country does this flag belong to?</h5>
        </>)
        const optionsQuestion = [
            {
                name: randomCountry.name,
                truthy: true,
            }
        ]
        for (let i = 0; i < 3; i++) {
            pickRandomCountry(countries);
            optionsQuestion.push({
                name: randomCountry.name,
                truthy: false
            })
        }
        setOptions(optionsQuestion);
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
        randomQuestion
    }

    return (
        <CountryContext.Provider value={values}>
            {children}
        </CountryContext.Provider>
    );
};

export {CountryContext, CountryContextProvider}

