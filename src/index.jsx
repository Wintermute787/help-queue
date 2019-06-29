import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/App';
import * as serviceWorker from './serviceWorker';
import App from "./components/App";



// var heading = React.createElement('h1', {}, 'Help Queue');
// var clock = React.createElement('h2', {},`It is ${new Date().toLocaleTimeString()}`);
// var app = React.createElement('div', {}, heading);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
serviceWorker.unregister();
