import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./redux/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import io from "socket.io-client";
import socketActions from "./redux/middleware/socketActions";


const socket = io( "http://localhost:3000" );
// const socket = io( "http://localhost:1337" );

const middleWare = [ thunk, socketActions( socket ) ];
const store = createStore(
	rootReducer,
	composeWithDevTools( applyMiddleware( ...middleWare ) ),
);

socket.on( "serverReduxAction", ( action ) => {
	console.log( action );
	store.dispatch( action );
} );

ReactDOM.render(
	<Provider store={ store }>
		<App socket={ socket }/>
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
