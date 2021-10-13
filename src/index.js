import './index.css';
import state, { addPost, subscriber, updateNewPostText} from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';;

let rerenderEntierTree = (state) => {ReactDOM.render( 
    <BrowserRouter>
        <App state={state}  addPost={addPost} updateNewPostText={updateNewPostText}/>
    </BrowserRouter>, document.getElementById('root')
    );
}

subscriber(rerenderEntierTree);

rerenderEntierTree(state);