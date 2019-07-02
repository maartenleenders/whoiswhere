import React, { Component } from 'react';

import './App.css';
import AddUser from "./components/AddUser";
import UserTableContainer from "./containers/UserTableContainer";

class App extends Component {
	state = { page: "users" };

	getContent() {
		switch( this.state.page ) {
			case "add-user":
				return <AddUser
					goTo={ ( page ) => this.setState( { page } ) }
					socket={ this.props.socket }
				/>;
			case "users":
			default:
				return <UserTableContainer
					goTo={ ( page ) => this.setState( { page } ) }
					socket={ this.props.socket }
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
