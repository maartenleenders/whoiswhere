import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserRow from "./components/UserRow";



class App extends Component {
	constructor() {
		super();
		this.getUsers = this.getUsers.bind( this );
	}
	state = { users: [] };

	getUsers() {
		fetch( "http://localhost:3000/user" ).then( res => res.json() ).then( users => {
			console.log( users );
			this.setState( { users } );
		} );
	}

  render() {
    return (
      <div className="App">
          <table>
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>1</th>
                      <th>2</th>
                      <th>3</th>
                      <th>4</th>
                      <th>🏝</th>
                  </tr>
              </thead>
              <tbody>
                  { this.state.users.map( user => (
                      <UserRow key={user.id} user={user} refresh={ this.getUsers } />
                  ) ) }
              </tbody>
          </table>
      </div>
    );
  }

	componentDidMount() {
		this.getUsers();
		setInterval( this.getUsers, 2000 );
	}
}

export default App;
