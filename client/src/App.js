import React, { Component } from 'react';

import './App.css';
import EmployeeTableContainer from "./containers/EmployeeTableContainer";
import NewEmployeeContainer from "./containers/NewEmployeeContainer";

class App extends Component {
	state = { page: "employees" };

	getContent() {
		switch( this.state.page ) {
			case "new-employee":
				return <NewEmployeeContainer
					goTo={ ( page ) => this.setState( { page } ) }

				/>;
			case "employees":
			default:
				return <EmployeeTableContainer
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
