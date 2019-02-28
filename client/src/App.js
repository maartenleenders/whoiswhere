import React, { Component } from 'react';
import './App.css';
import UserTable from "./components/UserTable";
import AddUser from "./components/AddUser";



class App extends Component {
	state = { page: "users" };

	getContent() {
		switch( this.state.page ) {
			case "add-user":
				return <AddUser
					goTo={ ( page ) => this.setState( { page } ) }
				/>;
			case "users":
			default:
				return <UserTable
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
