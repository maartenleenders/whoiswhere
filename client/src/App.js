import React, { Component } from 'react';

import './App.css';
import UserTableContainer from "./containers/UserTableContainer";
import NewUserContainer from "./containers/NewUserContainer";

class App extends Component {
	state = { page: "users" };

	getContent() {
		switch( this.state.page ) {
			case "new-user":
				return <NewUserContainer
					goTo={ ( page ) => this.setState( { page } ) }

				/>;
			case "users":
			default:
				return <UserTableContainer
					goTo={ ( page ) => this.setState( { page } ) }
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
