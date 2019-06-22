import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import * as api from'./utils/api'

window.api = api;
ReactDOM.render(
    <App />,
    document.getElementById('root')
);