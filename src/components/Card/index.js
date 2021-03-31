import {useContext, useEffect,useState} from 'react';
import {CountryContext} from "../../contexts/CountyContext";
import './index.css';
import Question from "../Question";
import Option from "../Option";

const Card = () => {

    const {
        pickRandomCountry, countries, randomCountry,
        options, trueCounter, setTrueCounter,
        setBackgroundColor, generateNewQuestion, backgroundColor,disable,setDisable
    } = useContext(CountryContext);



    useEffect(() => {

        pickRandomCountry(countries);

    }, [options]);

    const handleClick = (truthy, e) => {
        setDisable(!disable);
        if (truthy) {
            e.target.className = 'true-option';
            setTrueCounter(trueCounter + 1)
        } else {
            e.target.className = 'false-option';
            options.find((option) => {
                if (option.truthy) setBackgroundColor('true-option');
            })
        }
    }

    if (!randomCountry) return <div>Loading...</div>;

    return (
        <div className="card">
            <h1> COUNTRY QUIZ</h1>
            <div className="container">
                <Question/>
                {
                    options
                        .map(option => <Option key={option.name}
                                               bg={backgroundColor}
                                               handleClick={(e) => handleClick(option.truthy, e)}
                                               truthy={option.truthy}>{option.name}
                        </Option>)
                }
                <div className="button-container">
                    <button disabled={disable} onClick={generateNewQuestion}>Next</button>
                </div>

            </div>
        </div>
    );
};

export default Card;
