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
    const [questionIndex, setQuestionIndex] = useState(1);
    const [trueCounter, setTrueCounter] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState('');
    const [disable, setDisable] = useState(true);

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

    //Generate random question . Ask country capital or country flag.
    const randomQuestion = () => {
        const randomBoolean = Math.random() < 0.5;
        randomBoolean ? countryCapitalQuestion() : countryFlagQuestion();

    }

    const countryCapitalQuestion = () => {
        setQuestion(<div className='question-container'><strong>{randomCountry.capital}</strong> is the capital of
        </div>);
        createOptions();
    }

    const countryFlagQuestion = () => {
        setQuestion(<div className='question-container'>
            <div className="image-container">
                <img src={randomCountry.flag} alt="country-flag"/>
            </div>
            <h5>Which country does this flag belong to?</h5>
        </div>)
        createOptions();
    }

    // Create a false option.
    const createFalseOptions = () => {
        const options = [];
        const randomNumber = Math.floor(Math.random() * countries.length);
        countries.forEach((country, index) => {
            if (index === randomNumber && randomCountry.name !== country.name) options.push(country.name)
        })
        return options[0];
    }

    //Create options.
    const createOptions = () => {
        setOptions([
            {
                name: randomCountry.name,
                truthy: true,
            },
            {
                name: createFalseOptions(),
                truthy: false
            },
            {
                name: createFalseOptions(),
                truthy: false
            },
            {
                name: createFalseOptions(),
                truthy: false
            }
        ].sort(() => .5 - Math.random()));
    }

    // Generate new question.
    const generateNewQuestion = () => {
        setBackgroundColor('');
        setDisable(!disable);
        setQuestionIndex(questionIndex + 1);
        pickRandomCountry(countries);
        randomQuestion();
    }


    const values = {
        countries, question, options, setQuestion, setOptions, pickRandomCountry, randomCountry,
        setRandomCountry, randomQuestion, trueCounter, setTrueCounter, questionIndex, setQuestionIndex,
        backgroundColor, setBackgroundColor, generateNewQuestion, disable, setDisable
    }

    return (
        <CountryContext.Provider value={values}>
            {children}
        </CountryContext.Provider>
    );
};

export {CountryContext, CountryContextProvider}

