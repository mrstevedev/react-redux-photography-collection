import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.scss';
import {store} from './store';


import { BrowserRouter } from 'react-router-dom';


const render = () => {
    ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('app'));
}
render();
store.subscribe(render);
