import {useContext,useEffect} from 'react';
import {CountryContext} from "../../contexts/CountyContext";
import './index.css';


const ResultScreen = () => {

    const {trueCounter, generateNewQuestion, setTrueCounter, setQuestionIndex,setDisable} = useContext(CountryContext);

    useEffect(()=>{
        return()=>{
            setQuestionIndex(1);
            setDisable(true);
        }
    },[])

    const handleClick = () => {
        generateNewQuestion();
        setTrueCounter(0);
    }
    return (
        <div className='result-screen'>
            <img src='/public/celebrate.svg' alt='score'/>
            <h4 className="score-text">You got <span>{trueCounter}</span> correct answer</h4>
            <button onClick={handleClick}>PLAY AGAIN</button>
        </div>
    );
};

export default ResultScreen;
