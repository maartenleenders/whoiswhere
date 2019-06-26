import React, { Component } from 'react';
import io from  "socket.io-client";

import './App.css';
import AddUser from "./components/AddUser";
import UserTableContainer from "./containers/UserTableContainer";


const socket = io( "http://localhost:3000" );

class App extends Component {
	state = { page: "users" };

	getContent() {
		switch( this.state.page ) {
			case "add-user":
				return <AddUser
					goTo={ ( page ) => this.setState( { page } ) }
					socket={ socket }
				/>;
			case "users":
			default:
				return <UserTableContainer
					goTo={ ( page ) => this.setState( { page } ) }
					socket={ socket }
				/>
		}
	}

	render() {
		return (
			<div className="App">
				{ this.getContent() }
			</div>
		);
	}
}

export default App;
