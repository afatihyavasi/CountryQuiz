import {useContext} from 'react';
import {CountryContext} from "../../contexts/CountyContext";






const Question = () => {

    const {question} = useContext(CountryContext)
    return (
        <div>
            {question}
        </div>
    );
};

export default Question;
