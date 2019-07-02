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
import { updateUserBuilding } from "./redux/actions/users";

const store = createStore(
	rootReducer,
	composeWithDevTools( applyMiddleware( thunk ) ),
);

const socket = io( "http://localhost:3000" );

socket.on( "setInitialData", ( data ) => {
	console.log( data );
} );

socket.on( "buildingChange", ( data ) => {
	const userId = data.userId;
	const buildingId = data.buildingId;
	this.props.store.dispatch( updateUserBuilding( userId, buildingId ) );
} );

ReactDOM.render(
	<Provider store={ store }>
		<App socket={ socket }/>
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
