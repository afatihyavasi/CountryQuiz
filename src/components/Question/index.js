import {useContext, useEffect} from 'react';
import {CountryContext} from "../../contexts/CountyContext";
import './index.css'

const Question = () => {
    const {randomQuestion, question} = useContext(CountryContext)
    useEffect(() => {
        randomQuestion();
    }, [])

    if (!question) return <div>Loading</div>;

    return (
        <div className="question">
            {question}
        </div>
    );
};

export default Question;
