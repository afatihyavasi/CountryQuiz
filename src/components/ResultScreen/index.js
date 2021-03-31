import {useContext} from 'react';
import {CountryContext} from "../../contexts/CountyContext";
import './index.css';


const ResultScreen = () => {

    const {trueCounter, generateNewQuestion, setTrueCounter, setQuestionIndex} = useContext(CountryContext);

    const handleClick = () => {
        generateNewQuestion();
        setQuestionIndex(1);
        setTrueCounter(0);
    }
    return (
        <div className='result-screen'>
            <img src='/celebrate.svg' alt='score'/>
            <h4 className="score-text">You got <span>{trueCounter}</span> correct answer</h4>
            <button onClick={handleClick}>PLAY AGAIN</button>
        </div>
    );
};

export default ResultScreen;
