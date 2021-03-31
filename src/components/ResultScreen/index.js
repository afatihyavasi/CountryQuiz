import {useContext} from 'react';
import {CountryContext} from "../../contexts/CountyContext";


const ResultScreen = () => {

    const {trueCounter, generateNewQuestion, setTrueCounter, setQuestionIndex} = useContext(CountryContext);

    const handleClick = () => {
        generateNewQuestion();
        setQuestionIndex(1);
        setTrueCounter(0);
    }
    return (
        <div>
            <button onClick={handleClick}>GAME OVER !</button>
            <div>{trueCounter}/5</div>
        </div>
    );
};

export default ResultScreen;
