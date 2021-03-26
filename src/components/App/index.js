import Card from "../Card";
import './index.css';

import {useContext,useEffect} from 'react';
import {CountryContext} from "../../contexts/CountyContext";

const App = () => {

    const {countries} = useContext(CountryContext);

    if(!countries) return <div>YUKLENIYOR...</div>

    return (
        <div className='app'>
            <Card/>
        </div>
    );
};

export default App;
