import {useContext,useEffect,useState} from 'react';
import {CountryContext} from "../../contexts/CountyContext";



const Question = () => {

    const {countries, randomCountry,pickRandomCountry,setRandomCountry} = useContext(CountryContext);

    useEffect(() => {
        pickRandomCountry(countries);
    },[]);








    return (
        <div>
            {randomCountry ? randomCountry.name : null}
        </div>
    );
};

export default Question;
