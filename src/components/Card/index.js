import {useContext,useEffect} from 'react';
import {CountryContext} from "../../contexts/CountyContext";
import './index.css';

import Question from "../Question";
import Option from "../Option";


const Card = () => {
    const {countries, setOptions, setQuestion,question} = useContext(CountryContext);

    if (!countries) return <div>Loading..</div>

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
