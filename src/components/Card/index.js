import {useContext, useEffect, useState} from 'react';
import {CountryContext} from "../../contexts/CountyContext";
import './index.css';
import Question from "../Question";
import Option from "../Option";

const Card = () => {

    const {
        pickRandomCountry, countries, randomCountry, randomQuestion, options
    } = useContext(CountryContext);

    const [backgroundColor, setBackgroundColor] = useState('');

    useEffect(() => {

        pickRandomCountry(countries);

    }, [options]);

    //TODO:Build loaders with HOC.

    if (!randomCountry) return <div>Loading</div>;

    const generateNewQuestion = () => {
        setBackgroundColor('');
        pickRandomCountry(countries);
        randomQuestion();
    }

    const handleClick = (truthy, e) => {
        if (truthy) e.target.className = 'bg-green-500'
        else {
            e.target.className = 'bg-red-500';
            options.find((option) => {
                if (option.truthy) setBackgroundColor('bg-green-500');
            })
        }
    }


    return (
        <div className="card">
            <h1>Country Quiz</h1>
            <div className="container">
                <Question/>
                {
                    options
                        .sort(() => .5 - Math.random())
                        .map(option => <Option key={option.name}
                                               bg={backgroundColor}
                                               handleClick={(e) => handleClick(option.truthy, e)}
                                               truthy={option.truthy}>{option.name}
                        </Option>)
                }
                <button onClick={generateNewQuestion}>Ok</button>
            </div>
        </div>
    );
};

export default Card;
