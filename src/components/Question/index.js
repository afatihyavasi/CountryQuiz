import {useContext, useEffect} from 'react';
import {CountryContext} from "../../contexts/CountyContext";


const Question = ({country}) => {

    const {randomQuestion,question} = useContext(CountryContext)

    useEffect(() => {
        randomQuestion();
    },[])

    if(!question) return <div>Loading</div>;

    return (
        <div>
            {question}
        </div>
    );
};

export default Question;
