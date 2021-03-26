import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {CountryContextProvider} from './contexts/CountyContext';

ReactDOM.render(
    <React.StrictMode>
        <CountryContextProvider>
            <App/>
        </CountryContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

