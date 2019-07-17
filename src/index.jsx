import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/App';
import * as serviceWorker from './serviceWorker';
import App from "./components/App";
import 'semantic-ui-css/semantic.min.css';
import { HashRouter} from "react-router-dom";
import { createStore } from 'redux';
import ticketListReducer from './reducers/ticket-list-reducer';
import { Provider } from 'react-redux';


const store = createStore(ticketListReducer);
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
