import {useContext, useEffect} from 'react';
import {CountryContext} from "../../contexts/CountyContext";
import './index.css';

import Question from "../Question";
import Option from "../Option";



const Card = () => {

    const {
        pickRandomCountry, countries, randomCountry, randomQuestion,options
    } = useContext(CountryContext);


    useEffect(() => {
        pickRandomCountry(countries);

    }, [options]);


    //TODO:Build loaders with HOC.

    if (!randomCountry) return <div>Loading</div>;

    const generateNewQuestion = () => {
        pickRandomCountry(countries);
        randomQuestion();
    }

    return (
        <div className="card">
            <h1>Country Quiz</h1>
            <div className="container">
                <Question/>
                {
                    options.map(option => <Option key={option.name}>{option.name}</Option>)
                }
                <button onClick={generateNewQuestion}>Ok</button>
            </div>
        </div>
    );
};

export default Card;
