import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {AppProvider} from '../src/Contexts/Context'


ReactDOM.render(<AppProvider><BrowserRouter><App/></BrowserRouter></AppProvider>, document.getElementById('root'));


