import './index.css';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';;

let rerenderEntierTree = (state) => {ReactDOM.render( 
    <BrowserRouter>
        <App state={state}  dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntierTree(store.getState());

store.subscriber(rerenderEntierTree);
