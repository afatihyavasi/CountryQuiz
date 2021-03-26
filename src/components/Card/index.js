import {useContext, useEffect} from 'react';
import {CountryContext} from "../../contexts/CountyContext";
import './index.css';

import Question from "../Question";
import Option from "../Option";


const Card = () => {

    const {
        pickRandomCountry, countries, randomCountry} = useContext(CountryContext);

    useEffect(() => {
        pickRandomCountry(countries);
    }, []);

    if (!randomCountry) return <div>Loading</div>;

    return (
        <div className="card">
            <h1>Country Quiz</h1>
            <div className="container">
                <Question/>
            </div>
        </div>
    );
};

export default Card;
