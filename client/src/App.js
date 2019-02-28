import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  state = { users: [] };

  render() {
    return (
      <div className="App">
        { this.state.users.map( user => (
            <span>{ user.firstName + " " + user.lastName }</span>
        ) ) }
      </div>
    );
  }

  componentDidMount() {
    fetch( "http://localhost:3000/user" ).then( res => res.json() ).then( users => {
      console.log( users );
      this.setState( { users } );
    } );
  }
}

export default App;
