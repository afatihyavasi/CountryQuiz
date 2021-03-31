import Card from "../Card";
import ResultScreen from "../ResultScreen";
import './index.css';

import {useContext} from 'react';
import {CountryContext} from "../../contexts/CountyContext";

const App = () => {

    const {countries, questionIndex} = useContext(CountryContext);

    if (!countries) return <div>Loading...</div>

    return (
        <div className='app'>
            {
                questionIndex === 6
                    ? <ResultScreen/>
                    : <Card/>
            }
        </div>
    );
};

export default App;
